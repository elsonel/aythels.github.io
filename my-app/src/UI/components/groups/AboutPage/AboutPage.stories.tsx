import { Meta, Story } from '@storybook/react';
import { Frame } from '../../atoms/Frame/Frame';
import { Header } from '../Header/Header';
import { HeaderTab } from '../Header/HeaderTab/HeaderTab';
import { HeaderTabIcon } from '../Header/HeaderTabIcon/HeaderTabIcon';

import { AboutPage, IAboutPageProps } from './AboutPage';

export default {
  title: 'Groups/AboutPage',
  component: AboutPage,
  argTypes: { onClick: { action: 'clicked' } },
  args: {
    isLoaded: true,
    delay: 0,
  },
} as Meta;

const Template: Story<IAboutPageProps> = (args) => <AboutPage {...args} />;

export const Basic = Template.bind({});

const WithFrameTemplate: Story<IAboutPageProps> = (args) => (
  <>
    <AboutPage {...args} />
    <Frame />
    <Header tabIcon={<HeaderTabIcon />}>
      <HeaderTab>PROJECTS</HeaderTab>
      <HeaderTab isActive>ABOUT</HeaderTab>
    </Header>
  </>
);
export const WithFrame = WithFrameTemplate.bind({});
