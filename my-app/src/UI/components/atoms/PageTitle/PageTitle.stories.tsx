import { Meta, Story } from '@storybook/react';
import { PageTitle, PageTitleProps } from './PageTitle';

export default {
  title: 'Atoms/PageTitle',
  component: PageTitle,
  args: {
    children: 'GALLERY',
  },
  argTypes: {},
} as Meta;

const Template: Story<PageTitleProps> = (args) => <PageTitle {...args} />;

export const Basic = Template.bind({});
