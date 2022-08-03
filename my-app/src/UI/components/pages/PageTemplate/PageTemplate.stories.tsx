import { Meta, Story } from '@storybook/react';
import { DesignGallery } from '../../groups/DesignGallery';
import { Footer } from '../../groups/Footer/Footer';
import { PageTemplate, PageTemplateProps } from './PageTemplate';

export default {
  title: 'Pages/PageTemplate',
  component: PageTemplate,
  args: {
    children: [<DesignGallery />, <Footer />],
  },
  argTypes: {},
} as Meta;

const Template: Story<PageTemplateProps> = (args) => <PageTemplate {...args} />;

export const Basic = Template.bind({});

export const DesignGalleryPage = Template.bind({});
DesignGalleryPage.args = {
  ...DesignGalleryPage.args,
  children: [<DesignGallery />, <Footer />],
};
