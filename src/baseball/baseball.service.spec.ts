import { Test, TestingModule } from '@nestjs/testing';
import { BaseballService } from './baseball.service';

describe('BaseballService', () => {
  let service: BaseballService;

  beforeEach(() => {
    service = new BaseballService();
  });

  describe('compareNumbers', () => {
    it('should return correct result when all numbers are correct', () => {
      const createBaseballDto = [1, 2, 3, 4];
      const opponentNumbers = [1, 2, 3, 4];

      const result = service.compareNumbers(createBaseballDto, opponentNumbers);

      expect(result).toEqual([4, 0, 0]);
    });

    it('should return correct result when one number is correct', () => {
      const createBaseballDto = [1, 2, 3, 4];
      const opponentNumbers = [1, 0, 0, 0];

      const result = service.compareNumbers(createBaseballDto, opponentNumbers);

      expect(result).toEqual([1, 0, 3]);
    });

    it('should return correct result when two numbers are correct', () => {
      const createBaseballDto = [1, 2, 3, 4];
      const opponentNumbers = [1, 2, 0, 0];

      const result = service.compareNumbers(createBaseballDto, opponentNumbers);

      expect(result).toEqual([2, 0, 2]);
    });

    it('should return correct result when three numbers are correct but not in the correct positions', () => {
      const createBaseballDto = [1, 2, 3, 4];
      const opponentNumbers = [3, 1, 2, 0];

      const result = service.compareNumbers(createBaseballDto, opponentNumbers);

      expect(result).toEqual([0, 3, 1]);
    });

    it('should return correct result when no numbers are correct', () => {
      const createBaseballDto = [1, 2, 3, 4];
      const opponentNumbers = [5, 6, 7, 8];

      const result = service.compareNumbers(createBaseballDto, opponentNumbers);

      expect(result).toEqual([0, 0, 4]);
    });
  });
});

type PlayerTypeDTO = 'player1' | 'player2';

function isMyTurn(player: PlayerTypeDTO, currentPlayer: PlayerTypeDTO): boolean {
  return currentPlayer === player;
}

describe('isMyTurn', () => {
  describe('player가 첫번째 플레이어일 때', () => {
    const player: PlayerTypeDTO = 'player1';

    it('현재 차례가 player일 때 true를 반환한다', () => {
      const currentPlayer: PlayerTypeDTO = 'player1';
      expect(isMyTurn(player, currentPlayer)).toBe(true);
    });

    it('현재 차례가 player가 아닐 때 false를 반환한다', () => {
      const currentPlayer: PlayerTypeDTO = 'player2';
      expect(isMyTurn(player, currentPlayer)).toBe(false);
    });
  });

  describe('player가 두번째 플레이어일 때', () => {
    const player: PlayerTypeDTO = 'player2';

    it('현재 차례가 player일 때 true를 반환한다', () => {
      const currentPlayer: PlayerTypeDTO = 'player2';
      expect(isMyTurn(player, currentPlayer)).toBe(true);
    });

    it('현재 차례가 player가 아닐 때 false를 반환한다', () => {
      const currentPlayer: PlayerTypeDTO = 'player1';
      expect(isMyTurn(player, currentPlayer)).toBe(false);
    });
  });
});

// baseball 게임
// 숫자야구에 사용될 숫자 저장하기
// 각 서로의 턴임을 확인해야한다. Done
// 사용자는 중복되지않는 0~9 사이의 4개의 임의의 숫자를 입력하거나 랜덤으로 생성하도록 요청 할 수 있다.
// 각 입력 받은 숫자에 대해서 결과를 나타내어야한다.Ex) 1b 2s 1o
//
