import * as AWS from 'aws-sdk';
import { EmailDto } from '../../../shared/dto/email.dto';
import { EmailService } from '../../../email/email.service';

const stubEmail = Object.freeze({
  send: jest.fn(),
});

const responseSesSendEmail = {
  ResponseMetadata: {
    RequestId: 'id-request',
  },
  MessageId: 'id-message',
};
const serviceSes = Object.freeze({
  sendEmail: jest.fn().mockReturnThis(),
  promise: jest.fn(() => responseSesSendEmail),
});

export const messageStub: EmailDto = {
  from: 'any-email@gmail.com',
  to: 'any-email-to@gmail.com',
  subject: 'any-subject',
  body: 'any-body',
};
export const sesService = (): any => serviceSes as unknown as AWS.SES;
export const emailStub = (): any => stubEmail as unknown as EmailService;
