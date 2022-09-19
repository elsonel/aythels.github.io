import { Meta, Story } from '@storybook/react';
import { ErrorPanel, ErrorPanelProps } from './ErrorPanel';

export default {
  title: 'Groups/ErrorPanel',
  component: ErrorPanel,
  args: { homeLink: '/', email: 'elsonliangel@gmail.com' },
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story<ErrorPanelProps> = (args) => <ErrorPanel {...args} />;

export const Basic = Template.bind({});
