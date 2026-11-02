import { Controller, Get } from '@nestjs/common';
import {EventsService} from "./events.service.js";
import type { Events } from './events.service.js';

@Controller()
export class EventsController {
    constructor(private readonly eventsService: EventsService) {}

    @Get('api/v1/events')
    getEvents(): Events {
        return this.eventsService.getEvents();
    }
}
