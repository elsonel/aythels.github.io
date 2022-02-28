import { Meta, Story } from '@storybook/react';
import { About, AboutProps } from './About';

export default {
    title: 'Pages/About',
    component: About,
    args: {
      label: "GRAPHIC DESIGN",
    },
} as Meta;

const Template: Story<AboutProps> = (args) => <About {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  ...Basic.args,
  label: "GRAPHIC DESIGN",
}