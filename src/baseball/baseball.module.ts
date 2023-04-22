import { Module } from '@nestjs/common';
import { BaseballService } from './baseball.service';
import { BaseballController } from './baseball.controller';

@Module({
  controllers: [BaseballController],
  providers: [BaseballService]
})
export class BaseballModule {}
