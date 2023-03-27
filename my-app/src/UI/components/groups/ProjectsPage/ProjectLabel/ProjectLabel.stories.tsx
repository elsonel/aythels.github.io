import { Meta, Story } from '@storybook/react';
import { ProjectLabel, IProjectLabelProps } from './ProjectLabel';

export default {
  title: 'Groups/ProjectsPage/ProjectLabel',
  component: ProjectLabel,
  argTypes: {
    onClick: { action: 'clicked' },
    onHoverEnter: { action: 'entered' },
    onHoverLeave: { action: 'left' },
  },
  args: {
    name: 'KINETIC BOARDWALK',
    type: 'Architecture',
    year: 2020,
    href: '/',
    isOpeningNewTab: false,
  },
} as Meta;

const Template: Story<IProjectLabelProps> = (args) => (
  <ProjectLabel {...args} />
);

export const Basic = Template.bind({});

export const OpenNewPage = Template.bind({});
OpenNewPage.args = {
  ...OpenNewPage.args,
  href: 'https://www.google.ca',
  isOpeningNewTab: true,
};
