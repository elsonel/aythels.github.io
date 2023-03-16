import { Meta, Story } from '@storybook/react';
import { BasicInfo, IBasicInfoProps } from './BasicInfo';

export default {
  title: 'Groups/MainPage/BasicInfo',
  component: BasicInfo,
  args: {},
} as Meta;

const Template: Story<IBasicInfoProps> = (args) => <BasicInfo {...args} />;

export const Basic = Template.bind({});
