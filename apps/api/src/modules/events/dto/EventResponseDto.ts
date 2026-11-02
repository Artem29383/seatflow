import { ApiProperty } from '@nestjs/swagger';

export class EventResponseDto {
    @ApiProperty({
        description: 'Уникальный идентификатор мероприятия',
        example: '1',
    })
    id: number;

    @ApiProperty({
        description: 'Название мероприятия',
        example: 'Неоновый ритм',
    })
    title: string;

    @ApiProperty({
        description: 'Категория мероприятия',
        example: 'Концерт',
    })
    category: string;

    @ApiProperty({
        description: 'Город проведения',
        example: 'Москва',
    })
    city: string;
}
