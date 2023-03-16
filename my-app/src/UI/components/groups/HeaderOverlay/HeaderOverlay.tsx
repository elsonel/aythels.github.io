import React, { useState } from 'react';
import styled, { useTheme } from 'styled-components';
import { GreaterThan } from '../../../utility/styles/ResponsiveCSS';
import { IIconSVG } from '../../atoms/IIconSVG/IIconSVG';
import { LinkFake } from '../../inputs/LinkFake/LinkFake';
import { Paragraph } from '../../text/Paragraph/Paragraph';

export type Tab = {
  label: string;
  isActive?: boolean;
  href?: string;
  onClick?: () => void;
};

export interface IHeaderOverlayProps
  extends React.HTMLAttributes<HTMLDivElement> {
  iconTab: Omit<Tab, 'label' | 'isActive'>;
  tabs: Tab[];
}

export const HeaderOverlay: React.FC<IHeaderOverlayProps> = ({
  iconTab,
  tabs,
  ...props
}): React.ReactElement => {
  const { color, icon } = useTheme();
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  return (
    <Wrapper {...props}>
      <Content>
        <LinkFake onClick={iconTab.onClick}>
          <IconWrapper>
            <IIconSVG src={icon.logo} size={20} color={color.text} />
          </IconWrapper>
        </LinkFake>
        <Row>
          {tabs.map((t, i) => (
            <LinkWrapper>
              <Square $isHovered={t.isActive || hoveredIndex === i} />
              <LinkFake
                onPointerEnter={() => setHoveredIndex(i)}
                onPointerLeave={() => setHoveredIndex(-1)}
                onClick={t.onClick}
                href={t.href}
              >
                <Text>{t.label}</Text>
              </LinkFake>
            </LinkWrapper>
          ))}
        </Row>
      </Content>
    </Wrapper>
  );
};

const MOBILE_BREAKPOINT = 800;
const HEADER_WIDTH = 52;
const PADDING = 20;

const Wrapper = styled.div`
  z-index: ${({ theme }) => theme.layer.header};
  position: fixed;
  width: 100%;
  height: ${HEADER_WIDTH}px;
  top: 0px;
  left: 0px;
`;

const Content = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;

  ${GreaterThan(0, `padding-left: ${PADDING}px; padding-right: ${PADDING}px;`)}
  ${GreaterThan(
    MOBILE_BREAKPOINT,
    `padding-left: 0px; padding-right: ${PADDING * 2}px;`
  )}

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${PADDING}px;
`;

const Row = styled.div`
  ${GreaterThan(MOBILE_BREAKPOINT, `flex-grow: 1; justify-content: center; `)}
  display: flex;
  align-items: center;
  gap: 30px;
`;

const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Text = styled(Paragraph).attrs(() => ({
  isWrapped: false,
}))`
  color: ${({ theme }) => theme.color.text};
  font-size: ${({ theme }) => theme.font.default.size.tiny};
  font-weight: ${({ theme }) => theme.font.default.weight.bold};
  letter-spacing: ${({ theme }) => theme.font.default.letterSpacing.button};
`;

const Square = styled.div<{ $isHovered: boolean }>`
  flex-shrink: 0;
  height: 8px;
  width: 8px;
  background-color: ${({ theme }) => theme.color.text};
  opacity: ${({ $isHovered }) => ($isHovered ? 1 : 0)};
  transition: ${({ theme }) => theme.speed.normal}ms;
`;

const IconWrapper = styled.div`
  ${GreaterThan(
    MOBILE_BREAKPOINT,
    `
      width: ${HEADER_WIDTH}px;
      height: ${HEADER_WIDTH}px;

      display: flex;
      justify-content: center;
      align-items: center;
    `
  )}
`;
