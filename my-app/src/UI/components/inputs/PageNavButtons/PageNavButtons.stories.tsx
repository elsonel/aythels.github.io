import { Meta, Story } from '@storybook/react';
import { PageNavButtons, PageNavButtonsProps } from './PageNavButtons';
import { Frame } from '../../atoms/Frame/Frame';

export default {
  title: 'Inputs/PageNavButtons',
  component: PageNavButtons,
  argTypes: { onClick: { action: 'clicked' } },
  args: {
    backHref: '/back',
    forwardHref: '/forward',
  },
} as Meta;

const Template: Story<PageNavButtonsProps> = (args) => (
  <>
    <Frame />
    <PageNavButtons {...args} />
  </>
);

export const Basic = Template.bind({});

export const OnlyBackButton = Template.bind({});
OnlyBackButton.args = {
  ...OnlyBackButton.args,
  forwardHref: undefined,
};

export const OnlyForwardButton = Template.bind({});
OnlyForwardButton.args = {
  ...OnlyForwardButton.args,
  backHref: undefined,
};
