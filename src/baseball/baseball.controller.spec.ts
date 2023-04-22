import { Test, TestingModule } from '@nestjs/testing';
import { BaseballController } from './baseball.controller';
import { BaseballService } from './baseball.service';

describe('BaseballController', () => {
  let controller: BaseballController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BaseballController],
      providers: [BaseballService],
    }).compile();

    controller = module.get<BaseballController>(BaseballController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
