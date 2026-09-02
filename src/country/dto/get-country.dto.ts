import { ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class GetCountryDto {
  @ApiPropertyOptional({
    description: 'Filter countries by active status', 
    type: Boolean,
    example: true 
  })
  @IsOptional()
  @Transform(({ value }) => value === 'true' || value === true)
  @IsBoolean()
  status?: boolean; 
  
  @ApiPropertyOptional({
     description: 'Filter countries by name', 
    type: String,
    example: 'India' 
  })

  @IsOptional()
  @IsString()
  name?: string; 
}
