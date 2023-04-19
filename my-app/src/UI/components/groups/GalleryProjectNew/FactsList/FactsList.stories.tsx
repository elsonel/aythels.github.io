import { Meta, Story } from '@storybook/react';
import { Theme } from '../../../../utilities/themes/Theme';
import { FactsList, FactsListProps } from './FactsList';

export default {
  title: 'Groups/GalleryProjectNew/FactsList',
  component: FactsList,
  args: {
    facts: [
      {
        label: 'TYPE',
        value: 'Public Mega-Infastructure',
      },
      {
        label: 'REGION',
        value: 'Los Angeles, California',
      },
      {
        label: 'SUPERVISOR',
        value: 'Nathan Bishop (ARC380)',
      },
      {
        label: 'COLLABORATORS',
        value: 'Elson Liang, Omar Abdellatif',
      },
      {
        label: 'COMPLETED',
        value: 'December 2020',
      },
    ],
  },
} as Meta;

const Template: Story<FactsListProps> = (args) => <FactsList {...args} />;

export const Basic = Template.bind({});
