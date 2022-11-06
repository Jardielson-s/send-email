import { Response } from 'express';
import { EmailController } from './email.controller';
import { EmailService } from './email.service';
import { ResponseStub, emailStub, messageStub } from '../shared/test/stub';
import { EmailDto } from 'src/shared/dto/email.dto';

describe(EmailController.name, () => {
  let controller: EmailController;
  const message: EmailDto = messageStub;
  let response: Response;
  let service: EmailService;

  beforeEach(async () => {
    response = ResponseStub();
    service = emailStub();
    controller = new EmailController(service);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should be defined method send', () => {
    expect(controller.sendEmail).toBeDefined();
  });

  it('should able called method execute', async () => {
    const spyOnStatus = jest.spyOn(response, 'status');
    const spyOnJson = jest.spyOn(response, 'json');
    await controller.sendEmail(message, response);
    expect(spyOnStatus).toHaveBeenCalled();
    expect(spyOnJson).toHaveBeenCalled();
  });

  it('should throw called method execute and response error is defined', async () => {
    const spyOnStatus = jest.spyOn(response, 'status');
    const spyOnJson = jest.spyOn(response, 'json');

    jest.spyOn(service, 'send').mockRejectedValue({} as any);
    await controller.sendEmail(message, response);
    expect(spyOnStatus).toHaveBeenCalled();
    expect(spyOnJson).toHaveBeenCalled();
  });
});
