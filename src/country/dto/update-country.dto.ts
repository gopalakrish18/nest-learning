import { PartialType } from '@nestjs/swagger';
import { CreateCountryDto } from './create-country.dto';
import { IsNotEmpty, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';

export class UpdateCountryDto extends PartialType(CreateCountryDto) {
    @IsNumber()
    @IsNotEmpty()
    @Type(() => Number)
    id!: number;
    
}
