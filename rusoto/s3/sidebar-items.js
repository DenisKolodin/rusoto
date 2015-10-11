initSidebarItems({"enum":[["CannedAcl",""]],"fn":[["canned_acl_in_aws_format",""],["create_bucket_config_xml",""],["multipart_upload_finish_xml",""],["needs_create_bucket_config",""]],"struct":[["AbortMultipartUploadOutput",""],["AbortMultipartUploadRequest",""],["AccessControlPolicy",""],["Bucket",""],["BucketAlreadyExists","The requested bucket name is not available. The bucket namespace is shared by all users of the system. Please select a different name and try again."],["BucketLoggingStatus",""],["CORSConfiguration",""],["CORSRule",""],["CloudFunctionConfiguration",""],["CommonPrefix",""],["CompleteMultipartUploadOutput",""],["CompleteMultipartUploadRequest",""],["CompletedMultipartUpload",""],["CompletedPart",""],["Condition",""],["CopyObjectOutput",""],["CopyObjectRequest",""],["CopyObjectResult",""],["CopyPartResult",""],["CreateBucketConfiguration",""],["CreateBucketOutput",""],["CreateBucketRequest",""],["CreateMultipartUploadOutput",""],["CreateMultipartUploadRequest",""],["Delete",""],["DeleteBucketCorsRequest",""],["DeleteBucketLifecycleRequest",""],["DeleteBucketPolicyRequest",""],["DeleteBucketReplicationRequest",""],["DeleteBucketRequest",""],["DeleteBucketTaggingRequest",""],["DeleteBucketWebsiteRequest",""],["DeleteMarkerEntry",""],["DeleteObjectOutput",""],["DeleteObjectRequest",""],["DeleteObjectsOutput",""],["DeleteObjectsRequest",""],["DeletedObject",""],["Destination",""],["ErrorDocument",""],["GetBucketAclOutput",""],["GetBucketAclRequest",""],["GetBucketCorsOutput",""],["GetBucketCorsRequest",""],["GetBucketLifecycleOutput",""],["GetBucketLifecycleRequest",""],["GetBucketLocationOutput",""],["GetBucketLocationRequest",""],["GetBucketLoggingOutput",""],["GetBucketLoggingRequest",""],["GetBucketNotificationConfigurationRequest",""],["GetBucketPolicyOutput",""],["GetBucketPolicyRequest",""],["GetBucketReplicationOutput",""],["GetBucketReplicationRequest",""],["GetBucketRequestPaymentOutput",""],["GetBucketRequestPaymentRequest",""],["GetBucketTaggingOutput",""],["GetBucketTaggingRequest",""],["GetBucketVersioningOutput",""],["GetBucketVersioningRequest",""],["GetBucketWebsiteOutput",""],["GetBucketWebsiteRequest",""],["GetObjectAclOutput",""],["GetObjectAclRequest",""],["GetObjectOutput",""],["GetObjectRequest",""],["GetObjectTorrentOutput",""],["GetObjectTorrentRequest",""],["Grant",""],["Grantee",""],["HeadBucketRequest",""],["HeadObjectOutput",""],["HeadObjectRequest",""],["IndexDocument",""],["Initiator",""],["LambdaFunctionConfiguration","Container for specifying the AWS Lambda notification configuration."],["LifecycleConfiguration",""],["LifecycleExpiration",""],["ListBucketsOutput",""],["ListMultipartUploadsOutput",""],["ListMultipartUploadsRequest",""],["ListObjectVersionsOutput",""],["ListObjectVersionsRequest",""],["ListObjectsOutput",""],["ListObjectsRequest",""],["ListPartsOutput",""],["ListPartsRequest",""],["LoggingEnabled",""],["MultipartUpload",""],["NoSuchBucket","The specified bucket does not exist."],["NoSuchKey","The specified key does not exist."],["NoSuchUpload","The specified multipart upload does not exist."],["NoncurrentVersionExpiration","Specifies when noncurrent object versions expire. Upon expiration, Amazon S3 permanently deletes the noncurrent object versions. You set this lifecycle configuration action on a bucket that has versioning enabled (or suspended) to request that Amazon S3 delete noncurrent object versions at a specific period in the object's lifetime."],["NoncurrentVersionTransition","Container for the transition rule that describes when noncurrent objects transition to the GLACIER storage class. If your bucket is versioning-enabled (or versioning is suspended), you can set this action to request that Amazon S3 transition noncurrent object versions to the GLACIER storage class at a specific period in the object's lifetime."],["NotificationConfiguration","Container for specifying the notification configuration of the bucket. If this element is empty, notifications are turned off on the bucket."],["NotificationConfigurationDeprecated",""],["Object",""],["ObjectAlreadyInActiveTierError","This operation is not allowed against this storage tier"],["ObjectIdentifier",""],["ObjectNotInActiveTierError","The source object of the COPY operation is not in the active tier and is only stored in Amazon Glacier."],["ObjectVersion",""],["Owner",""],["Part",""],["PutBucketAclRequest",""],["PutBucketCorsRequest",""],["PutBucketLifecycleRequest",""],["PutBucketLoggingRequest",""],["PutBucketNotificationConfigurationRequest",""],["PutBucketNotificationRequest",""],["PutBucketPolicyRequest",""],["PutBucketReplicationRequest",""],["PutBucketRequestPaymentRequest",""],["PutBucketTaggingRequest",""],["PutBucketVersioningRequest",""],["PutBucketWebsiteRequest",""],["PutObjectAclOutput",""],["PutObjectAclRequest",""],["PutObjectOutput",""],["PutObjectRequest",""],["QueueConfiguration","Container for specifying an configuration when you want Amazon S3 to publish events to an Amazon Simple Queue Service (Amazon SQS) queue."],["QueueConfigurationDeprecated",""],["Redirect",""],["RedirectAllRequestsTo",""],["ReplicationConfiguration","Container for replication rules. You can add as many as 1,000 rules. Total replication configuration size can be up to 2 MB."],["ReplicationRule",""],["RequestPaymentConfiguration",""],["RestoreObjectOutput",""],["RestoreObjectRequest",""],["RestoreRequest",""],["RoutingRule",""],["Rule",""],["S3Client",""],["S3ClientError",""],["S3Helper",""],["Tag",""],["Tagging",""],["TargetGrant",""],["TopicConfiguration","Container for specifying the configuration when you want Amazon S3 to publish events to an Amazon Simple Notification Service (Amazon SNS) topic."],["TopicConfigurationDeprecated",""],["Transition",""],["UploadPartCopyOutput",""],["UploadPartCopyRequest",""],["UploadPartOutput",""],["UploadPartRequest",""],["VersioningConfiguration",""],["WebsiteConfiguration",""]],"type":[["AcceptRanges",""],["AllowedHeader",""],["AllowedHeaders",""],["AllowedMethod",""],["AllowedMethods",""],["AllowedOrigin",""],["AllowedOrigins",""],["Body",""],["BucketLocationConstraint",""],["BucketLogsPermission",""],["BucketName",""],["BucketVersioningStatus",""],["Buckets",""],["CORSRules",""],["CacheControl",""],["CloudFunction",""],["CloudFunctionInvocationRole",""],["Code",""],["CommonPrefixList",""],["CompletedPartList",""],["ContentDisposition",""],["ContentEncoding",""],["ContentLanguage",""],["ContentLength",""],["ContentMD5",""],["ContentRange",""],["ContentType",""],["CopySource",""],["CopySourceIfMatch",""],["CopySourceIfModifiedSince",""],["CopySourceIfNoneMatch",""],["CopySourceIfUnmodifiedSince",""],["CopySourceRange",""],["CopySourceSSECustomerAlgorithm",""],["CopySourceSSECustomerKey",""],["CopySourceSSECustomerKeyMD5",""],["CopySourceVersionId",""],["CreationDate",""],["Date",""],["Days",""],["DeleteMarker",""],["DeleteMarkerVersionId",""],["DeleteMarkers",""],["DeletedObjects",""],["Delimiter",""],["DisplayName",""],["ETag",""],["EmailAddress",""],["EncodingType","Requests Amazon S3 to encode the object keys in the response and specifies the encoding method to use. An object key may contain any Unicode character; however, XML 1.0 parser cannot parse some characters, such as characters with an ASCII value from 0 to 10. For characters that are not supported in XML 1.0, you can add this parameter to request that Amazon S3 encode the keys in the response."],["Errors",""],["Event","Bucket event for which to send notifications."],["EventList",""],["Expiration",""],["ExpirationStatus",""],["Expires",""],["ExposeHeader",""],["ExposeHeaders",""],["GrantFullControl",""],["GrantRead",""],["GrantReadACP",""],["GrantWrite",""],["GrantWriteACP",""],["Grants",""],["HostName",""],["HttpErrorCodeReturnedEquals",""],["HttpRedirectCode",""],["ID",""],["IfMatch",""],["IfModifiedSince",""],["IfNoneMatch",""],["IfUnmodifiedSince",""],["Initiated",""],["IsLatest",""],["IsTruncated",""],["KeyMarker",""],["KeyPrefixEquals",""],["LambdaFunctionArn",""],["LambdaFunctionConfigurationList",""],["LastModified",""],["Location",""],["MFA",""],["MFADelete",""],["MFADeleteStatus",""],["Marker",""],["MaxAgeSeconds",""],["MaxKeys",""],["MaxParts",""],["MaxUploads",""],["Metadata",""],["MetadataDirective",""],["MetadataKey",""],["MetadataValue",""],["MissingMeta",""],["MultipartUploadId",""],["MultipartUploadList",""],["NextKeyMarker",""],["NextMarker",""],["NextPartNumberMarker",""],["NextUploadIdMarker",""],["NextVersionIdMarker",""],["NotificationId","Optional unique identifier for configurations in a notification configuration. If you don't provide one, Amazon S3 will assign an ID."],["ObjectCannedACL",""],["ObjectIdentifierList",""],["ObjectKey",""],["ObjectList",""],["ObjectStorageClass",""],["ObjectVersionId",""],["ObjectVersionList",""],["ObjectVersionStorageClass",""],["PartNumber",""],["PartNumberMarker",""],["Parts",""],["Payer",""],["Permission",""],["Policy",""],["Prefix",""],["Protocol",""],["QueueArn",""],["QueueConfigurationList",""],["Quiet",""],["Range",""],["ReplaceKeyPrefixWith",""],["ReplaceKeyWith",""],["ReplicationRuleStatus",""],["ReplicationRules",""],["ReplicationStatus",""],["RequestCharged","If present, indicates that the requester was successfully charged for the request."],["RequestPayer","Confirms that the requester knows that she or he will be charged for the request. Bucket owners need not specify this parameter in their requests. Documentation on downloading objects from requester pays buckets can be found at http://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBucket s.html"],["ResponseCacheControl",""],["ResponseContentDisposition",""],["ResponseContentEncoding",""],["ResponseContentLanguage",""],["ResponseContentType",""],["ResponseExpires",""],["Restore",""],["Role",""],["RoutingRules",""],["Rules",""],["S3ClientMessage",""],["SSECustomerAlgorithm",""],["SSECustomerKey",""],["SSECustomerKeyMD5",""],["SSEKMSKeyId",""],["ServerSideEncryption",""],["Size",""],["StorageClass",""],["Suffix",""],["TagSet",""],["TargetBucket",""],["TargetGrants",""],["TargetPrefix",""],["TopicArn",""],["TopicConfigurationList",""],["TransitionStorageClass",""],["Type",""],["URI",""],["UploadIdMarker",""],["Value",""],["VersionIdMarker",""],["WebsiteRedirectLocation",""]]});