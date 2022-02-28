
import { Meta, Story } from '@storybook/react';
import { Heading, HeadingProps } from './Heading';

export default {
    title: 'Other/Heading',
    component: Heading,
    args: {
        active: true,
    },
} as Meta;

//const Template: Story<HeadingProps> = (args) => <Heading {...args} />;

export const Template: Story<HeadingProps> = (args) => <Heading {...args} />;

export const Projects = Template.bind({});
Projects.args = {
    ...Projects.args,
    activeTitle: "projects",
};