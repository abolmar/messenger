import { Module } from '@nestjs/common';
import { UsersModule } from './messenger/messenger.module';

@Module({
  imports: [UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
