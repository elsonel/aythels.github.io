import { Meta, Story } from '@storybook/react';
import styled from 'styled-components';
import { Frame } from '../../atoms/Frame/Frame';
import { FrameLayout } from '../../layout/FrameLayout/FrameLayout';
import { Paragraph } from '../../text/Paragraph/Paragraph';
import { HeaderOverlay } from '../HeaderOverlay/HeaderOverlay';
import { MainPage, IMainPageProps } from './MainPage';

const LeftTitle = styled.div`
  z-index: ${({ theme }) => theme.layer.header};
  position: fixed;
  top: calc(100% - 120px);
  left: 26px;

  transform: translate(-50%) rotate(-90deg);
`;

const Name = styled(Paragraph).attrs(() => ({
  size: 'h1',
}))`
  color: ${({ theme }) => theme.color.text};
  font-family: ${({ theme }) => theme.font.logo.family};
  letter-spacing: ${({ theme }) => theme.font.default.letterSpacing.button};
  font-size: ${({ theme }) => theme.font.default.size.large};
  font-weight: ${({ theme }) => theme.font.default.weight.medium};
  overflow-wrap: normal;
`;

export default {
  title: 'Groups/MainPage',
  component: MainPage,
  args: {},
} as Meta;

const Template: Story<IMainPageProps> = (args) => (
  <>
    <MainPage {...args} />
    <Frame />
    <HeaderOverlay
      iconTab={{
        href: '/',
      }}
      tabs={[
        {
          label: 'PROJECTS',
          href: '/',
          isActive: true,
        },
        {
          label: 'ABOUT',
          href: '/',
          isActive: false,
        },
      ]}
    />
    <LeftTitle>
      <Name>ELSON LIANG</Name>
    </LeftTitle>
  </>
);

export const Basic = Template.bind({});
