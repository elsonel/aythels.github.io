import { Meta, Story } from '@storybook/react';
import {
  DEFAULT_TITLE_BREAKPOINTS,
  PageTitle,
  PageTitleProps,
} from './PageTitle';

export default {
  title: 'Atoms/PageTitle',
  component: PageTitle,
  args: {
    children: 'GALLERY',
    isAlignedTop: true,
    breakpoints: DEFAULT_TITLE_BREAKPOINTS,
  },
  argTypes: {},
} as Meta;

const Template: Story<PageTitleProps> = (args) => <PageTitle {...args} />;

export const Basic = Template.bind({});

export const AlignedCenter = Template.bind({});
AlignedCenter.args = {
  ...AlignedCenter.args,
  isAlignedTop: false,
};
