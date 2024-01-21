BUILD THE IMAGE
$ docker build -t nodeapi .

CREATE DOCKER CONTAINER AND ENVIRONMENT VARIABLE 
$ docker run -p 80:3100 -e .env --name nodeapi  nodeapi

NOTE: API-KEY of openweather needed to fill in .env file.

ENDPOINTS: 
1.http://localhost/api/hello
2.://localhost/api/health

CREATE JENKINS PIPELINE
1. Select poll SCM and put "* * * * *" to check the github repo every minute if any changed made and eventually run the pipeline script based on this.
2. Select "Pipeline script from SCM", put the repo link.
3. Install NodeJS plugin and configure the PATH in Tools.
4. Build and Test.

K8s CLUSTER - TERRAFORM
1. Create Access key and Secret Key in AWS IAM 
2. Put the keys in variable.tf file located inside terraform directoty.
3. terraform init
4. terraform plan
5. terraform apply


