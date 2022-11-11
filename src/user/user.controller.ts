import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Controller('user')
export class UserController {
  constructor(private configService: ConfigService) {}

  @Get()
  getUser() {
    console.log(this.configService.get('db'));
  }
}
