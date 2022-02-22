const Media = {
    mobileSmall: '320px',
    mobileLarge: '414px',
    tablet: '834px',
}

export const Responsive = (media:keyof typeof Media, style:string): string => `
    @media (max-width: ${Media[media]}) {
        ${style}
    }
`;