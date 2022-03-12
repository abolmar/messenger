import { Module } from '@nestjs/common';
import { UsersService } from './messenger.service';
import { MessengerController } from './messenger.controller';

@Module({
  providers: [UsersService],
  controllers: [MessengerController],
  exports: [UsersService],
})
export class UsersModule {}
