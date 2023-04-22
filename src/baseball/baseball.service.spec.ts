import { Test, TestingModule } from '@nestjs/testing';
import { BaseballService } from './baseball.service';

describe('BaseballService', () => {
  let service: BaseballService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BaseballService],
    }).compile();

    service = module.get<BaseballService>(BaseballService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

type PlayerType = 'player1' | 'player2';

function isMyTurn(player: PlayerType, currentPlayer: PlayerType): boolean {
  return currentPlayer === player;
}

describe('isMyTurn', () => {
  describe('player가 첫번째 플레이어일 때', () => {
    const player: PlayerType = 'player1';

    it('현재 차례가 player일 때 true를 반환한다', () => {
      const currentPlayer: PlayerType = 'player1';
      expect(isMyTurn(player, currentPlayer)).toBe(true);
    });

    it('현재 차례가 player가 아닐 때 false를 반환한다', () => {
      const currentPlayer: PlayerType = 'player2';
      expect(isMyTurn(player, currentPlayer)).toBe(false);
    });
  });

  describe('player가 두번째 플레이어일 때', () => {
    const player: PlayerType = 'player2';

    it('현재 차례가 player일 때 true를 반환한다', () => {
      const currentPlayer: PlayerType = 'player2';
      expect(isMyTurn(player, currentPlayer)).toBe(true);
    });

    it('현재 차례가 player가 아닐 때 false를 반환한다', () => {
      const currentPlayer: PlayerType = 'player1';
      expect(isMyTurn(player, currentPlayer)).toBe(false);
    });
  });
});

// baseball 게임
// 각 서로의 턴임을 확인해야한다.
// 사용자는 중복되지않는 0~9 사이의 4개의 임의의 숫자를 입력하거나 랜덤으로 생성하도록 요청 할 수 있다.
// 각 입력 받은 숫자에 대해서 결과를 나타내어야한다.Ex) 1b 2s 1o
//
