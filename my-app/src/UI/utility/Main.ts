export interface MainInterface {
    margin?: string | number;
    padding?: string | number;

}

export const Main = ({
    margin = 0,
    padding = 0,
    ...props
}: MainInterface): string => `
    // Positioning
    margin: ${margin};
    padding: ${padding};
};
`;
