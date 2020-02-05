import React from 'react';

export default function ProgressStep({status, stepTxt, firstStep, order, setStatus, currentStep, setCurrentStep}) {
    return(
        <div className={"step-container"} onClick={()=>{
            if (status[order-1]!==false){
                setCurrentStep(order+1);
            }

        }}>
            {!firstStep&&<div className={"line" + " " + "line-" + (status[order]?"completed":"incomplete")}/>}
            <div className={"step-circle" + " " + "step-circle-" + (status[order]?((currentStep-1===order)?"current":"completed"):((currentStep-1===order)?"current":"incomplete"))}/>
            <p className={"step-name" + " " + "step-name-" + (status[order]?((currentStep-1===order)?"current":"completed"):((currentStep-1===order)?"current":"incomplete"))}>{stepTxt}</p>
        </div>
    )
}

ProgressStep.defaultProps = {
    status: "incomplete",
    stepTxt: "Progress 1",
    firstStep: true
};

