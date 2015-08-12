use std::iter::Peekable;
use std::num::ParseIntError;
use std::collections::HashMap;

use xml::reader::events::*;
use xml::reader::Events;
use hyper::client::response::*;

/// generic Error for XML parsing
#[derive(Debug)]
pub struct XmlParseError(pub String);

impl XmlParseError {
	pub fn new(msg: &str) -> XmlParseError {
		XmlParseError(msg.to_string())
	}
}

/// syntactic sugar for the XML event stack we pass around
// We should change this to accept anything that implements the Read trait instead
// of hardcoding to hyper "Response" type.  Makes testing easier.
pub type XmlStack<'a> = Peekable<Events<'a, Response>>;

impl From<ParseIntError> for XmlParseError{
        fn from(_e:ParseIntError) -> XmlParseError { XmlParseError::new("ParseIntError") }
}

/// parse Some(String) if the next tag has the right name, otherwise None
pub fn optional_string_field(field_name: &str, stack: &mut XmlStack) -> Result<Option<String>, XmlParseError> {
	if try!(peek_at_name(stack)) == field_name {
		let val = try!(string_field(field_name, stack));
		Ok(Some(val))
	} else {
		Ok(None)
	}
}

/// return a string field with the right name or throw a parse error
pub fn string_field(name: &str, stack: &mut XmlStack) -> Result<String, XmlParseError> {
	try!(start_element(name, stack));
	let value = try!(characters(stack));
	try!(end_element(name, stack));
	Ok(value)
}

/// return some XML Characters
pub fn characters(stack: &mut XmlStack ) -> Result<String, XmlParseError> {
	if let Some(XmlEvent::Characters(data)) = stack.next() {
		Ok(data.to_string())
	} else {
		Err(XmlParseError::new("Expected characters"))
	}

}

/// get the name of the current element in the stack.  throw a parse error if it's not a StartElement
pub fn peek_at_name(stack: &mut XmlStack) -> Result<String, XmlParseError> {
	let current = stack.peek();
	if let Some(&XmlEvent::StartElement{ref name, ..}) = current {
		Ok(name.local_name.to_string())
	} else {
		Ok("".to_string())
	}
}

/// consume a StartElement with a specific name or throw an XmlParseError
pub fn start_element(element_name: &str, stack: &mut XmlStack)  -> Result<HashMap<String, String>, XmlParseError> {
	let next = stack.next();
	if let Some(XmlEvent::StartElement { name, attributes, .. }) = next {
		if name.local_name != element_name {
			Err(XmlParseError::new(&format!("Expected {} got {}", element_name, name.local_name)))
		} else {
			let mut attr_map = HashMap::new();
			for attr in attributes {
				attr_map.insert(attr.name.local_name, attr.value);
			}
			Ok(attr_map)
		}
	}else {

     	println!("{:#?}", next);
		Err(XmlParseError::new(&format!("Expected StartElement {}", element_name)))
	}
}

/// consume an EndElement with a specific name or throw an XmlParseError
pub fn end_element(element_name: &str, stack: &mut XmlStack)  -> Result<(), XmlParseError> {
	let next = stack.next();
	if let Some(XmlEvent::EndElement { name, .. }) = next {
		if name.local_name != element_name {
			Err(XmlParseError::new(&format!("Expected {} got {}", element_name, name.local_name)))
		} else {
			Ok(())
		}
	}else {
		Err(XmlParseError::new(&format!("Expected EndElement {} got {:?}", element_name, next)))
	}
}
