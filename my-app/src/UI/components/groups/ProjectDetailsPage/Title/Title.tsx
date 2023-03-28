import React from 'react';
import styled, { useTheme } from 'styled-components';
import { Paragraph } from '../../../text/Paragraph/Paragraph';
import { Textfit } from '@namhong2001/react-textfit';
import { GreaterThan } from '../../../../utility/styles/ResponsiveCSS';

export interface TitleProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: string;
  color?: string;
}

export const Title: React.FC<TitleProps> = ({
  children,
  color: colorProp,
  ...props
}): React.ReactElement => {
  const { color } = useTheme();
  return (
    <Wrapper {...props}>
      <StyledTextFit mode="single" forceSingleModeWidth min={24} max={1000}>
        <Text color={colorProp ? colorProp : color.text}>{children}</Text>
      </StyledTextFit>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  ${GreaterThan(0, `padding: 30px 20px;`)}
  ${GreaterThan(800, `padding: 50px 40px;`)}
`;

const StyledTextFit = styled(Textfit)`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Text = styled(Paragraph)`
  text-align: center;
  font-size: inherit;
  font-family: ${({ theme }) => theme.font.title.family};
  line-height: 1;
  overflow-wrap: normal;

  transition: ${({ theme }) => theme.speed.slow}ms;
  transition-property: color;
  user-select: none;
`;
