import { Meta, Story } from '@storybook/react';
import { ProjectHoverText, IProjectHoverTextProps } from './ProjectHoverText';

export default {
  title: 'Groups/ProjectPage/ProjectHoverText',
  component: ProjectHoverText,
  args: {
    children: `Sed reprehenderit quas est saepe rerum ut impedit autem est rerum similique ut rerum ipsum sed sunt ducimus. Rerum ut impedit autem est rerum similique ut rerum ipsum sed sunt ducimus.`,
    number: undefined,
  },
} as Meta;

const Template: Story<IProjectHoverTextProps> = (args) => (
  <ProjectHoverText {...args} />
);

export const Basic = Template.bind({});

export const Highlighted = Template.bind({});
Highlighted.args = {
  ...Highlighted.args,
  number: 3,
};
