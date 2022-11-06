import * as AWS from 'aws-sdk';
import { EmailService } from './email.service';
import { sesService, messageStub } from '../shared/test/stub';

describe(EmailService.name, () => {
  let service: EmailService;
  let awsSesService: AWS.SES;

  beforeEach(async () => {
    jest.clearAllMocks();

    awsSesService = sesService();
    service = new EmailService(awsSesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should be defined method send', () => {
    expect(service.send).toBeDefined();
  });

  it('should able called method execute', async () => {
    const spyOnSendEmail = jest.spyOn(awsSesService, 'sendEmail');
    await service.send(messageStub);
    expect(spyOnSendEmail).toHaveBeenCalled();
  });

  it('should throw called method execute and response error is defined', async () => {
    const error = new Error('Internal Error');
    jest.spyOn(awsSesService.sendEmail(), 'promise').mockRejectedValue(error);
    await expect(service.send(messageStub)).rejects.toThrow(error);
  });
});
