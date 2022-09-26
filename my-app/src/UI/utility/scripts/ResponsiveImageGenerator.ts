import { GridBreakpoint } from '../../components/layout/Grid';

const LEFT_PADDING = 20;
const RIGHT_PADDING = 20;
const GAP = 20;

// This is only an approximate, the actual image size will be equal or smaller than this value;
function calculateImageWidth(columnCount: number) {
  const availableSize = `(100vw - ${LEFT_PADDING + RIGHT_PADDING}px - ${
    (columnCount - 1) * GAP
  }px)`;

  return `calc(${availableSize} / ${columnCount})`;
}

export function getSizes(breakpoints: GridBreakpoint[]) {
  return [...breakpoints]
    .reverse()
    .map(
      (b) =>
        `(min-width: ${b.minWidth}px) ${calculateImageWidth(b.columnCount)},`
    )
    .join('\r\n');
}
