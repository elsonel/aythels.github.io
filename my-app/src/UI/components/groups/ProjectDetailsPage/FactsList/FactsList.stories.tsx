import { Meta, Story } from '@storybook/react';
import { EXAMPLE_FACTS } from '../helpers';
import { FactsList, FactsListProps } from './FactsList';

export default {
  title: 'Groups/ProjectDetailsPage/FactsList',
  component: FactsList,
  args: {
    facts: EXAMPLE_FACTS,
  },
} as Meta;

const Template: Story<FactsListProps> = (args) => <FactsList {...args} />;

export const Basic = Template.bind({});
