import { Meta, Story } from '@storybook/react';
import { PageNavButton, PageNavButtonProps } from './PageNavButton';

export default {
  title: 'Inputs/PageNavButtons/PageNavButton',
  component: PageNavButton,
  args: {
    direction: 'RIGHT',
  },
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story<PageNavButtonProps> = (args) => (
  <PageNavButton {...args} />
);

export const Right = Template.bind({});

export const Left = Template.bind({});
Left.args = {
  ...Left.args,
  direction: 'LEFT',
};

export const WithText = Template.bind({});
WithText.args = {
  ...WithText.args,
  children: 'NEXT PROJECT',
};
