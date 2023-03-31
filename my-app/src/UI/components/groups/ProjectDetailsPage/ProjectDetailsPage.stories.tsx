import { Meta, Story } from '@storybook/react';
import { Frame } from '../../atoms/Frame/Frame';
import { EXAMPLE_FACTS, EXAMPLE_PARAGRAPHS } from './helpers';
import {
  ProjectDetailsPage,
  IProjectDetailsPageProps,
} from './ProjectDetailsPage';

export default {
  title: 'Groups/ProjectDetailsPage',
  component: ProjectDetailsPage,
  argTypes: { onClick: { action: 'clicked' } },
  args: {
    isLoaded: true,
    delay: 0,
    title: 'KINETIC BOARDWALK',
    facts: EXAMPLE_FACTS,
    paragraphs: EXAMPLE_PARAGRAPHS,
  },
} as Meta;

const Template: Story<IProjectDetailsPageProps> = (args) => (
  <ProjectDetailsPage {...args} />
);

export const Basic = Template.bind({});

const WithFrameTemplate: Story<IProjectDetailsPageProps> = (args) => (
  <>
    <ProjectDetailsPage {...args} />
    <Frame />
  </>
);
export const WithFrame = WithFrameTemplate.bind({});
