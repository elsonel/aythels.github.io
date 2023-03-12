import React from 'react';
import styled, { useTheme } from 'styled-components';
import { Paragraph } from '../../../text/Paragraph/Paragraph';
import { Textfit } from 'react-textfit';

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
  width: 100%;
`;

const StyledTextFit = styled(Textfit)`
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
