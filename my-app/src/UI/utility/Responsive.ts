const Media: { [key: string]: number } = {
    mobileSmall: 320,
    mobileLarge: 414,
    tablet: 834,
}

export const ResponsiveLessThan = (media:keyof typeof Media | string, style:string): string => `
    @media (max-width: ${Media[media] ? Media[media] + 1: media}px) {
        ${style}
    }
`;

export const ResponsiveGreaterThan = (media:keyof typeof Media | string, style:string): string => `
    @media (min-width: ${Media[media] ? Media[media] + 1: media}px) {
        ${style}
    }
`;
