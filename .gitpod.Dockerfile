FROM jsii/superchain:1-buster-slim-node14

ARG AWS_CLI_V2_URL='https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip'

USER root:root
# install jq wget and awscli
RUN apt-get update && apt-get install -y jq wget && mv $(which aws) /usr/local/bin/awscliv1 && \
  curl "${AWS_CLI_V2_URL}" -o "/tmp/awscliv2.zip" && \
  unzip /tmp/awscliv2.zip -d /tmp && \
  /tmp/aws/install

# install aws-cdk
RUN npm install aws-cdk -g

USER superchain:superchain