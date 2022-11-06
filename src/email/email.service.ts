import { Inject, Injectable } from '@nestjs/common';
import * as AWS from 'aws-sdk';
import { IEmail } from '../shared/interfaces/IEmail.interface';
import { IService } from '../shared/interfaces/IService.interface';

@Injectable()
export class EmailService implements IService<IEmail> {
  constructor(@Inject('AWS_SES_SERVICE') private readonly ses: AWS.SES) {}

  async send(message: IEmail): Promise<any> {
    try {
      const params: AWS.SES.SendEmailRequest = {
        Source: message.from,
        Destination: {
          ToAddresses: [message.to],
        },
        Message: {
          Body: {
            Text: { Data: message.body },
          },
          Subject: {
            Data: message.subject,
          },
        },
      };
      const data = await this.ses.sendEmail(params).promise();
      console.log(data);
    } catch (error: any) {
      console.log(error.message);
      throw new Error('Internal Error');
    }
  }
}
