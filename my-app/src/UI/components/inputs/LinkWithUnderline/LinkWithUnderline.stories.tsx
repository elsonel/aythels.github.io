import { Meta, Story } from '@storybook/react';
import styled from 'styled-components';
import { Paragraph } from '../../text/Paragraph/Paragraph';
import { LinkWithUnderline, LinkWithUnderlineProps } from './LinkWithUnderline';

const Text = styled(Paragraph)`
  letter-spacing: ${({ theme }) => theme.font.default.letterSpacing.button};
  overflow-wrap: normal;
`;

export default {
  title: 'Inputs/LinkWithUnderline',
  component: LinkWithUnderline,
  args: {
    linkProps: {
      href: 'https://github.com/',
    },
    textProps: {
      size: 'h4',
    },
    color: 'black',
    children: <Text>PROTOTYPE</Text>,
  },
} as Meta;

const Template: Story<LinkWithUnderlineProps> = (args) => (
  <LinkWithUnderline {...args} />
);

export const Basic = Template.bind({});
