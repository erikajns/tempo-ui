import React from 'react';
import CustomTextButton from './CustomTextButton';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import GroupIcon from '@mui/icons-material/Group';
import AddIcon from '@mui/icons-material/Add';

export default {
  title: 'Components/CustomTextButton',
  component: CustomTextButton,
  tags: ['autodocs'],
};

const Template = (args) => <CustomTextButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Default Button',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  text: 'With Icon',
  icon: CalendarTodayIcon,
};

export const MultipleExamples = () => (
  <>
    <CustomTextButton text="Azure Table" icon={GroupIcon} />
    <CustomTextButton text="Feb 4 - 10, 2024" icon={CalendarTodayIcon} />
    <CustomTextButton text="All shifts" icon={GroupIcon} />
    <CustomTextButton text="Group by assignment" icon={GroupIcon} />
    <CustomTextButton text="Shift" icon={AddIcon} />
  </>
);
