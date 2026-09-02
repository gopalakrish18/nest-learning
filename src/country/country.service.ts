import { ConflictException, Injectable } from '@nestjs/common';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
import { GetCountryDto } from './dto/get-country.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CountryService {
   constructor(private readonly prisma: PrismaService) {}
  async create(createCountryDto: CreateCountryDto) {
    const existingCountry = await this.prisma.country.findUnique({
      where: {
        name: createCountryDto.name,
      },
    });
   
    if (existingCountry) {
      throw new ConflictException('Name already exists');
    }
   
    return this.prisma.country.create({
      data: {
        name: createCountryDto.name,
        status : true,
        createdBy: 1, 
        updatedBy: 1, 
      },
      select: {
        id: true,
        name: true,
        status: true,
        createdAt: true,
      },
    });
  }

  findAll(query : GetCountryDto) {
    return this.prisma.country.findMany({
      where : {
        ...(query?.status !== undefined && {status : query.status}),
        ...(query?.name && {name : {
          contains : query.name.trim(),
          mode : 'insensitive'
        }})
      }
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} country`;
  }

  async update(id: number, updateCountryDto: UpdateCountryDto) {
    const existingCountry = await this.prisma.country.findFirst({
      where: {
        name: updateCountryDto.name,
        id: {
          not: id,
        },
      },
    });
   
    if (existingCountry) {
      throw new ConflictException('Name already exists');
    }
   
    return this.prisma.country.update({
      where : {
        id
      },
      data:updateCountryDto,
    });
  }

  remove(id: number) {
    return this.prisma.country.delete({
      where : {id : id}
    })
  }
}
