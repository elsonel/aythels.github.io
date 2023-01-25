import { Meta, Story } from '@storybook/react';
import {
  TypographyOverview,
  ITypographyOverviewProps,
} from './TypographyOverview';

export default {
  title: 'Overview/TypographyOverview',
  component: TypographyOverview,
  args: {},
  argTypes: {},
} as Meta;

const Template: Story<ITypographyOverviewProps> = (args) => (
  <TypographyOverview {...args} />
);

export const Basic = Template.bind({});
