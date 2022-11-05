import { IsString, MinLength, IsNotEmpty, IsOptional } from 'class-validator';
import { IEmail } from '../interfaces/IEmail.interface';
import { ApiProperty } from '@nestjs/swagger';

export class EmailDto implements IEmail {
  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  @ApiProperty({
    name: 'from',
    type: String,
    example: 'any-email-from.com',
    required: true,
  })
  from: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  @ApiProperty({
    name: 'to',
    type: String,
    example: 'any-email-to.com',
    required: true,
  })
  to: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  @ApiProperty({
    name: 'subject',
    type: String,
    example: 'any-subject',
    required: true,
  })
  subject: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  @ApiProperty({
    name: 'body',
    type: String,
    example: 'any-body',
    required: true,
  })
  body: string;

  @IsString()
  @IsOptional()
  @MinLength(6)
  @ApiProperty({
    name: 'cc',
    type: String,
    example: 'any-email-cc.com',
    required: false,
  })
  cc?: string;
}
