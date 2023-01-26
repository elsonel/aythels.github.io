import { Meta, Story } from '@storybook/react';
import { GridEven, GridEvenProps } from './GridEven';
import { TiltCard } from '../../atoms/TiltCard';
import styled from 'styled-components';

const StyledCard = styled(TiltCard)`
  width: 100%;
  height: 100%;
  aspect-ratio: 1;
`;

let key = 0;
function createCard() {
  key += 1;
  return (
    <StyledCard
      key={key}
      roleLabel={`FRONTEND DEVELOPER`}
      employerLabel={`CENTRO`}
      startDate={new Date()}
      endDate={new Date()}
      description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit,  
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut  enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat
        nulla pariatur.`}
    />
  );
}

export default {
  title: 'Layout/GridEven',
  component: GridEven,
  args: {
    children: [createCard(), createCard(), createCard(), createCard()],
  },
} as Meta;

const Template: Story<GridEvenProps> = (args) => <GridEven {...args} />;

export const Basic = Template.bind({});
