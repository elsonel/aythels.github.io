import React from 'react';
import styled from 'styled-components';
import { GreaterThan } from '../../../../utility/styles/ResponsiveCSS';
import { Paragraph } from '../../../text/Paragraph/Paragraph';

export interface IPersonalInfoProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export const PersonalInfo: React.FC<IPersonalInfoProps> = ({
  ...props
}): React.ReactElement => {
  return (
    <Wrapper {...props}>
      <TextWrapper>
        <Text>
          I'm a software developer with additional skills in visual
          communication and design.
        </Text>
        <br />
        <Text>
          My Bachelor's in Architectural Technology, a multidisciplinary field
          that combines materiality, engineering, computation and design, from
          the University of Toronto, enables me to craft clear and empathetic
          solutions to complex challenges and real world problems using
          iterative and inquisitive methods.
        </Text>
        <br />
        <Text>
          When I'm away from the screen, I enjoy painting, and reading eastern
          fantasy.
        </Text>
      </TextWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  overflow: hidden;
  width: 100%;
`;

const TextWrapper = styled.div`
  flex-shrink: 0;
  ${GreaterThan(0, `width: 100%;`)}
  ${GreaterThan(600, `width: 300px;`)}
`;

const Text = styled(Paragraph)`
  text-align: inherit;
  color: ${({ theme }) => theme.color.text};
  font-size: ${({ theme }) => theme.font.default.size.small};
`;
