import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypegooseModule } from 'nestjs-typegoose';

@Module({
  imports: [
    TypegooseModule.forRoot('mongodb://localhost:/topfullstack', {

    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
