import React from 'react';
import ProgressBar from "../comps/ProgressBar";
import "../App.scss";

export default {
    title: 'Progress Bar',
    component: ProgressBar
}

export const defaultProgressBar = () => {
    return <ProgressBar/>
};

let progressStep = [
    {
        stepTxt: "Vendors",
    },
    {
        stepTxt: "Project",
    },
    {
        stepTxt: "Phases",
    },
    {
        stepTxt: "Preview",
    }

];

export const ProgressBarWData = () => {
    return <ProgressBar
        progressStep={progressStep}
    />
};

export const ProgressBarWDataNProgress = () => {
    return <ProgressBar
        progressStep={progressStep}
        completedStep={[1,2]}
        currentStep={3}
    />
};
