import { Meta, Story } from '@storybook/react';
import { Frame } from '../../atoms/Frame/Frame';
import { FrameLayout } from '../../layout/FrameLayout/FrameLayout';
import { HeaderOverlay } from '../HeaderOverlay/HeaderOverlay';
import { MainPage, IMainPageProps } from './MainPage';

export default {
  title: 'Groups/MainPage',
  component: MainPage,
  args: {},
} as Meta;

const Template: Story<IMainPageProps> = (args) => <MainPage {...args} />;

export const Basic = Template.bind({});

const WithFrameTemplate: Story<IMainPageProps> = (args) => (
  <>
    <FrameLayout>
      <MainPage {...args} />
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
