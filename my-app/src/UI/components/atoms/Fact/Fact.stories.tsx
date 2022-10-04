import { Meta, Story } from '@storybook/react';
import { Fact, FactProps } from './Fact';

export default {
  title: 'Atoms/Fact',
  component: Fact,
  args: {
    label: 'COLLABORATORS',
    value: 'Elson Liang, Xavier Woo, Perry Wang',
    isAlwaysWrapped: false,
  },
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story<FactProps> = (args) => <Fact {...args} />;

export const Basic = Template.bind({});

export const LongText = Template.bind({});
LongText.args = {
  ...LongText.args,
  label:
    'A VERY VERY VERY VERY VERY VERY LONG TITLE FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF',
  value:
    'There are lots and lots and lots and lots and lots and lots of text here. FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF',
};

export const WithLink = Template.bind({});
WithLink.args = {
  ...WithLink.args,
  label: 'GITHUB',
  value: (
    <a href="/">
      Click here to go to website! AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
    </a>
  ),
};

export const AlwaysWrapped = Template.bind({});
AlwaysWrapped.args = {
  ...AlwaysWrapped.args,
  isAlwaysWrapped: true,
};
