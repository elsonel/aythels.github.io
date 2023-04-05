const Media: { [key: string]: number } = {
  mobileSmall: 320,
  mobileLarge: 414,
  tablet: 834,
};

// Excluding upper bound
export const LessThan = (
  media: keyof typeof Media | number | string,
  style: string
): string => {
  if (Media[media]) media = Media[media] + `px`;
  else if (typeof media === 'number') media = `${media - 1}px`;
  return `
    @media all and (max-width: ${media}) {
        ${style}
    }
`;
};

// Including lower bound
export const GreaterThan = (
  media: keyof typeof Media | number,
  style: string
): string => {
  if (Media[media]) media = Media[media] + `px`;
  else if (typeof media === 'number') media = `${media}px`;
  return `
    @media all and (min-width: ${media}) {
        ${style}
    }
`;
};

export const LessThanQuery = (width = 0, height = 0, style: string) => {
  width = width - 1;
  height = height - 1;

  return `  
    @media all and (max-width: ${width}px) and (max-height: ${height}px) {
      ${style}
    }
  `;
};

export const GreaterThanQuery = (width = 0, height = 0, style: string) => {
  return `  
    @media all and (min-width: ${width}px) and (min-height: ${height}px) {
      ${style}
    }
  `;
};
