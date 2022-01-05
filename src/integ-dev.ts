import * as cdk from 'aws-cdk-lib';
import { CdkCustomConstruct } from './index';

const app = new cdk.App();
const stack = new cdk.Stack(app, 'dev');
new CdkCustomConstruct(stack, 'myconstruct');
