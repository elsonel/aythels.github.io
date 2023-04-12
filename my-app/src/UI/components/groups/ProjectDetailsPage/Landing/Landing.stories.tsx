import { Meta, Story } from '@storybook/react';
import styled from 'styled-components';
import { Theme } from '../../../../utility/themes/Theme';
import { FrameLayoutHorizontal } from '../../../layout/FrameLayoutHorizontal/FrameLayoutHorizontal';
import { Title } from '../Title/Title';
import { Landing, LandingProps } from './Landing';

const BackTextWrapper = styled.div`
  position: fixed;
  top: ${({ theme }) => theme.size.headerHeight + 'px'};
  left: 0px;
  width: 100%;
`;

export default {
  title: 'Groups/ProjectDetailsPage/Landing',
  component: Landing,
  argTypes: { onImageLoad: { action: 'Image loaded' } },
  args: {
    isTextLoaded: true,
    title: 'KINETIC BOARDWALK',
    subtitle: 'Drifting Landscapes',
    imageSrc: Theme.image.exampleSquareSmall,
    prototypeHref: '/',
    scrollLength: 1000,
  },
} as Meta;

const Template: Story<LandingProps> = (args) => (
  <>
    <BackTextWrapper>
      <FrameLayoutHorizontal>
        <Title>{args.title}</Title>
      </FrameLayoutHorizontal>
    </BackTextWrapper>
    <Landing {...args} />
  </>
);

export const Basic = Template.bind({});
