import { Body, Controller, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { ApiBody, ApiOkResponse, ApiBadRequestResponse } from '@nestjs/swagger';
import { EmailDto } from '../shared/dto/email.dto';
import { EmailService } from './email.service';
import { ResponseBadDto, ResponseOkDto } from '../shared/dto/response.dto';

@Controller('email')
export class EmailController {
  constructor(private readonly service: EmailService) {}

  @Post('/send')
  @ApiBody({
    description: 'email send',
    type: EmailDto,
  })
  @ApiOkResponse({
    description: 'Response send email',
    type: ResponseOkDto,
    status: 200,
  })
  @ApiBadRequestResponse({
    description: 'Response bad Request send email',
    type: ResponseBadDto,
    status: 400,
  })
  async sendEmail(
    @Body() body: EmailDto,
    @Res() res: Response,
  ): Promise<Response> {
    this.service.send(body);
    return res.status(200).json({ message: 'email send!' });
  }
}
