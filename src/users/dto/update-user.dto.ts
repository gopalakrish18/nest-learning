import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsEmail, IsNumber, IsString } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @IsNumber()
    id: number;

    @IsEmail()
    email: string;

    @IsString()
    @MinLength(6)
    password: string;

    @IsBoolean()
        status: boolean;

}
