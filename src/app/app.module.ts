import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BaseballModule } from './baseball/baseball.module';
import { ChatModule } from './chat/chat.module';

@Module({
  imports: [BaseballModule, ChatModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
