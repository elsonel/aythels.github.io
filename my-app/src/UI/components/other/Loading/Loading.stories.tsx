import { Meta, Story } from '@storybook/react';
import { Loading, LoadingProps } from './Loading';
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';

export default {
  title: 'Other/Loading',
  component: Loading,
  args: {
    isVisible: true,
    progress: 0.2,
  },
} as Meta;

const Template: Story<LoadingProps> = (args) => <Loading {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  ...Basic.args,
};

export const NoProgress = Template.bind({});
NoProgress.args = {
  ...NoProgress.args,
  progress: undefined,
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
