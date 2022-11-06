import { DynamicModule, Module } from '@nestjs/common';
import * as AWS from 'aws-sdk';
import { validateEnv } from '../shared/config/env';
import { EmailController } from './email.controller';
import { EmailService } from './email.service';
const SES_CONFIG = {
  accessKeyId: validateEnv('ACCESS_KEY_ID'),
  secretAccessKey: validateEnv('SECRET_ACCESS_KEY'),
  region: 'us-east-1',
};

const AWS_SES = new AWS.SES(SES_CONFIG);
@Module({})
export class EmailModule {
  static forRoot(): DynamicModule {
    return {
      global: true,
      module: EmailModule,
      controllers: [EmailController],
      providers: [
        {
          provide: 'AWS_SES_SERVICE',
          useValue: AWS_SES,
        },
        EmailService,
      ],
    };
  }
}
