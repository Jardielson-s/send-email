import { Test, TestingModule } from '@nestjs/testing';
import { Response } from 'express';
import { IEmail } from '../shared/interfaces/IEmail.interface';
import { EmailController } from './email.controller';
import { EmailService } from './email.service';
import { ResponseStub } from '../shared/test/stub/response.stub';

describe(EmailController.name, () => {
  let controller: EmailController;
  const message: IEmail = {
    from: 'any-email@gmail.com',
    to: 'any-email-to@gmail.com',
    subject: 'any-subject',
    body: 'any-body',
  };
  let response: Response;

  beforeEach(async () => {
    response = ResponseStub();
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmailController],
      providers: [EmailService],
    }).compile();

    controller = module.get<EmailController>(EmailController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should be defined method send', () => {
    expect(controller.sendEmail).toBeDefined();
  });

  it('should able called method execute', async () => {
    await controller.sendEmail(message, response);
  });
});
