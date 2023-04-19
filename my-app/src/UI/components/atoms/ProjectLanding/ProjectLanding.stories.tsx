import { Meta, Story } from '@storybook/react';
import { Theme } from '../../../utilities/themes/Theme';
import { ProjectLanding, ProjectLandingProps } from './ProjectLanding';

export default {
  title: 'Atoms/ProjectLanding',
  component: ProjectLanding,
  args: {
    src: Theme.image.exampleSquare,
    subtitle: 'UI / UX',
    title: 'SPOTLIGHT',
    isContained: false,
    textColor: 'white',
  },
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story<ProjectLandingProps> = (args) => (
  <ProjectLanding {...args} />
);

export const Basic = Template.bind({});

export const LongText = Template.bind({});
LongText.args = {
  ...LongText.args,
  subtitle:
    'A VERY VERY VERY VERY VERY VERY LONG TITLE FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF',
  title:
    'There are lots and lots and lots and lots and lots and lots of text here. FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF',
};

export const NoText = Template.bind({});
NoText.args = {
  ...NoText.args,
  subtitle: undefined,
  title: undefined,
};

export const ContainedImage = Template.bind({});
ContainedImage.args = {
  ...ContainedImage.args,
  isContained: true,
  textColor: 'black',
};
