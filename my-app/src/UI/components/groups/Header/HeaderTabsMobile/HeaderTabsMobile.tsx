import React from 'react';
import styled from 'styled-components';
import { LinkFake } from '../../../inputs/LinkFake';
import { Modal, ModalProps } from '../../../layout/Modal';
import { Paragraph } from '../../../text/Paragraph';
import { HeaderTabData } from '../HeaderTabs';

export interface HeaderTabsMobileProps extends ModalProps {
  tabs?: HeaderTabData[];
  onTabClick?: () => void;
}

export const HeaderTabsMobile: React.FC<HeaderTabsMobileProps> = ({
  tabs = [],
  onTabClick,
  ...props
}): React.ReactElement => {
  return (
    <Wrapper {...props}>
      <Content>
        {tabs.map((e, i) => (
          <LinkFake
            key={i}
            onClick={() => {
              onTabClick && onTabClick();
              e.onClick && e.onClick();
            }}
            href={e.href}
            children={<Tab isWrapped={false}>{e.label}</Tab>}
          />
        ))}
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled(Modal)`
  box-sizing: border-box;
  padding: 20px;

  transform: none;
`;

const Content = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding-top: 20px;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  row-gap: 30px;

  > * {
    max-width: 100%;
  }
`;

const Tab = styled(Paragraph)`
  line-height: 0.9;
  font-size: ${({ theme }) => theme.font.default.size.h1};
  font-weight: ${({ theme }) => theme.font.default.weight.semiBold};
  cursor: pointer;
  transition: ${({ theme }) => theme.speed.normal}ms;
  color: ${({ theme }) => `${theme.color.text}`};
  &:hover {
    color: ${({ theme }) => theme.color.textHovered};
  }
`;
