import { Meta, Story } from '@storybook/react';
import { Frame } from '../../atoms/Frame/Frame';
import { ProjectsPage, IProjectsPageProps } from './ProjectsPage';
import { EXAMPLE_DATA } from './helpers';

export default {
  title: 'Groups/ProjectsPage',
  component: ProjectsPage,
  args: {
    projectData: EXAMPLE_DATA,
    defaultHoverText: `Sed reprehenderit quas est saepe rerum ut impedit autem est rerum similique ut rerum ipsum sed sunt ducimus. Rerum similique ut rerum ipsum sed sunt ducimus.`,
    isLoaded: true,
    delay: 0,
  },
} as Meta;

const Template: Story<IProjectsPageProps> = (args) => (
  <>
    <ProjectsPage {...args} />
    <Frame />
  </>
);

export const Basic = Template.bind({});
