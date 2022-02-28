import { Meta, Story } from '@storybook/react';
import { Post, PostProps } from './Post';

export default {
    title: 'Images/Post',
    component: Post,
    args: {
        src: `/images/sky.jpg`,
        caption: `This is an image caption.`,
    },
    argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story<PostProps> = (args) => <Post {...args} />;

export const Basic = Template.bind({});