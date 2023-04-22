import { Injectable } from '@nestjs/common';
import { CreateBaseballDto } from './dto/create-baseball.dto';
import { UpdateBaseballDto } from './dto/update-baseball.dto';

@Injectable()
export class BaseballService {
  create(createBaseballDto: CreateBaseballDto) {
    return 'This action adds a new baseball';
  }

  findAll() {
    return `This action returns all baseball`;
  }

  findOne(id: number) {
    return `This action returns a #${id} baseball`;
  }

  update(id: number, updateBaseballDto: UpdateBaseballDto) {
    return `This action updates a #${id} baseball`;
  }

  remove(id: number) {
    return `This action removes a #${id} baseball`;
  }
}
