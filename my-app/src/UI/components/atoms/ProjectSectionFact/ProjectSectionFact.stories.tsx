import { Meta, Story } from '@storybook/react';
import { LinkExternalFactText } from '../../inputs/LinkExternalFactText';
import {
  ProjectSectionFact,
  ProjectSectionFactProps,
} from './ProjectSectionFact';

export default {
  title: 'Atoms/ProjectSectionFact',
  component: ProjectSectionFact,
  args: {
    label: 'COLLABORATORS',
    value: 'Elson Liang, Xavier Woo, Perry Wang',
    isAlwaysWrapped: false,
  },
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story<ProjectSectionFactProps> = (args) => (
  <ProjectSectionFact {...args} />
);

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
