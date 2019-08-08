Cognito:
-------
1. create user pool
poolid: us-east-1_MaBxArtB5
2.Add app client and uncheck general client secret, it will allow browsers to use this.
AppClientId: 7tsvt1ebhj7m9upemb7j34lims


S3:
---
1.create s3 and upload all files.
2.uncheck block all public on permission>block public access
3.add bucket policy on permission>bucket policy
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::sprintchart/*"
        }
    ]
}
4.Enable static web hosting under properties
s3 url: http://sprintchart.s3-website-us-east-1.amazonaws.com
