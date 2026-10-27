import styled from 'styled-components';
import { theme } from '../app/theme';
import { Container } from '../shared/ui/layout';
import { Header } from '../widgets/Header';
import { Hero } from '../widgets/Hero';
import { EventsPreview } from '../widgets/EventsPreview';
import { HealthPanel } from '../widgets/HealthPanel';
import { LearningPanel } from '../widgets/LearningPanel';

const Main = styled.main({ paddingBottom: 72 });
const Workspace = styled.div({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: 20,
  marginTop: 24,
  '@media (max-width: 900px)': { gridTemplateColumns: '1fr' },
});
const Footer = styled.footer({
  borderTop: '1px solid ' + theme.border,
  padding: '26px 0',
  color: theme.subtle,
  fontSize: 12,
});
const FooterRow = styled(Container)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: 16,
  flexWrap: 'wrap',
});

export function HomePage() {
  return (
    <>
      <Header />
      <Main>
        <Container>
          <Hero />
          <EventsPreview />
          <Workspace id="lab">
            <HealthPanel />
            <LearningPanel />
          </Workspace>
        </Container>
      </Main>
      <Footer>
        <FooterRow>
          <span>© SeatFlow · Учебная fullstack-платформа</span>
          <span>React / NestJS / PostgreSQL · Этап 00</span>
        </FooterRow>
      </Footer>
    </>
  );
}
