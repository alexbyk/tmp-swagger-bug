import { Body, Controller, Post } from '@nestjs/common';
import { InputDto, OutputDto } from './test.dto';

@Controller()
export class AppController {
  @Post()
  getHello(@Body() input: InputDto): OutputDto {
    console.log('Input: ', input);
    return { message: 'ok', input };
  }
}
