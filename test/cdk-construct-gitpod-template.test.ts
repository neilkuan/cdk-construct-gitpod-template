import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { CdkCustomConstruct } from '../src';

test('No Resource been Created', () => {
  const app = new cdk.App();
  // WHEN
  const stack = new cdk.Stack(app, 'MyTestStack');
  new CdkCustomConstruct(stack, 'MyTestConstruct');
  // THEN
  const template = Template.fromStack(stack);

  template.resourceCountIs('AWS::S3::Bucket', 1);
});
