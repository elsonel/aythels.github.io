import { Meta, Story } from '@storybook/react';
import { ModalImage, ModalImageProps } from './ModalImage';

export default {
    title: 'Other/ModalImage',
    component: ModalImage,
    args: {
      srcArray: [
        {
          src: `/images/sky.jpg`,
          title: `SKY`,
          caption: `This is the image caption 1.`,  
        },
        {
          src: `/thumbnails/thumb.jpg`,
          title: `THUMB`,
          caption: `This is the image caption 2.`,  
        },
        {
          src: `/icons/logo.svg`,
          title: `LOGO`,
          caption: `This is the image caption 3.`,  
        },
        {
          src: `/favicon.ico`,
          title: `ICON`,
          caption: `This is the image caption 4.`,  
        }
      ],
      visible: true,
      visibleFooter: true,
    },
    argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story<ModalImageProps> = (args) => <ModalImage {...args} />;

export const Basic = Template.bind({});

export const ThreeImage = Template.bind({});
ThreeImage.args = {
  ...ThreeImage.args,
  srcArray: [
    {
      src: `/images/sky.jpg`,
      title: `SKY`,
      caption: `This is the image caption 1.`,  
    },
    {
      src: `/thumbnails/thumb.jpg`,
      title: `THUMB`,
      caption: `This is the image caption 2.`,  
    },
    {
      src: `/icons/logo.svg`,
      title: `LOGO`,
      caption: `This is the image caption 3.`,  
    }
  ],
  visible: true,
  visibleFooter: true,
};

export const TwoImage = Template.bind({});
TwoImage.args = {
  ...TwoImage.args,
  srcArray: [
    {
      src: `/images/sky.jpg`,
      title: `SKY`,
      caption: `This is the image caption 1.`,  
    },
    {
      src: `/thumbnails/thumb.jpg`,
      title: `THUMB`,
      caption: `This is the image caption 2.`,  
    }
  ],
  visible: true,
  visibleFooter: true,
};

export const OneImage = Template.bind({});
OneImage.args = {
  ...OneImage.args,
  srcArray: [
    {
      src: `/images/sky.jpg`,
      title: `SKY`,
      caption: `This is the image caption 1.`,  
    }
  ],
  visible: true,
  visibleFooter: true,
};