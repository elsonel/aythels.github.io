import { Meta, Story } from '@storybook/react';
import { ColorsOverview, IColorsOverviewProps } from './ColorsOverview';

export default {
  title: 'Overview/ColorsOverview',
  component: ColorsOverview,
  args: {},
  argTypes: {},
} as Meta;

const Template: Story<IColorsOverviewProps> = (args) => (
  <ColorsOverview {...args} />
);

export const Basic = Template.bind({});
