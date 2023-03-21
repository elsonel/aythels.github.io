import { Meta, Story } from '@storybook/react';
import { Frame, IFrameProps } from './Frame';

export default {
  title: 'Atoms/Frame',
  component: Frame,
  args: {},
} as Meta;

const Template: Story<IFrameProps> = (args) => <Frame {...args} />;

export const Basic = Template.bind({});

export const WithDarkBackground = Template.bind({});
WithDarkBackground.parameters = {
  backgrounds: { default: 'dark' },
};
