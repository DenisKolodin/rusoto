#![allow(dead_code)]
extern crate rusoto;
extern crate xml;
extern crate time;
extern crate regex;
extern crate rustc_serialize;
use rusoto::credentials::*;
use rusoto::error::*;
use rusoto::sqs::*;
use rusoto::s3::*;
use rusoto::regions::*;
use time::*;
use std::fs::File;
use std::io::Write;
use std::io::Read;

fn main() {
	let provider = DefaultAWSCredentialsProviderChain::new();
	let region = Region::UsEast1;

	let provider2 = ProfileCredentialsProvider::new().unwrap();

	// Creates an SQS client with its own copy of the credential provider chain:
	// let mut sqs = SQSHelper::new(provider2, &region);

	// match sqs_roundtrip_tests(&mut sqs) {
	// 	Ok(_) => { println!("Everything worked."); },
	// 	Err(err) => { println!("Got error: {}", err); }
	// }

	// S3 client gets its own provider chain:
	let mut s3 = S3Helper::new(provider.clone(), &region);

	// works with codegen
	match s3_list_buckets_tests(&mut s3) {
		Ok(_) => { println!("Everything worked for S3 list buckets."); },
		Err(err) => { println!("Got error in s3 list buckets: {}", err); }
	}

	let mut bucket_name = format!("rusoto{}", get_time().sec);
	// let bucket_name = "rusoto1440826511";

	// works with codegen
	match s3.create_bucket(&bucket_name) {
		Err(why) => {
			println!("got error back...");
			println!("Error: {:?}", why);
		},
		Ok(_) => println!("bucket created."),
	}

	let new_bucket_req = CreateBucketRequest::default();
	new_bucket_req.bucket = &bucket_name;
	let bucket_config = CreateBucketConfiguration::default();
	bucket_config.location_constraint = "bleh";
	new_bucket_req.create_bucket_configuration = Some(bucket_config);

	match s3.create_bucket_with_request(&bucket_name) {
		Err(why) => {
			println!("got error back...");
			println!("Error: {:?}", why);
		},
		Ok(_) => println!("bucket created."),
	}


	// let mut f = File::open("../src/sample-credentials").unwrap();
	// let mut contents : Vec<u8> = Vec::new();
	//
	// match f.read_to_end(&mut contents) {
	// 	Err(why) => panic!(AWSError::new(format!("Error opening file to send to S3: {}", why))),
	// 	Ok(_) => {
	// 		let response = s3.put_object(bucket_name, "sample-credentials", contents).unwrap();
	// 		println!("yay: {:?}", response);
	// 	}
	// }

	println!("Exiting cleanly");

}

fn s3_list_buckets_tests(s3: &mut S3Helper) -> Result<(), AWSError> {
	let response = try!(s3.list_buckets());
	println!("we's good");
	for q in response.buckets {
		println!("Existing bucket: {:?}", q.name);
	}

	Ok(())
}

fn sqs_roundtrip_tests(sqs: &mut SQSHelper) -> Result<(), AWSError> {
	// list existing queues
	let response = try!(sqs.list_queues());
	for q in response.queue_urls {
		println!("Existing queue: {}", q);
	}

	// create a new queue
	let q_name = &format!("test_q_{}", get_time().sec);
	let response = try!(sqs.create_queue(q_name));
	println!("Created queue {} with url {}", q_name, response.queue_url);

	// query it by name
	let response = try!(sqs.get_queue_url(q_name));
	let queue_url = &response.queue_url;
	println!("Verified queue url {} for queue name {}", queue_url, q_name);

	// send it a message
	let msg_str = "lorem ipsum dolor sit amet";
	let response = try!(sqs.send_message(queue_url, msg_str));
	println!("Send message with body '{}' and created message_id {}", msg_str, response.message_id);

	// receive a message
	let response = try!(sqs.receive_message(queue_url));
	for msg in response.messages {
		println!("Received message '{}' with id {}", msg.body, msg.message_id);
		try!(sqs.delete_message(queue_url, &msg.receipt_handle));
	}

	// delete the queue
	try!(sqs.delete_queue(queue_url));
	println!("Queue {} deleted", queue_url);

	Ok(())
}
