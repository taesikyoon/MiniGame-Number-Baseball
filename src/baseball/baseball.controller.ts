import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BaseballService } from './baseball.service';

@Controller('baseball')
export class BaseballController {
  constructor(private readonly baseballService: BaseballService) {}

  @Post()
  create() {
    return this.baseballService.compareNumbers();
  }
}
