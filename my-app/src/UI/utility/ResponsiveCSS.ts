const Media: { [key: string]: number } = {
  mobileSmall: 320,
  mobileLarge: 414,
  tablet: 834,
};

// Excluding upper bound
export const LessThan = (
  media: keyof typeof Media | number,
  style: string
): string => `
    @media all and (max-width: ${Media[media] ? Media[media] + 1 : media}px) {
        ${style}
    }
`;

// Including lower bound
export const GreaterThan = (
  media: keyof typeof Media | number,
  style: string
): string => `
    @media all and (min-width: ${Media[media] ? Media[media] + 1 : media}px) {
        ${style}
    }
`;
