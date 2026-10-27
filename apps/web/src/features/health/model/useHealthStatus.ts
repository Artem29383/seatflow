import { useCallback, useState } from 'react';
import { getApiHealth, getDatabaseHealth } from '../api/health.api';

export type CheckState = 'idle' | 'loading' | 'ok' | 'error';
export type ServiceCheck = { state: CheckState; label: string };

const initial: ServiceCheck = { state: 'idle', label: 'Не проверено' };

export function useHealthStatus() {
  const [api, setApi] = useState<ServiceCheck>(initial);
  const [database, setDatabase] = useState<ServiceCheck>(initial);
  const [busy, setBusy] = useState(false);

  const check = useCallback(async () => {
    setBusy(true);
    setApi({ state: 'loading', label: 'Проверяем...' });
    setDatabase({ state: 'loading', label: 'Проверяем...' });

    const [apiResult, databaseResult] = await Promise.allSettled([
      getApiHealth(),
      getDatabaseHealth(),
    ]);

    setApi(apiResult.status === 'fulfilled' && apiResult.value.status === 'ok'
      ? { state: 'ok', label: 'Online' }
      : { state: 'error', label: apiResult.status === 'rejected' ? 'Нет ответа' : 'Некорректный ответ' });

    setDatabase(databaseResult.status === 'fulfilled' && databaseResult.value.connected
      ? { state: 'ok', label: 'Connected' }
      : { state: 'error', label: databaseResult.status === 'rejected' ? 'Нет ответа' : 'Недоступна' });

    setBusy(false);
  }, []);

  return { api, database, busy, check };
}
