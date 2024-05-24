import React from 'react';
import MetricManager from './MetricManager';

export default {
  title: 'Components/MetricManager',
  component: MetricManager,
  tags: ['autodocs'],
};

const Template = (args) => <MetricManager {...args} />;

export const Default = Template.bind({});
Default.args = {};
