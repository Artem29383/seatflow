import { Injectable } from '@nestjs/common';

interface Item {
    id: string;
    title: string;
    category: string;
    city: string;
}

export interface Events {
    items: Item[],
    total: number
}

@Injectable()
export class EventsService {
    items = [
        {
            id: '1',
            title: 'Неоновый ритм',
            category: 'Концерт',
            city: 'Москва',
        },
        {
            id: '2',
            title: 'Желтый лист',
            category: 'Концерт',
            city: 'Москва',
        },
        {
            id: '3',
            title: 'Кленовый сироп',
            category: 'Концерт',
            city: 'Москва',
        }
    ]

    getEvents(): Events {
        return {
            items: this.items,
            total: this.items.length,
        }
    }
}
