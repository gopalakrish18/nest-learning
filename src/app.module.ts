import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
const GlobalConfig = ConfigModule.forRoot({ isGlobal: true });
@Module({
  imports: [PrismaModule, UsersModule, GlobalConfig],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
