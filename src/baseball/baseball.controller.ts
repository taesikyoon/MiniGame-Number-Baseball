import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BaseballService } from './baseball.service';
import { CreateBaseballDto } from './dto/create-baseball.dto';
import { UpdateBaseballDto } from './dto/update-baseball.dto';

@Controller('baseball')
export class BaseballController {
  constructor(private readonly baseballService: BaseballService) {}

  @Post()
  create(@Body() createBaseballDto: CreateBaseballDto) {
    return this.baseballService.create(createBaseballDto);
  }

  @Get()
  findAll() {
    return this.baseballService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.baseballService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBaseballDto: UpdateBaseballDto) {
    return this.baseballService.update(+id, updateBaseballDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.baseballService.remove(+id);
  }
}
