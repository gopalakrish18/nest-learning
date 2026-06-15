import { Module, Global } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() // Makes PrismaService available globally without re-importing PrismaModule everywhere
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
