import { Meta, Story } from '@storybook/react';
import { Frame } from '../../atoms/Frame/Frame';
import { Header } from '../Header/Header';
import { HeaderTab } from '../Header/HeaderTab/HeaderTab';
import { HeaderTabIcon } from '../Header/HeaderTabIcon/HeaderTabIcon';

import { AboutPage, IAboutPageProps } from './AboutPage';

export default {
  title: 'Groups/AboutPage',
  component: AboutPage,
  args: {},
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story<IAboutPageProps> = (args) => <AboutPage {...args} />;

export const Basic = Template.bind({});

const WithFrameTemplate: Story<IAboutPageProps> = (args) => (
  <>
    <AboutPage {...args} />
    <Frame />
    <Header tabIcon={<HeaderTabIcon />}>
      <HeaderTab isActive>PROJECTS</HeaderTab>
      <HeaderTab>ABOUT</HeaderTab>
    </Header>
  </>
);
export const WithFrame = WithFrameTemplate.bind({});
