import React from 'react';
import styled from 'styled-components';
import { GreaterThan } from '../../../utilities/styles/ResponsiveCSS';
import { FadeIn } from '../../other/FadeIn/FadeIn';
import { IHeaderTabProps } from './HeaderTab/HeaderTab';
import { IHeaderTabIconProps } from './HeaderTabIcon/HeaderTabIcon';

export interface IHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  tabIcon?: React.ReactElement<IHeaderTabIconProps>;
  children?: React.ReactElement<IHeaderTabProps>[];
  isLoaded?: boolean;
  delay?: number;
  isAnimating?: boolean;
}

export const Header: React.FC<IHeaderProps> = ({
  tabIcon,
  children = [],
  isLoaded = true,
  delay = 0,
  isAnimating = true,
  ...props
}): React.ReactElement => {
  return (
    <Wrapper {...props}>
      {isAnimating ? (
        <FadeIn isLoaded={isLoaded} delay={delay} offset={0}>
          <Content>
            {tabIcon && <IconWrapper>{tabIcon}</IconWrapper>}
            <Row>{children}</Row>
          </Content>
        </FadeIn>
      ) : (
        isLoaded && (
          <Content>
            {tabIcon && <IconWrapper>{tabIcon}</IconWrapper>}
            <Row>{children}</Row>
          </Content>
        )
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  top: 0px;
  left: 0px;
`;

const Content = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: ${({ theme }) => theme.size.headerHeight}px;

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
