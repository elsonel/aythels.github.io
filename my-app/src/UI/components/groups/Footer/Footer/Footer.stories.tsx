import { Meta, Story } from '@storybook/react';
import { Footer } from './Footer';
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';

export default {
  title: 'Groups/Footer/Footer',
  component: Footer,
  args: {},
} as Meta;

const Template: Story = (args) => <Footer {...args} />;

export const Desktop = Template.bind({});

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
