import { Meta, Story } from '@storybook/react';
import { HeaderTitles, HeaderTitlesProps } from './HeaderTitles';

export default {
    title: 'Other/HeaderTitles',
    component: HeaderTitles,
    args: {
      activeTitle: undefined,
    },
} as Meta;

const Template: Story<HeaderTitlesProps> = (args) => <HeaderTitles {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  ...Basic.args,
  activeTitle: undefined,
};

export const Projects = Template.bind({});
Projects.args = {
    ...Projects.args,
    activeTitle: "projects",
};