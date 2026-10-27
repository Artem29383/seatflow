import type { HttpError } from '../../../shared/api/http';
// После реализации задачи импортируй getJson из shared/api/http.

export type ApiHealthResponse = { status: 'ok' };
export type DatabaseHealthResponse = { connected: boolean };

/**
 * ЗАДАНИЕ 0.5
 * Реализуй два GET-запроса через getJson<T>().
 * Endpoint 1: GET /api/v1/health
 * Endpoint 2: GET /api/v1/health/db
 *
 * Ошибки не глуши: панель сама их обработает.
 * При желании передавай signal в getJson для отмены запроса.
 */
export async function getApiHealth(signal?: AbortSignal): Promise<ApiHealthResponse> {
  void signal;
  throw new Error('TODO: реализуй GET /api/v1/health в health.api.ts');
}

export async function getDatabaseHealth(signal?: AbortSignal): Promise<DatabaseHealthResponse> {
  void signal;
  throw new Error('TODO: реализуй GET /api/v1/health/db в health.api.ts');
}

// Экспорт типа, полезного для будущей обработки HTTP-ошибок.
export type ApiRequestError = HttpError;
