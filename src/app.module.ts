import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpModule } from '@nestjs/axios';
import { ScheduleModule } from '@nestjs/schedule';
import { WebClient } from '@slack/web-api';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [HttpModule, ScheduleModule.forRoot(), ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService, {
    provide: WebClient,
    useValue: new WebClient(process.env.SLACK_BOT_TOKEN)
  }],
})
export class AppModule { }