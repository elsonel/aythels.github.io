import React from 'react';
import styled, { useTheme } from 'styled-components';
import { ThemeInterface } from '../../../utility/themes/Theme';
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
        <Paragraph textAlign="center" size="h3" weight="bold2">
          Hi!
        </Paragraph>
        <Paragraph textAlign="center" size="large">
          Morbi lobortis augue ac scelerisque mattis. Morbi malesuada risus
          lacus ac imperdiet consequat. Aenean malesuada vulputate lacus vitae
          massa fermentum lacus condimentum.
        </Paragraph>
      </TextWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 66vh;
  padding: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-bottom: 1px solid ${({ theme }) => theme.color.outline};
`;

const TextWrapper = styled.div`
  width: min(600px, 100%);
`;
