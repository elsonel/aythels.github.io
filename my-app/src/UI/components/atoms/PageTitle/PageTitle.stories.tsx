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
    title: 'GALLERY',
    subtitle: 'This is the gallery page',
    textAlign: 'left',
    breakpoints: DEFAULT_TITLE_BREAKPOINTS,
  },
  argTypes: {},
} as Meta;

const Template: Story<PageTitleProps> = (args) => <PageTitle {...args} />;

export const Basic = Template.bind({});

export const NoSubtitle = Template.bind({});
NoSubtitle.args = {
  ...NoSubtitle.args,
  subtitle: undefined,
};

export const Centered = Template.bind({});
Centered.args = {
  ...Centered.args,
  textAlign: 'center',
};
