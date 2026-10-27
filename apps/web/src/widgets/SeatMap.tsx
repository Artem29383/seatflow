import styled from 'styled-components';
import { theme } from '../app/theme';

type SeatState = 'available' | 'held' | 'sold';
const SeatStates: SeatState[][] = [
  ['available','available','available','sold','sold','available','available','available'],
  ['available','available','held','held','sold','available','available','available'],
  ['available','available','available','available','available','available','sold','available'],
  ['available','sold','available','available','available','available','available','available'],
  ['available','available','available','available','available','sold','available','available'],
];
const MapCard = styled.div({
  background: '#192338',
  border: '1px solid #34415a',
  borderRadius: 20,
  padding: '20px clamp(12px, 2vw, 24px)',
  boxShadow: '0 24px 80px rgba(0,0,0,.28)',
  transform: 'rotate(2deg)',
  '@media (max-width: 900px)': { transform: 'none', maxWidth: 520, width: '100%' },
});
const MapHeading = styled.div({ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 22, gap: 12 });
const MapTitle = styled.div({ fontSize: 14, fontWeight: 700 });
const MapMeta = styled.span({ fontSize: 10, color: theme.muted, whiteSpace: 'nowrap' });
const Stage = styled.div({
  width: '73%', height: 25, margin: '0 auto 30px', display: 'grid', placeItems: 'center',
  borderTop: '4px solid ' + theme.accent, borderRadius: '70% 70% 0 0',
  background: 'linear-gradient(180deg,rgba(180,163,255,.12),transparent)',
  color: theme.muted, fontSize: 9, fontWeight: 700, letterSpacing: '.22em',
});
const SeatRows = styled.div({ display: 'grid', gap: 12 });
const SeatRow = styled.div({ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 7 });
const RowLabel = styled.span({ color: theme.subtle, width: 16, fontSize: 10, fontWeight: 700 });
const Seat = styled.span<{ $state: SeatState }>(({ $state }) => ({
  width: 23, height: 23, borderRadius: '7px 7px 5px 5px', flexShrink: 0,
  background: $state === 'held' ? theme.accent : $state === 'sold' ? '#3b465a' : '#8291aa',
  boxShadow: $state === 'held' ? '0 0 0 3px rgba(180,163,255,.16)' : 'none',
  opacity: $state === 'sold' ? 0.5 : 1,
  borderBottom: '4px solid rgba(0,0,0,.25)',
  '@media (max-width: 420px)': { width: 18, height: 19 },
}));
const Legend = styled.div({ display: 'flex', justifyContent: 'center', gap: 16, flexWrap: 'wrap', paddingTop: 23, marginTop: 22, borderTop: '1px solid #34415a' });
const LegendItem = styled.div({ display: 'flex', gap: 6, alignItems: 'center', fontSize: 10, color: theme.muted });
const Dot = styled.span<{ $state: SeatState }>(({ $state }) => ({
  width: 8, height: 8, borderRadius: 3,
  background: $state === 'held' ? theme.accent : $state === 'sold' ? '#3b465a' : '#8291aa',
}));

export function SeatMap() {
  return (
    <MapCard aria-label="Демонстрационная схема зала, без реального бронирования">
      <MapHeading>
        <MapTitle>Основной зал</MapTitle>
        <MapMeta>Сеанс · демо</MapMeta>
      </MapHeading>
      <Stage>СЦЕНА</Stage>
      <SeatRows>
        {SeatStates.map((row, index) => (
          <SeatRow key={index}>
            <RowLabel>{String.fromCharCode(65 + index)}</RowLabel>
            {row.map((state, seatIndex) => (
              <Seat key={seatIndex} $state={state} title={`Ряд ${String.fromCharCode(65 + index)}, место ${seatIndex + 1}: ${state}`} />
            ))}
          </SeatRow>
        ))}
      </SeatRows>
      <Legend>
        <LegendItem><Dot $state="available" /> Свободно</LegendItem>
        <LegendItem><Dot $state="held" /> Удерживается</LegendItem>
        <LegendItem><Dot $state="sold" /> Продано</LegendItem>
      </Legend>
    </MapCard>
  );
}
