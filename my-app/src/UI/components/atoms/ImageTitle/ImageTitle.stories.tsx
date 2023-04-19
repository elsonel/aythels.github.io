import { Meta, Story } from '@storybook/react';
import styled from 'styled-components';
import { Theme } from '../../../utilities/themes/Theme';
import { ImageTitle, ImageTitleProps } from './ImageTitle';

export default {
  title: 'Atoms/ImageTitle',
  component: ImageTitle,
  args: {
    title: 'SPOTLIGHT',
    subtitle: 'Media Streaming Platform',
    color: Theme.color.background,
    size: 'small',
  },
  argTypes: {},
} as Meta;

const Template: Story<ImageTitleProps> = (args) => <ImageTitle {...args} />;

export const Small = Template.bind({});

export const Medium = Template.bind({});
Medium.args = {
  ...Medium.args,
  size: 'medium',
};

export const NoSubtitle = Template.bind({});
NoSubtitle.args = {
  ...NoSubtitle.args,
  subtitle: undefined,
};

const Container = styled.div`
  width: 300px;
  height: 300px;
  background-color: lightgrey;
`;

const WithContainerTemplate: Story<ImageTitleProps> = (args) => (
  <Container>
    <ImageTitle {...args} />
  </Container>
);
export const WithContainer = WithContainerTemplate.bind({});
WithContainer.args = {
  ...WithContainer.args,
};
