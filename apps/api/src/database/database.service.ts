import {Injectable, OnModuleDestroy} from '@nestjs/common';
import {ConfigService} from "@nestjs/config";
import pg from 'pg';

@Injectable()
export class DatabaseService  implements OnModuleDestroy {
    private readonly pool: pg.Pool;

    constructor(private readonly config: ConfigService) {
        this.pool = new pg.Pool({
            host: '127.0.0.1',
            port: 5432,
            user: this.config.getOrThrow<string>('POSTGRES_USER'),
            password: this.config.getOrThrow<string>('POSTGRES_PASSWORD'),
            database: this.config.getOrThrow<string>('POSTGRES_DB'),
            max: 5,
        });
    }

    async onModuleDestroy() {
        await this.pool.end();
    }

    async checkConnection() {
        const result = await this.pool.query<{ connected: number }>(
            'SELECT 1 AS connected',
        );

        return result.rows[0]?.connected === 1;
    }
}
