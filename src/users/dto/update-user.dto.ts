import {
  IsEmail,
  IsNumber,
  IsString,
  IsOptional,
  MinLength,
  IsBoolean,
} from 'class-validator';
import { Type } from 'class-transformer';

export class UpdateUserDto {
  @IsNumber()
  @Type(() => Number)
  id!: number;

  @IsOptional()
  @IsEmail()
  email: string | undefined;

  @IsOptional()
  @IsString()
  @MinLength(6)
  password?: string;

  @IsOptional()
  @IsBoolean()
  status: boolean | undefined;
}
