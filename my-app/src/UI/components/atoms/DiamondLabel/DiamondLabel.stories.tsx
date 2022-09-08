import { Meta, Story } from '@storybook/react';
import styled from 'styled-components';
import { DiamondLabel, DiamondLabelProps, State } from './DiamondLabel';

const Padding = styled.div`
  padding: 100px;
`;

export default {
  title: 'Atoms/DiamondLabel',
  component: DiamondLabel,
  args: { size: 8, label: 'OVERVIEW', state: State.NEUTRAL },
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story<DiamondLabelProps> = (args) => (
  <Padding>
    <DiamondLabel {...args} />
  </Padding>
);

export const Neutral = Template.bind({});

export const SemiActive = Template.bind({});
SemiActive.args = {
  ...SemiActive.args,
  state: State.SEMIACTIVE,
};

export const Active = Template.bind({});
Active.args = {
  ...Active.args,
  state: State.ACTIVE,
};
