import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { CityModule } from './city/city.module';
import { AuthModule } from './auth/auth.module';
import { CountryModule } from './country/country.module';
import { StateModule } from './state/state.module';

/*Global Configuration is used to use the env file without dotenv in entire application*/
const GlobalConfig = ConfigModule.forRoot({ isGlobal: true });
@Module({
  imports: [PrismaModule, UsersModule, GlobalConfig, CityModule, AuthModule, CountryModule, StateModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
