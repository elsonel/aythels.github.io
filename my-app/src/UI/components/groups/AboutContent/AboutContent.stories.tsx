import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Frame } from '../../atoms/Frame/Frame';
import { FrameLayout } from '../../layout/FrameLayout/FrameLayout';
import { HeaderOverlay } from '../HeaderOverlay/HeaderOverlay';
import { AboutContent, IAboutContentProps } from './AboutContent';

export default {
  title: 'Groups/AboutContent',
  component: AboutContent,
  args: {},
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story<IAboutContentProps> = (args) => (
  <AboutContent {...args} />
);

export const Basic = Template.bind({});

const WithFrameTemplate: Story<IAboutContentProps> = (args) => (
  <>
    <FrameLayout>
      <AboutContent {...args} />
    </FrameLayout>
    <Frame />
    <HeaderOverlay
      iconTab={{
        href: '/',
      }}
      tabs={[
        {
          label: 'PROJECTS',
          href: '/',
          isActive: true,
        },
        {
          label: 'ABOUT',
          href: '/',
          isActive: false,
        },
      ]}
    />
  </>
);
export const WithFrame = WithFrameTemplate.bind({});
