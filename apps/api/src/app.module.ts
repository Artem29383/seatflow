import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import {ConfigModule} from "@nestjs/config";
import {DatabaseService} from "./database/database.service.js";
import {EventsModule} from "./modules/events/events.module.js";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '../../infra/.env',
    }),
      EventsModule
  ],
  controllers: [AppController],
  providers: [AppService, DatabaseService],
})
export class AppModule {}
