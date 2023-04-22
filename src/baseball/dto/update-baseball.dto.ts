import { PartialType } from '@nestjs/mapped-types';
import { CreateBaseballDto } from './create-baseball.dto';

export class UpdateBaseballDto extends PartialType(CreateBaseballDto) {}
