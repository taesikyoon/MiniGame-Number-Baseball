import { Injectable } from '@nestjs/common';
import { PlayerType } from './dtos/playerType.dto';

@Injectable()
export class BaseballService {
  compareNumbers() {
    return 'This action adds a new baseball';
  }

  isMyTurn(player: PlayerType, currentPlayer: PlayerType): boolean {
    return currentPlayer === player;
  }
}
