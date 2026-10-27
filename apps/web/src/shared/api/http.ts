/** Единственная точка конфигурации базового URL API.
 * В Vite переменные клиента должны иметь префикс VITE_.
 */
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:3000';

export class HttpError extends Error {
  constructor(public readonly status: number, message: string) {
    super(message);
    this.name = 'HttpError';
  }
}

export async function getJson<T>(path: string, options?: { signal?: AbortSignal }): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${path}`, { signal: options?.signal });

  if (!response.ok) {
    throw new HttpError(response.status, `GET ${path}: HTTP ${response.status}`);
  }

  return (await response.json()) as T;
}
