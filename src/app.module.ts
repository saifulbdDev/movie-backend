import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MovieModule } from './product/movie.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(
      'mongodb+srv://saifulbd:saiful953@cluster0.ab6mj.mongodb.net/?retryWrites=true&w=majority',
    ),
    MovieModule,
    UserModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
