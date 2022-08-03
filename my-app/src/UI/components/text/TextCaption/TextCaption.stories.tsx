import { Meta, Story } from '@storybook/react';
import { TextCaption, TextCaptionProps } from './TextCaption';

export default {
  title: 'Text/TextCaption',
  component: TextCaption,
  args: {
    children: 'This is an image caption.',
    size: 'medium',
  },
} as Meta;

const Template: Story<TextCaptionProps> = (args) => <TextCaption {...args} />;

export const Short = Template.bind({});
Short.args = {
  ...Short.args,
};

export const Long = Template.bind({});
Long.args = {
  ...Long.args,
  children:
    'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
};
