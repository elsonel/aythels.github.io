import React from 'react';
import styled from 'styled-components';
import { Paragraph } from '../../../text/Paragraph/Paragraph';

export interface IBackgroundProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export const Background: React.FC<IBackgroundProps> = ({
  ...props
}): React.ReactElement => {
  return (
    <Wrapper {...props}>
      <Title>/ BACKGROUND /</Title>
      <Text>
        I'm a software developer specializing in front-end technologies with
        additional experience in visual communication and design.
      </Text>
      <br />
      <Text>
        My Bachelor's in Architectural Technology, a multidisciplinary field
        that combines materiality, engineering, computation and design, from the
        University of Toronto, enables me to craft clear and empathetic
        solutions to complex challenges and real world problems using iterative
        and inquisitive methods.
      </Text>
      <br />
      <Text>
        When I'm away from the screen, I enjoy painting and reading eastern
        fantasy.
      </Text>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  overflow: hidden;
  width: 100%;
`;

const Title = styled(Paragraph).attrs(() => ({
  isWrapped: false,
  size: 'h5',
}))`
  color: ${({ theme }) => theme.color.text};
  font-weight: ${({ theme }) => theme.font.mono.weight.medium};
  font-family: ${({ theme }) => theme.font.mono.family};
  font-size: ${({ theme }) => theme.font.mono.size.h5};

  margin-bottom: 20px;
`;

const Text = styled(Paragraph)`
  text-align: inherit;
  color: ${({ theme }) => theme.color.text};
`;
