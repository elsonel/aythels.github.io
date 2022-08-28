import { Meta, Story } from '@storybook/react';
import { HeaderPlaceholder, HeaderPlaceholderProps } from './HeaderPlaceholder';
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';

export default {
  title: 'Groups/Header/HeaderPlaceholder',
  component: HeaderPlaceholder,
  args: {},
} as Meta;

const Template: Story<HeaderPlaceholderProps> = (args) => (
  <div>
    <HeaderPlaceholder {...args} />
    Bottom text
  </div>
);

export const Desktop = Template.bind({});

export const Mobile = Template.bind({});
Mobile.parameters = {
  ...Mobile.parameters,
  viewport: {
    ...MINIMAL_VIEWPORTS,
    defaultViewport: 'mobile1',
  },
};
