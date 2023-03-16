import React, { useState } from 'react';
import styled from 'styled-components';
import { LinkFake } from '../../../inputs/LinkFake/LinkFake';
import { Paragraph } from '../../../text/Paragraph/Paragraph';

export interface ITabsProps extends React.HTMLAttributes<HTMLDivElement> {
  tabs: {
    label: string;
    isActive?: boolean;
    href?: string;
    onClick?: () => void;
  }[];
}

export const Tabs: React.FC<ITabsProps> = ({
  tabs,
  ...props
}): React.ReactElement => {
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  return (
    <Wrapper {...props}>
      {tabs.map((t, i) => (
        <Row key={t.label}>
          <LinkWrapper>
            <StyledLinkFake
              onPointerEnter={() => setHoveredIndex(i)}
              onPointerLeave={() => setHoveredIndex(-1)}
              onClick={t.onClick}
              href={t.href}
            >
              <Text>{t.label}</Text>
            </StyledLinkFake>
          </LinkWrapper>
          <Line $isHovered={t.isActive || hoveredIndex === i} />
        </Row>
      ))}
    </Wrapper>
  );
};

const TEXT_WIDTH = 80;
const LINE_WIDTH = 60;

const Wrapper = styled.div`
  overflow: hidden;
  box-sizing: border-box;
  width: 100%;
  padding: 40px;

  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const LinkWrapper = styled.div`
  flex-shrink: 0;
  width: ${TEXT_WIDTH}px;
`;

const Text = styled(Paragraph).attrs(() => ({
  isWrapped: false,
}))`
  max-width: ${TEXT_WIDTH}px;
  color: ${({ theme }) => theme.color.text};
  font-size: ${({ theme }) => theme.font.default.size.small};
  font-weight: ${({ theme }) => theme.font.default.weight.bold};
`;

const Line = styled.div<{ $isHovered: boolean }>`
  flex-shrink: 0;
  height: 2px;
  width: ${({ $isHovered }) => ($isHovered ? `${LINE_WIDTH}px` : `0px`)};
  transition: ${({ theme }) => theme.speed.normal}ms;
  background-color: ${({ theme }) => theme.color.text};
`;

const StyledLinkFake = styled(LinkFake)`
  display: inline-flex;
`;
