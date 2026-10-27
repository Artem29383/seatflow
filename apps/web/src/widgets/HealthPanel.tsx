import styled from 'styled-components';
import { theme } from '../app/theme';
import { useHealthStatus, type ServiceCheck } from '../features/health/model/useHealthStatus';
import { Eyebrow, SectionTitle, Surface } from '../shared/ui/layout';

const Card = styled(Surface)({ padding: 26, minWidth: 0, '@media (max-width: 480px)': { padding: 18 } });
const Description = styled.p({ color: theme.muted, fontSize: 13, lineHeight: 1.6, marginBottom: 25 });
const Services = styled.div({ display: 'grid', gap: 10, marginBottom: 22 });
const Service = styled.div({ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, border: '1px solid ' + theme.border, borderRadius: 12, padding: '17px 15px', background: theme.surfaceAlt });
const ServiceName = styled.span({ color: theme.text, fontSize: 13, fontWeight: 650 });
const Indicator = styled.span<{ $state: ServiceCheck['state'] }>(props => ({
  display: 'inline-flex', gap: 7, alignItems: 'center', fontSize: 11, fontWeight: 700, whiteSpace: 'nowrap',
  color: props.$state === 'ok' ? theme.mint : props.$state === 'error' ? theme.error : theme.muted,
  '&::before': {
    content: '""', width: 7, height: 7, borderRadius: '50%',
    background: props.$state === 'ok' ? theme.mint : props.$state === 'error' ? theme.error : theme.subtle,
  },
}));
const Action = styled.button({
  width: '100%', padding: '14px 16px', borderRadius: 11, border: '1px solid #675d9a',
  background: '#292841', color: theme.accent, cursor: 'pointer', fontWeight: 800, fontSize: 12,
  '&:hover': { background: '#363353' },
  '&:disabled': { cursor: 'wait', opacity: .55 },
});
const Footnote = styled.p({ color: theme.subtle, fontSize: 11, lineHeight: 1.55, margin: '17px 0 0' });
export function HealthPanel() {
  const { api, database, busy, check } = useHealthStatus();

  return (
    <Card>
      <Eyebrow>01 / ПРАКТИКА</Eyebrow>
      <SectionTitle style={{ marginTop: 12 }}>Связь с Backend</SectionTitle>
      <Description>Первое frontend-задание: подключи настоящие HTTP-запросы к NestJS и PostgreSQL.</Description>
      <Services>
        <Service><ServiceName>◈ &nbsp; NestJS API</ServiceName><Indicator $state={api.state}>{api.label}</Indicator></Service>
        <Service><ServiceName>▤ &nbsp; PostgreSQL</ServiceName><Indicator $state={database.state}>{database.label}</Indicator></Service>
      </Services>
      <Action type="button" onClick={check} disabled={busy}>{busy ? 'Проверяем…' : 'Проверить соединение ↗'}</Action>
      <Footnote>TODO: <strong>src/features/health/api/health.api.ts</strong>. Кнопка заработает после твоей реализации fetch.</Footnote>
    </Card>
  );
}
