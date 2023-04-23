import { ArrayMaxSize, IsArray } from 'class-validator';

export class CompareNumbersDTO {
  @IsArray()
  @ArrayMaxSize(4)
  myNumbers: number[];

  @IsArray()
  @ArrayMaxSize(4)
  opponentNumbers: number[];
}
