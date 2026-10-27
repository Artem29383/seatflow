import styled from 'styled-components';
import { theme } from '../../app/theme';

export const Container = styled.div({
  width: 'min(100% - 48px, ' + theme.maxWidth + ')',
  margin: '0 auto',
  '@media (max-width: 600px)': { width: 'min(100% - 32px, ' + theme.maxWidth + ')' },
});

export const Surface = styled.section({
  background: theme.surface,
  border: '1px solid ' + theme.border,
  borderRadius: 22,
});

export const Eyebrow = styled.span({
  display: 'inline-flex',
  alignItems: 'center',
  gap: 8,
  color: theme.accent,
  fontSize: 11,
  lineHeight: 1.5,
  fontWeight: 800,
  textTransform: 'uppercase',
  letterSpacing: '0.15em',
});

export const SectionTitle = styled.h2({
  fontSize: 'clamp(22px, 2.5vw, 31px)',
  letterSpacing: '-0.04em',
  lineHeight: 1.2,
  fontWeight: 700,
  marginBottom: 8,
});
