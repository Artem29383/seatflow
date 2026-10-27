import styled from 'styled-components';
import { theme } from '../app/theme';
import { Container } from '../shared/ui/layout';

const Bar = styled.header({
  borderBottom: '1px solid ' + theme.border,
  background: 'rgba(11,16,26,.88)',
});
const Inner = styled(Container)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  minHeight: 78,
  gap: 20,
});
const Brand = styled.a({ display: 'flex', alignItems: 'center', gap: 12, fontSize: 21, fontWeight: 800, letterSpacing: '-0.06em' });
const Mark = styled.span({
  width: 39, height: 39, display: 'grid', placeItems: 'center',
  borderRadius: 12, background: theme.accent, color: theme.background, fontSize: 22,
});
const Nav = styled.nav({
  display: 'flex', alignItems: 'center', gap: 32, fontSize: 13, fontWeight: 600,
  '@media (max-width: 720px)': { display: 'none' },
});
const NavLink = styled.a({ color: theme.muted, '&:hover': { color: theme.text } });
const NavDisabled = styled.span({ color: theme.subtle, cursor: 'default' });
const Step = styled.span({
  padding: '9px 13px', borderRadius: 12, border: '1px solid ' + theme.border,
  fontSize: 11, color: theme.accent, fontWeight: 800, whiteSpace: 'nowrap',
});

export function Header() {
  return (
    <Bar>
      <Inner>
        <Brand href="#" aria-label="SeatFlow — на главную"><Mark aria-hidden="true">S</Mark>seatflow<span style={{ color: theme.accent }}>.</span></Brand>
        <Nav aria-label="Навигация">
          <NavLink href="#events">Мероприятия</NavLink>
          <NavLink href="#lab">Лаборатория</NavLink>
          <NavDisabled title="Добавим на следующих этапах">Админка · скоро</NavDisabled>
        </Nav>
        <Step>FULLSTACK LAB / 00</Step>
      </Inner>
    </Bar>
  );
}
