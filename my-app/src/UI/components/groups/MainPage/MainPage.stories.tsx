import { Meta, Story } from '@storybook/react';
import { MainPage, IMainPageProps } from './MainPage';

export default {
  title: 'Groups/MainPage',
  component: MainPage,
  args: {},
} as Meta;

const Template: Story<IMainPageProps> = (args) => <MainPage {...args} />;

export const Basic = Template.bind({});
