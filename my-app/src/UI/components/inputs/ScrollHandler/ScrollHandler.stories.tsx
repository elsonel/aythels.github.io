import { Meta, Story } from '@storybook/react';
import styled from 'styled-components';
import { ScrollHandler, ScrollHandlerProps } from './ScrollHandler';

const Box = styled.div`
  width: 100px;
  height: 100px;
  background: pink;
  overflow-y: auto;
`;

export default {
  title: 'Inputs/ScrollHandler',
  component: ScrollHandler,
  args: {
    onDown: () => console.log('down'),
    onUp: () => console.log('up'),
    onScrollWindow: () => console.log('scrolled'),
    children: (
      <Box>
        Foasfioa sfjioassfioafi oasfiojasf ioajfoasjfoisj afiojaiof saiofaiofios
      </Box>
    ),
  },
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story<ScrollHandlerProps> = (args) => (
  <ScrollHandler {...args} />
);

export const Basic = Template.bind({});

export const NoOverflow = Template.bind({});
NoOverflow.args = {
  ...NoOverflow.args,
  children: <Box />,
};
