import { IsString } from 'class-validator';

export class UpdateTuitDto {
  @IsString()
  message: string;
}
