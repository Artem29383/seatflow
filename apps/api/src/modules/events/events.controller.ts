import {Controller, DefaultValuePipe, Get, ParseIntPipe, Query, ValidationPipe} from '@nestjs/common';
import {EventsService} from "./events.service.js";
import type { Events } from './events.service.js';
import {GetEventsQueryDto} from "./dto/GetEventsQueryDto.js";

@Controller('api/v1')
export class EventsController {
    constructor(private readonly eventsService: EventsService) {}

    @Get('/events')
    getEvents(@Query() queries: GetEventsQueryDto): Events {
        return this.eventsService.getEvents(queries);
    }
}
