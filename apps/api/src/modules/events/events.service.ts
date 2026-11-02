import {BadRequestException, Injectable} from '@nestjs/common';

interface Item {
    id: string;
    title: string;
    category: string;
    city: string;
}

export interface Events {
    items: Item[];
    total: number;
    page: number;
    totalPages: number;
    limit: number;
}

@Injectable()
export class EventsService {
    maxLimit = 50;

    private readonly items: Item[] = [
        {
            id: '1',
            title: 'Неоновый ритм',
            category: 'Концерт',
            city: 'Москва',
        },
        {
            id: '2',
            title: 'Желтый лист',
            category: 'Шоу',
            city: 'Москва',
        },
        {
            id: '3',
            title: 'Кленовый сироп',
            category: 'Концерт',
            city: 'Тверь',
        }
    ]

    getEvents(queries: {city?: string; category?: string; page: number; limit: number}): Events {
        let filteredResult: Item[] = this.items;

        if (queries.city) {
            filteredResult = filteredResult.filter(item => item.city.toLowerCase() === queries.city!.toLowerCase());
        }

        if (queries.category) {
            filteredResult = filteredResult.filter(item => item.category.toLowerCase() === queries.category!.toLowerCase());
        }

        const offset = (queries.page - 1) * queries.limit;

        const paginatedItems = filteredResult.slice(offset, offset + queries.limit);

        return {
            items: paginatedItems,
            total: filteredResult.length,
            page: queries.page,
            totalPages: Math.ceil(filteredResult.length / queries.limit),
            limit: queries.limit,
        }
    }
}
