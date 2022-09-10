import { Meta, Story } from '@storybook/react';
import { LinkExternalFactText } from '../../inputs/LinkExternalFactText';
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

export const Link = Template.bind({});
Link.args = {
  ...Link.args,
  label: 'GITHUB',
  value: (
    <LinkExternalFactText link="/">
      Click here to go to website! AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
    </LinkExternalFactText>
  ),
};

export const AlwaysWrapped = Template.bind({});
AlwaysWrapped.args = {
  ...AlwaysWrapped.args,
  isAlwaysWrapped: true,
};
