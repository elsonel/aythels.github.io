import { Meta, Story } from '@storybook/react';
import { ChipList, ChipListProps } from './ChipList';
import { DesignServices } from '@styled-icons/material/DesignServices';
import { Chip } from '../Chip/Chip';

export default {
    title: 'Other/ChipList',
    component: ChipList,
    args: {},
} as Meta;

const Template: Story<ChipListProps> = (args) => <ChipList {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  ...Basic.args,
  children: [
    <Chip icon={<DesignServices/>} label="PAINTING"/>,
    <Chip icon={<DesignServices/>} label="GRAPHIC DESIGN"/>,
    <Chip icon={<DesignServices/>} label="UI/UX DESIGN"/>,
    <Chip icon={<DesignServices/>} label="PHOTO MANIPULATION"/>,
    <Chip icon={<DesignServices/>} label="RENDERING"/>,
    <Chip icon={<DesignServices/>} label="ARCHITECTURE"/>,
    <Chip icon={<DesignServices/>} label="3D MODELING"/>,
    <Chip icon={<DesignServices/>} label="RIGGING"/>,
  ],
}

export const NoMargin = Template.bind({});
NoMargin.args = {
  ...NoMargin.args,
  children: [
    <Chip icon={<DesignServices/>} label="PAINTING"/>,
    <Chip icon={<DesignServices/>} label="GRAPHIC DESIGN"/>,
    <Chip icon={<DesignServices/>} label="UI/UX DESIGN"/>,
    <Chip icon={<DesignServices/>} label="PHOTO MANIPULATION"/>,
    <Chip icon={<DesignServices/>} label="RENDERING"/>,
    <Chip icon={<DesignServices/>} label="ARCHITECTURE"/>,
    <Chip icon={<DesignServices/>} label="3D MODELING"/>,
    <Chip icon={<DesignServices/>} label="RIGGING"/>,
  ],
  marginTop: 0,
  marginLeft: 0,
}