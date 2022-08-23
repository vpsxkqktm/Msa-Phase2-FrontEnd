import React from 'react';
import  RockImg  from '../img/r.png';
import  PaperImg  from '../img/p.png';
import  SciImg  from '../img/s.png';
import { Image } from "../components/Image";
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    title: 'Image',
    component : Image,
}as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args) => <Image {...args} />;

export const Rock = Template.bind({});

Rock.args = {
    src : RockImg,
};

export const Paper = Template.bind({});

Paper.args = {
    src : PaperImg,
};

export const Scissors = Template.bind({});

Scissors.args = {
    src : SciImg,
};