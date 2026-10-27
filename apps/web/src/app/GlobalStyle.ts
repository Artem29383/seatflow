import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyle = createGlobalStyle({
  '*': { boxSizing: 'border-box' },
  'html': { scrollBehavior: 'smooth' },
  'body': {
    margin: 0,
    minWidth: '320px',
    color: theme.text,
    background: theme.background,
    fontFamily: "'Inter', 'Segoe UI', sans-serif",
    WebkitFontSmoothing: 'antialiased',
  },
  'button, a': { WebkitTapHighlightColor: 'transparent' },
  'button': { font: 'inherit' },
  'a': { color: 'inherit', textDecoration: 'none' },
  'a:focus-visible, button:focus-visible': {
    outline: '2px solid ' + theme.accent,
    outlineOffset: '4px',
  },
  '::selection': { background: '#5b538f', color: '#fff' },
  'h1, h2, h3, p': { marginTop: 0 },
  'h1, h2, h3': { fontFamily: "'Space Grotesk', 'Inter', sans-serif" },
});
