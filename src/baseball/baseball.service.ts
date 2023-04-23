import { Injectable } from '@nestjs/common';
import { PlayerTypeDTO } from './dtos/playerType.dto';

@Injectable()
export class BaseballService {
  compareNumbers(playerNumbers: number[], opponentNumbers: number[]): [number, number, number] {
    let strikes = 0;
    let balls = 0;
    let outs = 0;
    for (let i = 0; i < playerNumbers.length; i++) {
      if (playerNumbers[i] === opponentNumbers[i]) strikes++;
      else if (opponentNumbers.includes(playerNumbers[i])) balls++;
      else outs++;
    }

    return [strikes, balls, outs];
  }

  isMyTurn(player: PlayerTypeDTO, currentPlayer: PlayerTypeDTO): boolean {
    return currentPlayer === player;
  }
}
