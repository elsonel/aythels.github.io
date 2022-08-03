import styled from 'styled-components';
import { Icon } from '../../../atoms/Icon';
import { LessThanHook } from '../../../../utility/ResponsiveProps';
import { LinkInternal } from '../../../other/LinkInternal';
import { Paragraph } from '../../../text/Paragraph';

export interface HeaderTab {
  label: string;
  link?: string;
  onClick?: () => void;
}

export interface HeaderBrowserProps
  extends React.HTMLAttributes<HTMLDivElement> {
  tabs: HeaderTab[];
  tabLogo: HeaderTab;
}

export const HeaderBrowser: React.FC<HeaderBrowserProps> = ({
  tabs,
  tabLogo,
  ...props
}: HeaderBrowserProps) => {
  return (
    <Wrapper {...props}>
      <HeaderWrapper>
        <HeaderLogoWrapper>
          {tabLogo.link ? (
            <LinkInternal onClick={tabLogo.onClick} link={tabLogo.link}>
              <Icon src="/icons/logo.svg" alt={tabLogo.label} size={24} />
            </LinkInternal>
          ) : (
            <Icon
              onClick={tabLogo.onClick}
              src="/icons/logo.svg"
              alt={tabLogo.label}
              size={24}
            />
          )}
        </HeaderLogoWrapper>
        <TabWrapper>
          {tabs.map((e, i) =>
            e.link ? (
              <LinkInternal key={i} onClick={e.onClick} link={e.link}>
                <TabText size="medium">{e.label}</TabText>
              </LinkInternal>
            ) : (
              <TabText key={i} onClick={e.onClick} size="medium">
                {e.label}
              </TabText>
            )
          )}
        </TabWrapper>
      </HeaderWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 20px;

  background: ${({ theme }) => theme.colors.background};
`;

const HeaderWrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  user-select: none;
`;

const TabWrapper = styled.div`
  display: flex;
  column-gap: 20px;
`;

const TabText = styled(Paragraph)`
  color: ${({ theme }) => `${theme.colors.text}`};
  transition: ${({ theme }) => theme.speed.normal};

  &:hover {
    color: ${({ theme }) => theme.colors.textPassive1};
  }

  cursor: pointer;
`;

const HeaderLogoWrapper = styled.div`
  display: flex;
  margin-right: 20px;
`;
