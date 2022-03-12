import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './messenger.service';
import { UserModel } from './messenger.interface';

@Controller('login')
export class MessengerController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  public createUser(@Body() post: UserModel): UserModel {
    return this.usersService.createUser(post);
  }
}
