import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { TextButton } from '../../text/TextButton';

export interface TabProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: string;
  isSelected?: boolean;
  onClick?: () => void;
}

export const Tab: React.FC<TabProps> = ({
  children = '',
  isSelected = false,
  onClick,
  ...props
}): React.ReactElement => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Wrapper
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      <TabWrapper>
        <TextBolded $isHovered={true} $isSelected={true}>
          {children}
        </TextBolded>
        <Text $isHovered={isHovered} $isSelected={isSelected}>
          {children}
        </Text>
      </TabWrapper>
    </Wrapper>
  );
};

const TextSelected = css`
  font-weight: ${({ theme }) => theme.font.weight.bold2};
  color: ${({ theme }) => theme.color.text};
`;

const TextNeutral = css`
  font-weight: ${({ theme }) => theme.font.weight.regular};
  color: ${({ theme }) => theme.color.textPassive2};
`;

const Text = styled(TextButton)<{ $isHovered: boolean; $isSelected: boolean }>`
  flex-basis: auto;
  position: absolute;

  user-select: none;
  transition: ${({ theme }) => `${theme.speed.normal}`};

  ${({ $isSelected, $isHovered }) =>
    $isSelected || $isHovered ? TextSelected : TextNeutral};
`;

const TextBolded = styled(Text)`
  position: static;
  opacity: 0;
  pointer-events: none;
`;

const Wrapper = styled.div`
  display: inline-block;

  box-sizing: border-box;
  height: 40px;
  padding: 0px 20px;

  cursor: pointer;
`;

const TabWrapper = styled.div`
  position: relative;

  height: 100%;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;
