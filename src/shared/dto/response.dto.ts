import { ApiProperty } from '@nestjs/swagger';
import { EmailDto } from './email.dto';

export class ResponseOkDto {
  @ApiProperty({
    description: 'message ok response',
    type: String,
    example: 'email send',
  })
  message: string;
}

export class ResponseBadDto {
  @ApiProperty({
    description: 'statusCode bad request',
    type: Number,
    example: 400,
  })
  statusCode: number;

  @ApiProperty({
    description: 'message bad request',
    type: Array,
    example: [
      'from must be longer than or equal to 6 characters',
      'from should not be empty',
      'from must be a string',
      'to must be longer than or equal to 6 characters',
      'to should not be empty',
      'to must be a string',
      'subject must be longer than or equal to 6 characters',
      'subject should not be empty',
      'subject must be a string',
      'body must be longer than or equal to 6 characters',
      'body should not be empty',
      'body must be a string',
    ],
  })
  message: [EmailDto];

  @ApiProperty({
    description: 'error bad request',
    type: String,
    example: 'Bad Request',
  })
  error: string;
}
