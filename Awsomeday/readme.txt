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

Backend:
--------
1. create dynamoDB:
arn:aws:dynamodb:us-east-1:743144174017:table/Sprint

2.Iam create role:
-select lamda and permission.
-select AWSLambdaBasicExecutionRole 
-give rolename and create role
-Add inline and search dynamoDB
-Give action getitem and putitem
-add resoureces arn
-click reviewpolicy and enter the policy name and create policy.
3.Create Lamda service:
-set program
-use existing role from previous step.


Create REST api:
---------------
1.create aws api gateway.
-create api - new api
-choose edge optimized
-create api.
 a.click on authorizer
   -select type cognito
   -set token-source: Authorization and create.
 b. create reource
   -give name as chart
   -Enable API Gateway CORS
   -create resource
 c. create method
   -give lamda function and check use lamda proxy integration
   -save
 d. choose method request card
   -edit Authorization and add conito user
 e. deploy using action dropdown
   -deploy with stag as prod
   https://9f9zizzseb.execute-api.us-east-1.amazonaws.com/prod
   
   
   
refer: 
https://www.baeldung.com/aws-lambda-dynamodb-java   
https://github.com/eugenp/tutorials/blob/master/aws-lambda/src/main/java/com/baeldung/lambda/dynamodb/bean/PersonRequest.java  
