import { Meta, Story } from '@storybook/react';
import styled from 'styled-components';

import { ProjectList, IProjectListProps, ProjectData } from './ProjectList';

const DATA: ProjectData[] = [
  {
    group: 'DEVELOPMENT',
    name: 'CENTRO FORECASTING',
    type: 'Web Application',
    year: 2022,
    description: `Lorem ipsum dolor sit amet. Eos dolorem iure ea architecto similique aut dignissimos repudiandae.`,
  },
  {
    group: 'DEVELOPMENT',
    name: 'CENTRO BUDGETING',
    type: 'Web Application',
    year: 2022,
    description: `Sed reprehenderit quas est saepe rerum ut impedit autem est rerum similique ut rerum ipsum sed sunt ducimus. 
    `,
  },
  {
    group: 'DEVELOPMENT',
    name: 'RPG NODE BOARD',
    type: 'Web Application',
    year: 2021,
    description: `Et porro numquam est molestias quia ea quia culpa ea minima magnam ea distinctio placeat.
    `,
  },
  {
    group: 'DESIGN',
    name: 'PORTFOL.IO',
    type: 'User Interface',
    year: 2020,
    description: `Cum veritatis voluptatibus non maiores galisum vel nihil sunt eum error eaque non itaque nisi.
    `,
  },
  {
    group: 'DESIGN',
    name: 'SPOTLIGHT',
    type: 'User Interface',
    year: 2020,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    `,
  },
  {
    group: 'ARCHIVE',
    name: 'FOLD PAVILION',
    type: 'Architecture',
    year: 2022,
    description: `Aut ullam sequi vel omnis quia eum doloribus repudiandae ut labore pariatur`,
  },
  {
    group: 'ARCHIVE',
    name: 'KINETIC BOARDWALK',
    type: 'Architecture',
    year: 2020,
    description: `Et voluptatem accusantium cum vero velit sed repudiandae. `,
  },
  {
    group: 'ARCHIVE',
    name: 'BASILISK TOWER',
    type: 'Architecture',
    year: 2019,
    description: `Est nemo soluta est cumque saepe est beatae aspernatur et deserunt laudantium sed ullam explicabo.
    `,
  },
];

export default {
  title: 'Groups/ProjectsPage/ProjectList',
  component: ProjectList,
  args: {
    projectData: DATA,
  },
} as Meta;

const Template: Story<IProjectListProps> = (args) => <ProjectList {...args} />;

export const Basic = Template.bind({});
