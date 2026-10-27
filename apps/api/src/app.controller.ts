import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service.js';
import {DatabaseService} from "./database/database.service.js";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
              private readonly databaseService: DatabaseService) {}

  @Get('api/v1/health')
  getHealth(): {status: string} {
    return this.appService.getHealth();
  }

  @Get('api/v1/health/db')
  async getCheckConnectionDB(): Promise<{ connected: boolean }> {
    const connected = await this.databaseService.checkConnection();

    return { connected };
  }
}
