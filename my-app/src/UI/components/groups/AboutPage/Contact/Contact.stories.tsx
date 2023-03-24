import { Meta, Story } from '@storybook/react';
import { Contact, IContactProps } from './Contact';

export default {
  title: 'Groups/AboutPage/Contact',
  component: Contact,
  args: {},
} as Meta;

const Template: Story<IContactProps> = (args) => <Contact {...args} />;

export const Basic = Template.bind({});
