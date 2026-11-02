import {Controller, Get, Param, Query} from '@nestjs/common';
import {EventsService} from "./events.service.js";
import type { Events, Item } from './events.service.js';
import {GetEventsQueryDto} from "./dto/GetEventsQueryDto.js";
import {ApiBadRequestResponse, ApiOkResponse, ApiOperation, ApiTags} from "@nestjs/swagger";
import {EventsResponseDto} from "./dto/EventsResponseDto.js";

@ApiTags('Events')
@Controller('api/v1')
export class EventsController {
    constructor(private readonly eventsService: EventsService) {}

    @Get('/events')
    @ApiOperation({
        summary: 'Получить список мероприятий',
        description: 'Возвращает мероприятия с фильтрацией и пагинацией',
    })
    @ApiOkResponse({
        description: 'Мероприятия успешно получены',
        type: EventsResponseDto,
    })
    @ApiBadRequestResponse({
        description: 'Некорректные параметры запроса',
    })
    getEvents(@Query() queries: GetEventsQueryDto): Events {
        return this.eventsService.getEvents(queries);
    }

    @Get('/events/:id')
    getEvent(@Param('id') id: string): Item {
        return this.eventsService.getEvent(id);
    }
}
