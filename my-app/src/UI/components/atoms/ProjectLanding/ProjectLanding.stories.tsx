import { Meta, Story } from '@storybook/react';
import { LinkExternalFactText } from '../../inputs/LinkExternalFactText';
import { ProjectLanding, ProjectLandingProps } from './ProjectLanding';

export default {
  title: 'Atoms/ProjectLanding',
  component: ProjectLanding,
  args: {
    isLandingVisible: true,
  },
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story<ProjectLandingProps> = (args) => (
  <ProjectLanding {...args} />
);

export const Basic = Template.bind({});
