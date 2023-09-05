import { Meta, Story } from '@storybook/react';
import styled from 'styled-components';
import { TiltCard, TiltCardProps } from './TiltCard';

const Parent = styled.div`
  position: relative;
  top: 100px;
  width: 100%;
  display: flex;
  justify-content: center;

  > * {
    flex-shrink: 0;
  }
`;

export default {
  title: 'Atoms/TiltCard',
  component: TiltCard,
  args: {
    roleLabel: 'FRONTEND DEVELOPER',
    employerLabel: 'SAVI',
    startDate: new Date(),
    endDate: new Date(),
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
    reprehenderit in voluptate velit esse cillum dolore eu fugiat
    nulla pariatur.`,
    zIndex: 0,
  },
  argTypes: {
    onCardEnter: { action: 'Entered' },
    onCardLeave: { action: 'Left' },
  },
} as Meta;

const Template: Story<TiltCardProps> = (args) => (
  <Parent>
    <TiltCard {...args} />
  </Parent>
);

export const Basic = Template.bind({});
