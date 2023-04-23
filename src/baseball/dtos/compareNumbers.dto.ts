import { ArrayMaxSize, ArrayMinSize, IsArray } from 'class-validator';

export class CompareNumbersDTO {
  @IsArray()
  @ArrayMaxSize(4)
  @ArrayMinSize(4)
  myNumbers: number[];

  @IsArray()
  @ArrayMaxSize(4)
  @ArrayMinSize(4)
  opponentNumbers: number[];
}
