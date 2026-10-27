import {getJson, type HttpError} from '../../../shared/api/http';
// После реализации задачи импортируй getJson из shared/api/http.

export type ApiHealthResponse = { status: 'ok' };
export type DatabaseHealthResponse = { connected: boolean };

export async function getApiHealth(signal?: AbortSignal): Promise<ApiHealthResponse> {
  return await getJson<ApiHealthResponse>('/api/v1/health', {signal});
}

export async function getDatabaseHealth(signal?: AbortSignal): Promise<DatabaseHealthResponse> {
  return await getJson<DatabaseHealthResponse>('/api/v1/health/db', {signal});
}

// Экспорт типа, полезного для будущей обработки HTTP-ошибок.
export type ApiRequestError = HttpError;
