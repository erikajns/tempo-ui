import React, { useEffect, useState } from 'react';
import ShiftDaySelection from './FormSteps/ShiftDaySelection';
import ShiftTypeSelection from './FormSteps/ShiftTypeSelection';
import UnassignedShiftDetails from '../UnassignedShiftDetails/UnassignedShiftDetails';
import AssignedShiftDetails from '../AssignedShiftDetails/AssignedShiftDetails';

const AddShiftForm = ({ onClose, onSave }) => {
    const [step, setStep] = useState(1);
    const [day, setDay] = useState(null);
    const [type, setType] = useState(null);
    const [assigned, setAssigned] = useState(false);

    // Reset the form when closed
    useEffect(() => {
        if (!onClose) {
            resetForm();
        }
    }, [onClose]);

    const resetForm = () => {
        setStep(1);
        setDay(null);
        setType(null);
        setAssigned(false);
    };

    const handleDaySelect = (selectedDay) => {
        setDay(selectedDay);
        setStep(2);
    };

    const handleTypeSelect = (selectedType) => {
        setType(selectedType);
        setStep(3);
    };

    const handleAssign = () => {
        setAssigned(true);
        setStep(4);

        // Call onSave when the shift is ready to be saved to the unassigned shifts
        onSave({
            day,
            type,
            start: '8:00 AM',
            break: '30min',
            end: '5:00 PM',
        });
    };

    return (
        <>
            {step === 1 && <ShiftDaySelection onSelect={handleDaySelect} />}
            {step === 2 && <ShiftTypeSelection onSelect={handleTypeSelect} />}
            {step === 3 && (
                <UnassignedShiftDetails
                    onAssign={handleAssign}
                    shiftType={type}
                    day={day}
                />
            )}
            {step === 4 && <AssignedShiftDetails shiftType={type} />}
        </>
    );
};

export default AddShiftForm;
