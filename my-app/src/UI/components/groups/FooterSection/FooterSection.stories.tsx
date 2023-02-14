import { Meta, Story } from '@storybook/react';
import { FooterSection, FooterSectionProps } from './FooterSection';

export default {
  title: 'Groups/FooterSection',
  component: FooterSection,
  args: {
    isLoaded: true,
  },
} as Meta;

const Template: Story<FooterSectionProps> = (args) => (
  <FooterSection {...args} />
);

export const Basic = Template.bind({});
