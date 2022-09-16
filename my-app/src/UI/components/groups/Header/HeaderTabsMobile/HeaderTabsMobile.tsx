import React from 'react';
import styled from 'styled-components';
import { LinkFake } from '../../../inputs/LinkFake';
import { Modal, ModalProps } from '../../../layout/Modal';
import { Paragraph } from '../../../text/Paragraph';
import { HeaderTab } from '../HeaderTabs';

export interface HeaderTabsMobileProps extends ModalProps {
  tabs?: HeaderTab[];
}

export const HeaderTabsMobile: React.FC<HeaderTabsMobileProps> = ({
  tabs = [],
  ...props
}): React.ReactElement => {
  return (
    <Wrapper {...props}>
      <Content>
        {tabs.map((e, i) => (
          <LinkFake
            key={i}
            onClick={e.onClick}
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
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  row-gap: 20px;

  > * {
    max-width: 100%;
  }
`;

const Tab = styled(Paragraph)`
  font-size: ${({ theme }) => theme.font.size.h1};
  font-weight: ${({ theme }) => theme.font.weight.bold2};
  cursor: pointer;
  transition: ${({ theme }) => theme.speed.normal};
  color: ${({ theme }) => `${theme.color.text}`};
  &:hover {
    color: ${({ theme }) => theme.color.textHovered};
  }
`;
