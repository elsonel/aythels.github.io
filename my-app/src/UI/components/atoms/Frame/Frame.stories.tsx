import { Meta, Story } from '@storybook/react';
import { Frame, IFrameProps } from './Frame';

export default {
  title: 'Atoms/Frame',
  component: Frame,
  parameters: {
    backgrounds: { default: 'dark' },
  },
  args: {},
} as Meta;

const Template: Story<IFrameProps> = (args) => <Frame {...args} />;

export const Basic = Template.bind({});
