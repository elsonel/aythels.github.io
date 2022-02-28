import { Meta, Story } from '@storybook/react';
import { Thumbnail, ThumbnailProps } from './Thumbnail';

export default {
    title: 'Images/Thumbnail',
    component: Thumbnail,
    args: {
        src: `/thumbnails/thumb.jpg`,
        title: `SOARING SKIES`,
        subtitle: `2020`,
        titleVisible: false,
    },
    argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story<ThumbnailProps> = (args) => <Thumbnail {...args} />;

export const Basic = Template.bind({});

export const VisibleTitle = Template.bind({});
VisibleTitle.args = {
    ...VisibleTitle.args,
    src: `/thumbnails/thumb.jpg`,
    title: `SOARING SKIES`,
    subtitle: `2020`,
    titleVisible: true,
  }