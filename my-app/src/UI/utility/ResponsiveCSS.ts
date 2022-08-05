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
  if (Media[media]) media = Media[media] + 1;
  else if (typeof media === 'number') media = `${media}px`;
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
  if (Media[media]) media = Media[media] + 1;
  else if (typeof media === 'number') media = `${media}px`;
  return `
    @media all and (min-width: ${media}) {
        ${style}
    }
`;
};
