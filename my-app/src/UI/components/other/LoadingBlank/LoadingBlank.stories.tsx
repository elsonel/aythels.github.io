import { Meta, Story } from '@storybook/react';
import { LoadingBlank, ILoadingBlankProps } from './LoadingBlank';
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';

export default {
  title: 'Other/LoadingBlank',
  component: LoadingBlank,
  argTypes: { onVisibleComplete: { action: 'Screen visible' } },
  args: {
    isVisible: true,
  },
} as Meta;

const Template: Story<ILoadingBlankProps> = (args) => (
  <LoadingBlank {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  ...Basic.args,
};

export const Tablet = Template.bind({});
Tablet.parameters = {
  ...Tablet.parameters,
  viewport: {
    ...MINIMAL_VIEWPORTS,
    defaultViewport: 'tablet',
  },
};

export const Mobile = Template.bind({});
Mobile.parameters = {
  ...Mobile.parameters,
  viewport: {
    ...MINIMAL_VIEWPORTS,
    defaultViewport: 'mobile2',
  },
};
