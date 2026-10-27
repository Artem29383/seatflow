import styled from 'styled-components';
import { theme } from '../app/theme';
import { Eyebrow, SectionTitle } from '../shared/ui/layout';

const events = [
  { title: 'Неоновый ритм', category: 'Концерт · Электроника', date: '18 НОЯ', city: 'Москва', glyph: '✳', tone: 'linear-gradient(135deg,#533c86 0%,#2b3568 48%,#1d2d4b 100%)' },
  { title: 'По ту сторону сцены', category: 'Театр · Драма', date: '22 НОЯ', city: 'Москва', glyph: '◒', tone: 'linear-gradient(135deg,#864f58 0%,#4a324d 56%,#242b42 100%)' },
  { title: 'Новая орбита', category: 'Шоу · Иммерсив', date: '30 НОЯ', city: 'Санкт-Петербург', glyph: '✺', tone: 'linear-gradient(135deg,#24686e 0%,#264a58 52%,#202741 100%)' },
] as const;
const Section = styled.section({ marginTop: 60 });
const SectionHeader = styled.div({ display: 'flex', justifyContent: 'space-between', alignItems: 'end', gap: 16, flexWrap: 'wrap', marginBottom: 22 });
const Note = styled.span({ fontSize: 12, color: theme.subtle });
const List = styled.div({ display: 'grid', gridTemplateColumns: 'repeat(3,minmax(0,1fr))', gap: 18, '@media (max-width: 760px)': { gridTemplateColumns: '1fr' } });
const Card = styled.article({ overflow: 'hidden', background: theme.surface, border: '1px solid ' + theme.border, borderRadius: 20 });
const Cover = styled.div<{ $tone: string }>(props => ({
  height: 175, padding: 20, background: props.$tone,
  display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative',
}));
const Glyph = styled.span({ color: 'rgba(255,255,255,.7)', fontSize: 96, lineHeight: 1, filter: 'drop-shadow(0 12px 20px rgba(0,0,0,.15))' });
const DateTag = styled.span({ position: 'absolute', top: 16, left: 16, background: 'rgba(8,12,22,.56)', border: '1px solid rgba(255,255,255,.15)', borderRadius: 8, fontSize: 10, fontWeight: 800, padding: '8px 10px', letterSpacing: '.06em' });
const Content = styled.div({ padding: 20 });
const Category = styled.div({ color: theme.accent, fontSize: 11, fontWeight: 700, marginBottom: 10 });
const Name = styled.h3({ fontSize: 20, letterSpacing: '-.03em', marginBottom: 16 });
const Bottom = styled.div({ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: theme.muted, fontSize: 12 });
const Mock = styled.span({ border: '1px solid ' + theme.border, color: theme.subtle, padding: '5px 9px', borderRadius: 7, fontSize: 10 });
export function EventsPreview() {
  return (
    <Section id="events">
      <SectionHeader>
        <div><Eyebrow>СКОРО В SEATFLOW</Eyebrow><SectionTitle style={{ marginTop: 10 }}>Афиша мероприятий</SectionTitle></div>
        <Note>Демонстрационные события · данные пока не из БД</Note>
      </SectionHeader>
      <List>
        {events.map(event => (
          <Card key={event.title}>
            <Cover $tone={event.tone}><DateTag>{event.date}</DateTag><Glyph aria-hidden="true">{event.glyph}</Glyph></Cover>
            <Content>
              <Category>{event.category}</Category>
              <Name>{event.title}</Name>
              <Bottom><span>⌖ {event.city}</span><Mock>Демо</Mock></Bottom>
            </Content>
          </Card>
        ))}
      </List>
    </Section>
  );
}
