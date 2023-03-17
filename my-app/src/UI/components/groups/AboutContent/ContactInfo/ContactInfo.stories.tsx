import { Meta, Story } from '@storybook/react';
import { ContactInfo, IContactInfoProps } from './ContactInfo';

export default {
  title: 'Groups/AboutContent/ContactInfo',
  component: ContactInfo,
  args: {},
} as Meta;

const Template: Story<IContactInfoProps> = (args) => <ContactInfo {...args} />;

export const Basic = Template.bind({});
