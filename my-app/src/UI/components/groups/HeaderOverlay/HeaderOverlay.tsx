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
        <IconWrapper>
          <LinkFake href={iconTab.href} onClick={iconTab.onClick}>
            <IIconSVG src={icon.logo} size={20} color={color.text} />
          </LinkFake>
        </IconWrapper>
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

const Wrapper = styled.div`
  z-index: ${({ theme }) => theme.layer.header};
  position: fixed;
  width: 100%;
  height: ${({ theme }) => theme.size.headerHeight}px;
  top: 0px;
  left: 0px;
`;

const Content = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;

  ${({ theme }) =>
    GreaterThan(
      0,
      `
        padding-left: ${theme.size.padding}px; 
        padding-right: ${theme.size.padding}px;
      `
    ) +
    GreaterThan(
      theme.breakpoint.header,
      `
        padding-left: 0px; 
        padding-right: ${theme.size.padding * 2}px;
      `
    )}

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.size.padding}px;
`;

const Row = styled.div`
  ${({ theme }) =>
    GreaterThan(
      theme.breakpoint.header,
      `
        flex-grow: 1; 
        justify-content: center; 
      `
    )}
  display: flex;
  align-items: center;
  gap: 50px;
`;

const LinkWrapper = styled.div`
  position: relative;
`;

const Text = styled(Paragraph).attrs(() => ({
  isWrapped: false,
}))`
  color: ${({ theme }) => theme.color.text};
  font-size: ${({ theme }) => theme.font.mono.size.small};
  font-weight: ${({ theme }) => theme.font.mono.weight.semiBold};
  font-family: ${({ theme }) => theme.font.mono.family};
`;

const Square = styled.div<{ $isHovered: boolean }>`
  position: absolute;
  top: 50%;
  right: calc(100% + 8px);
  height: 6px;
  width: 6px;
  background-color: ${({ theme }) => theme.color.text};
  opacity: ${({ $isHovered }) => ($isHovered ? 1 : 0)};
  transform: translateY(-50%);
  transition: ${({ theme }) => theme.speed.normal}ms;
`;

const IconWrapper = styled.div`
  ${({ theme }) =>
    GreaterThan(
      theme.breakpoint.header,
      `
        width: ${theme.size.headerHeight}px;
        height: ${theme.size.headerHeight}px;

        display: flex;
        justify-content: center;
        align-items: center;
      `
    )}
`;
