import React from 'react';
import styled, { useTheme } from 'styled-components';
import { Paragraph } from '../../../text/Paragraph/Paragraph';
import { Textfit } from '@namhong2001/react-textfit';
import { GreaterThan } from '../../../../utilities/styles/ResponsiveCSS';

export interface TitleProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: string;
  color?: string;
  onReady?: () => void;
}

export const Title: React.FC<TitleProps> = ({
  children,
  color: colorProp,
  onReady,
  ...props
}): React.ReactElement => {
  const { color } = useTheme();
  return (
    <Wrapper {...props}>
      <StyledTextfit
        mode="single"
        forceSingleModeWidth
        min={24}
        max={140}
        onReady={onReady}
      >
        <Text color={colorProp ? colorProp : color.text}>{children}</Text>
      </StyledTextfit>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  ${GreaterThan(0, `padding: 30px 20px;`)}
  ${GreaterThan(800, `padding: 50px 40px;`)}
`;

const StyledTextfit = styled(Textfit)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Text = styled(Paragraph).attrs(({ theme }) => ({
  font: theme.font.title,
  size: 'h1',
}))`
  text-align: center;
  font-size: inherit;
  line-height: 0.84;
  overflow-wrap: normal;

  transition: ${({ theme }) => theme.speed.slow}ms;
  transition-property: color;
  user-select: none;
`;
