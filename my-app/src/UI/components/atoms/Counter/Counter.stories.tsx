import { Meta, Story } from '@storybook/react';
import { Counter, CounterProps } from './Counter';

export default {
  title: 'Atoms/Counter',
  component: Counter,
  args: { numerator: 3, denominator: 10 },
  parameters: {
    backgrounds: { default: 'dark' },
  },
} as Meta;

const Template: Story<CounterProps> = (args) => <Counter {...args} />;

export const Basic = Template.bind({});
