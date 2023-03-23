import { Meta, Story } from '@storybook/react';
import { Frame } from '../../atoms/Frame/Frame';
import { Header } from '../Header/Header';
import { HeaderTab } from '../Header/HeaderTab/HeaderTab';
import { HeaderTabIcon } from '../Header/HeaderTabIcon/HeaderTabIcon';

import { AboutContent, IAboutContentProps } from './AboutContent';

export default {
  title: 'Groups/AboutContent',
  component: AboutContent,
  args: {},
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story<IAboutContentProps> = (args) => (
  <AboutContent {...args} />
);

export const Basic = Template.bind({});

const WithFrameTemplate: Story<IAboutContentProps> = (args) => (
  <>
    <AboutContent {...args} />
    <Frame />
    <Header tabIcon={<HeaderTabIcon />}>
      <HeaderTab isActive>PROJECTS</HeaderTab>
      <HeaderTab>ABOUT</HeaderTab>
    </Header>
  </>
);
export const WithFrame = WithFrameTemplate.bind({});
