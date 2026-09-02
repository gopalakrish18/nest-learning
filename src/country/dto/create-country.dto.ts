import { IsString, MinLength } from 'class-validator';

export class CreateCountryDto {
  @IsString()
  @MinLength(2)
  name: string; 
}
