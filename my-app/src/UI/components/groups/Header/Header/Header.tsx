import styled from 'styled-components';
import { HeaderLogoProps } from '../HeaderLogo';
import { HeaderTabsProps } from '../HeaderTabs';

export interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: [
    React.ReactElement<HeaderLogoProps>,
    React.ReactElement<HeaderTabsProps>
  ];
}

export const Header: React.FC<HeaderProps> = ({
  children,
  ...props
}: HeaderProps) => {
  return (
    <Wrapper {...props}>
      <Content>
        {children[0]}
        {children[1]}
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  overflow: hidden;
  box-sizing: border-box;

  width: 100%;
  height: ${({ theme }) => theme.size.headerHeight}px;
  padding: 0px 20px;

  display: flex;
  align-items: center;

  user-select: none;
  pointer-events: none;
  background-color: ${({ theme }) => theme.color.background};
  border-bottom: 1px solid ${({ theme }) => theme.color.outline};

  //mix-blend-mode: difference;
  //filter: invert();
`;

const Content = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  gap: 20px;

  > * {
    flex-shrink: 0;
    pointer-events: auto;

    &:nth-child(1) {
      z-index: 1;
    }

    &:nth-child(2) {
      z-index: 0;
    }
  }
`;
