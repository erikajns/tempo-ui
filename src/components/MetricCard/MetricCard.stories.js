import React from 'react';
import MetricCard from './MetricCard';

export default {
  title: 'Components/MetricCard',
  component: MetricCard,
  tags: ['autodocs'],
};

const Template = (args) => <MetricCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Average check size',
  percentageChange: '+5%',
  valueFrom: '$86',
  valueTo: '$92',
};

export const NegativeChange = Template.bind({});
NegativeChange.args = {
  title: 'Average check size',
  percentageChange: '-5%',
  valueFrom: '$92',
  valueTo: '$86',
};
