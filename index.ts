import { CreateBucketCommand, ListObjectsCommand, PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import fs from "fs";

const s3client = new S3Client({
    endpoint : "http://localhost:9000",
    region: "us-east-1",
    credentials : {
        accessKeyId : "riversideuser",
        secretAccessKey : "riversidepass"
    },
    forcePathStyle : true  
})

async function createBucket(bucketName : string) {
  try {
    const command = new CreateBucketCommand({
      Bucket: bucketName
    });

    const result = await s3client.send(command);
    console.log(`✅ Bucket "${bucketName}" created successfully`, result);
  } catch (err) {
    console.error(`❌ Failed to create bucket "${bucketName}":`, err);
  }
}

async function uploadfile(bucketName : string, key : string , filepath : string) {
    const fileContent = fs.readFileSync(filepath);  // reading the file
    const command = new PutObjectCommand({  // used for uploading small to medium files upto 5 GB
        Bucket : bucketName,
        Key : key,
        Body : fileContent,
    })

    try {
        const data = await s3client.send(command); // send it to the s3 storage to upload the file.
        console.log("file uploaded successfully:",data);
    }catch (err) {
        console.log("some error:",err);
    }
}

async function listFiles(bucketName : string) {
     const command = new ListObjectsCommand({
        Bucket : bucketName
     })

     try {
        const files = await s3client.send(command);
        console.log("the list of files:",files)
     }catch(err){
        console.log("the error is:",err);
     }
}

const bucketName = "test-bucket";
createBucket(bucketName);
uploadfile(bucketName,"happy-emoji.png","/home/surya/Pictures/Screenshots/tongue-emoji.png");
listFiles(bucketName);