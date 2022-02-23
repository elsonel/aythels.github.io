export interface ThemeInterface {
    font: {
        family: string;
        weight: {
            light1: number;
            light2: number;
            regular: number;
            medium: number;
            bold1: number;
            bold2: number;
        };
        size: {
            default: string;
            small: string;
            h1: string;
            h2: string;
            h3: string;
            h4: string;
            h5: string;
            h6: string;
        };
    };
    colors: {
        text: string;
        textPassive: string;
        primary: string;
        background: string;
    };
}

export const Theme: ThemeInterface = {
    font: {
        family: `'Manrope', sans-serif;`,
        weight: {
            light1: 200,
            light2: 300,
            regular: 400,
            medium: 500,
            bold1: 600,
            bold2: 700,
        },
        size: {
            default: '1rem',
            small: '0.85rem',
            h1: '2rem',
            h2: '1.75rem',
            h3: '1.55rem',
            h4: '1.4rem',
            h5: '1.3rem',
            h6: '1.2rem',
        },
    },
    colors: {
        text: 'black',
        textPassive: 'lightgrey',
        primary: '#1ea7fd',
        background: '#ffffff',
    },
};