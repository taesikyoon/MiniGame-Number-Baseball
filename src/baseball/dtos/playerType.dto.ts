import { IsIn } from 'class-validator';

export class PlayerType {
  /**
   * 플레이어 타입
   * @example 'player1' | 'player2'
   */
  @IsIn(['player1', 'player2'])
  Player: string;
}
