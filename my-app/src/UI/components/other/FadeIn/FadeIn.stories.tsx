import { Meta, Story } from '@storybook/react';
import { Paragraph } from '../../text/Paragraph/Paragraph';
import { FadeIn, FadeInProps } from './FadeIn';

export default {
  title: 'Other/FadeIn',
  component: FadeIn,
  args: {
    children: (
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Paragraph>
    ),
    delay: 0,
    offset: 10,
    isLoaded: true,
  },
} as Meta;

const Template: Story<FadeInProps> = (args) => <FadeIn {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  ...Basic.args,
};
