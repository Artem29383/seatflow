import {ApiProperty} from "@nestjs/swagger";
import {EventResponseDto} from "./EventResponseDto.js";

export class EventsResponseDto {
    @ApiProperty({ type: [EventResponseDto] })
    items: EventResponseDto[];

    @ApiProperty({
        description: 'Всего сущностей',
        example: 111,
    })
    total: number;

    @ApiProperty({
        description: 'Номер страницы',
        example: 5,
    })
    page: number;

    @ApiProperty({
        description: 'Лимит',
        example: 11,
    })
    limit: number;

    @ApiProperty({
        description: 'Всего страниц',
        example: 13,
    })
    totalPages: number;
}