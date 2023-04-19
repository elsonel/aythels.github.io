export const IfTouchScreen = (style: string): string => {
  return `
    @media (any-pointer: coarse) {
        ${style}
    }
  `;
};
