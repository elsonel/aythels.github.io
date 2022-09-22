import { Meta, Story } from '@storybook/react';
import { GreetingPanel, GreetingPanelProps } from './GreetingPanel';

export default {
  title: 'Groups/GreetingPanel',
  component: GreetingPanel,
  args: { homeLink: '/', email: 'elsonliangel@gmail.com' },
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story<GreetingPanelProps> = (args) => (
  <GreetingPanel {...args} />
);

export const Basic = Template.bind({});
