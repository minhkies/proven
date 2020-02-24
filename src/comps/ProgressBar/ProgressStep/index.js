import React from 'react';
import {Link,BrowserRouter} from 'react-router-dom';
export default function ProgressStep({status, stepTxt, path, firstStep, order, setStatus, currentStep, setCurrentStep}) {
    return(
     <BrowserRouter>
        <Link to={path} className={"step-container"} onClick={(e)=>{
            if (status[order-1]!==false){
                setCurrentStep(order+1);
            } else {
                e.preventDefault();
            }

        }}>
            {!firstStep&&<div className={"line" + " " + "line-" + (status[order]?"completed":"incomplete")}/>}
            <div className={stepTxt + " " + "step-circle" + " " + "step-circle-" + (status[order]?((currentStep-1===order)?"current":"completed"):((currentStep-1===order)?"current":"incomplete"))}/>
            <p className={"step-name" + " " + "step-name-" + (status[order]?((currentStep-1===order)?"current":"completed"):((currentStep-1===order)?"current":"incomplete"))}>{stepTxt}</p>
        </Link>
           </BrowserRouter>
    )
}

ProgressStep.defaultProps = {
    status: "incomplete",
    stepTxt: "Progress 1",
    firstStep: true
};

