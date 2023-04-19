import React from 'react';
import styled, { useTheme } from 'styled-components';
import { ThemeInterface } from '../../../utilities/themes/Theme';
import { Paragraph } from '../../text/Paragraph';

export interface GreetingPanelProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export const GreetingPanel: React.FC<GreetingPanelProps> = ({
  ...props
}): React.ReactElement => {
  const theme = useTheme() as ThemeInterface;

  return (
    <Wrapper {...props}>
      <TextWrapper>
        <Paragraph textAlign="center" size="h3" weight="bold">
          Hi, I'm Elson.
        </Paragraph>
        <Paragraph textAlign="center" size="large">
          I'm a stack software developer with a formal background in
          architecture. My passion lies in engineering resilient solutions that
          integrate well with sophisticated design and user experience.
        </Paragraph>
      </TextWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 80px;
  padding-left: calc(env(safe-area-inset-left) + 20px);
  padding-right: calc(env(safe-area-inset-right) + 20px);

  display: flex;
  justify-content: center;
  align-items: center;

  border-bottom: 1px solid ${({ theme }) => theme.color.outline};
  margin-bottom: 8px;
`;

const TextWrapper = styled.div`
  width: min(600px, 100%);
`;
