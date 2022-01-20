import * as cdk from 'aws-cdk-lib';
import { CdkCustomConstruct } from './index';

const devEnv = {
  account: process.env.CDK_DEFAULT_ACCOUNT,
  region: process.env.CDK_DEFAULT_REGION,
};

const app = new cdk.App();
const stack = new cdk.Stack(app, 'dev', { env: devEnv });
new CdkCustomConstruct(stack, 'myconstruct');

app.synth();
