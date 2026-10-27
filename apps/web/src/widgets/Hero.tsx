import styled from 'styled-components';
import { theme } from '../app/theme';
import { Eyebrow } from '../shared/ui/layout';
import { SeatMap } from './SeatMap';

const Wrapper = styled.section({
  marginTop: 28, padding: 'clamp(30px, 5vw, 66px)',
  borderRadius: 28, border: '1px solid #303451',
  background: 'radial-gradient(ellipse at 86% 10%, rgba(127,111,212,.32), transparent 52%), radial-gradient(ellipse at 6% 85%, rgba(56,118,153,.12),transparent 45%),#161d2e',
  display: 'grid', gridTemplateColumns: '1.05fr .95fr', alignItems: 'center',
  gap: 44, overflow: 'hidden',
  '@media (max-width: 900px)': { gridTemplateColumns: '1fr', gap: 34 },
});
const Copy = styled.div({ maxWidth: 560 });
const Title = styled.h1({
  margin: '23px 0 22px', fontSize: 'clamp(38px, 4.6vw, 65px)',
  letterSpacing: '-0.065em', lineHeight: 1.06, fontWeight: 700,
});
const Accent = styled.span({ color: theme.accent });
const Intro = styled.p({ maxWidth: 450, lineHeight: 1.7, color: '#aebbd0', fontSize: 15 });
const Actions = styled.div({ display: 'flex', alignItems: 'center', gap: 18, flexWrap: 'wrap', marginTop: 30 });
const Action = styled.a({
  background: theme.accent, color: '#161624', borderRadius: 12,
  fontSize: 13, fontWeight: 800, padding: '15px 20px',
  transition: 'transform .18s ease,background .18s ease',
  '&:hover': { transform: 'translateY(-2px)', background: '#c8bcff' },
});
const Sub = styled.span({ fontSize: 11, color: '#9aa6ba' });
const Demo = styled.div({ display: 'grid', placeItems: 'center', minWidth: 0 });
export function Hero() {
  return (
    <Wrapper>
      <Copy>
        <Eyebrow>✦ &nbsp; SeatFlow / Учебный проект</Eyebrow>
        <Title>Твоё место.<br /><Accent>Твоя история.</Accent></Title>
        <Intro>Сервис бронирования мест на события и одновременно наша лаборатория Node.js, NestJS, PostgreSQL и настоящей backend-архитектуры.</Intro>
        <Actions>
          <Action href="#events">Посмотреть события ↗</Action>
          <Sub>Без реальных платежей · пока демо</Sub>
        </Actions>
      </Copy>
      <Demo><SeatMap /></Demo>
    </Wrapper>
  );
}
