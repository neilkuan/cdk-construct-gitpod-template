import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';

export interface CdkCustomConstructProps {

}

export class CdkCustomConstruct extends Construct {
  constructor(scope: Construct, id: string, props: CdkCustomConstructProps={}) {
    super(scope, id);
    props;

    new cdk.aws_s3.Bucket(this, 'Bucket', {});
  }
}