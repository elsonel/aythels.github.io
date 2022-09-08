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
  padding: 20px 21px;

  user-select: none;
  pointer-events: none;

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
