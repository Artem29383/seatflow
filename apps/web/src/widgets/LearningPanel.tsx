import styled from 'styled-components';
import { theme } from '../app/theme';
import { Eyebrow, SectionTitle, Surface } from '../shared/ui/layout';

const Card = styled(Surface)({ padding: 26, '@media (max-width: 480px)': { padding: 18 } });
const Description = styled.p({ fontSize: 13, lineHeight: 1.6, color: theme.muted, marginBottom: 20 });
const List = styled.ol({ margin: 0, padding: 0, listStyle: 'none' });
const Item = styled.li({ display: 'flex', gap: 14, padding: '14px 0', borderTop: '1px solid ' + theme.border });
const Number = styled.span<{ $active?: boolean }>(props => ({
  width: 32, height: 32, display: 'grid', placeItems: 'center', flexShrink: 0, borderRadius: 10,
  background: props.$active ? theme.accent : theme.surfaceRaised,
  color: props.$active ? theme.background : theme.subtle,
  fontWeight: 800, fontSize: 11,
}));
const Info = styled.div({ display: 'grid', gap: 4 });
const Name = styled.span({ fontSize: 13, fontWeight: 700 });
const Meta = styled.span({ fontSize: 11, color: theme.muted, lineHeight: 1.5 });
const Badge = styled.span({ color: theme.mint, fontSize: 10, fontWeight: 700 });
export function LearningPanel() {
  return (
    <Card>
      <Eyebrow>02 / МАРШРУТ</Eyebrow>
      <SectionTitle style={{ marginTop: 12 }}>Путь в Fullstack</SectionTitle>
      <Description>Здесь будем отслеживать учебные этапы. Основной упор — на Backend, БД и инженерные решения.</Description>
      <List>
        <Item><Number $active>00</Number><Info><Name>Фундамент проекта &nbsp; <Badge>В работе</Badge></Name><Meta>Monorepo, NestJS, React, Docker, PostgreSQL</Meta></Info></Item>
        <Item><Number>01</Number><Info><Name>Node.js под капотом</Name><Meta>Event Loop, I/O, потоки, Worker Threads</Meta></Info></Item>
        <Item><Number>02</Number><Info><Name>HTTP и NestJS</Name><Meta>DI, модули, REST, DTO, Swagger</Meta></Info></Item>
        <Item><Number>03</Number><Info><Name>PostgreSQL без магии</Name><Meta>SQL, транзакции, индексы, блокировки</Meta></Info></Item>
      </List>
    </Card>
  );
}
