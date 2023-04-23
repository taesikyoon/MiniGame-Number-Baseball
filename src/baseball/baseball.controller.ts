import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BaseballService } from './baseball.service';
import { CompareNumbersDTO } from './dtos/compareNumbers.dto';

@Controller('baseball')
export class BaseballController {
  constructor(private readonly baseballService: BaseballService) {}

  @Post()
  create(@Body() compareNumbersDTO: CompareNumbersDTO) {
    const { myNumbers, opponentNumbers } = compareNumbersDTO;
    return this.baseballService.compareNumbers(myNumbers, opponentNumbers);
  }
}
