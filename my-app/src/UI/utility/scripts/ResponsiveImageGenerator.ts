import { GridBreakpoint } from '../../components/layout/Grid';

// This is only an approximate, the actual image size will be equal or smaller than this value;
function calculateImageWidth(
  columnCount: number,
  gapWidth: number,
  edgeWidth: number
) {
  const availableSize = `(100vw - ${edgeWidth}px - ${
    (columnCount - 1) * gapWidth
  }px)`;

  return `calc(${availableSize} / ${columnCount})`;
}

export function getSizes(
  breakpoints: GridBreakpoint[],
  gap: number = 20,
  leftPadding: number = 20,
  rightPadding: number = 20
) {
  return [...breakpoints]
    .reverse()
    .map(
      (b) =>
        `(min-width: ${b.minWidth}px) ${calculateImageWidth(
          b.columnCount,
          gap,
          leftPadding + rightPadding
        )},`
    )
    .join('\r\n');
}
