import styled from 'styled-components';
import { HeaderBrowser, HeaderTab } from '../HeaderBrowser';
import { useState } from 'react';
import { LinkInternal } from '../../../other/LinkInternal';
import { Paragraph } from '../../../text/Paragraph';
import { HiddenTouchScrollY } from '../../../../utility/ScrollStyle';

export interface HeaderMobileProps
  extends React.HTMLAttributes<HTMLDivElement> {
  tabs: HeaderTab[];
  tabLogo: HeaderTab;
  isMenuOpen?: boolean;
}

export const HeaderMobile: React.FC<HeaderMobileProps> = ({
  tabs,
  tabLogo,
  isMenuOpen = false,
  ...props
}: HeaderMobileProps) => {
  const [isVisible, setIsVisible] = useState(isMenuOpen);
  console.log('hi');

  return (
    <Wrapper {...props}>
      <HeaderBrowser
        tabs={[
          {
            label: isVisible ? 'CLOSE' : 'MENU',
            onClick: () => setIsVisible(!isVisible),
          },
        ]}
        tabLogo={tabLogo}
      />
      <Modal $isVisible={isVisible}>
        <ModalContent>
          {tabs.map((e, i) =>
            e.link ? (
              <LinkInternal key={i} onClick={e.onClick} link={e.link}>
                <TabText size="h2">{e.label}</TabText>
              </LinkInternal>
            ) : (
              <TabText size="h2" onClick={e.onClick}>
                {e.label}
              </TabText>
            )
          )}
        </ModalContent>
      </Modal>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
`;

const Modal = styled.div<{ $isVisible: boolean }>`
  overflow: hidden;
  box-sizing: border-box;

  width: 100%;
  padding: 0px 20px 20px 20px;
  flex-grow: 1;

  pointer-events: ${({ $isVisible }) => ($isVisible ? 'auto' : 'none')};
  user-select: none;
  background: ${({ theme }) => theme.colors.background};
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transition: ${({ theme }) => theme.speed.normal};
  transition-property: opacity;
`;

const ModalContent = styled.div`
  overflow: hidden;

  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  row-gap: 20px;

  > * {
    align-self: flex-end;
  }
`;

const TabText = styled(Paragraph)`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 100%;

  color: ${({ theme }) => `${theme.colors.text}`};
  transition: ${({ theme }) => theme.speed.normal};

  &:hover {
    color: ${({ theme }) => theme.colors.textPassive1};
  }

  cursor: pointer;
`;
