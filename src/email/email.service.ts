import { Injectable } from '@nestjs/common';
import { IEmail } from 'src/shared/interfaces/IEmail.interface';
import { IService } from 'src/shared/interfaces/IService.interface';

@Injectable()
export class EmailService implements IService<IEmail> {
  async send(message: IEmail): Promise<any> {
    console.log(message);
  }
}
