import React, {useState, useEffect} from 'react';
import ProgressStep from "./ProgressStep";
import "../font.scss"

export default function ProgressBar({progressStep, completedStep, currentStep}) {
    let [status, setStatus] = useState([]);
    let [cStep, setCStep] = useState(currentStep);
    useEffect(()=>{
        let defaultStatus = [];
        for (let i=0; i < completedStep.length; i++){
            defaultStatus[completedStep[i]-1] = true
        }
        for (let i=0; i < progressStep.length; i++){
            if (defaultStatus[i] == null ){
                defaultStatus[i]=false
            }
        }
        setStatus(defaultStatus);
    },[]);
    return(
        <div className={"progress-bar-container"}>
            <div className={"progress-bar"}>
                {progressStep.map((o, i) => {
                    return <ProgressStep
                        {...o}
                        firstStep = {i === 0}
                        status = {status}
                        setStatus={setStatus}
                        currentStep = {cStep}
                        setCurrentStep={setCStep}
                        order = {i}
                    />
                })}
            </div>
            <div className={"btn-back-container"} onClick={()=>{
                setCStep(cStep-1);
            }}>
                <img src={require("../../media/img/back-btn.png")} alt={"Back Btn"} className={"img-back-btn"}/>
                <p>Back</p>
            </div>
        </div>
    )
}

ProgressBar.defaultProps = {
    progressStep: [{
        stepTxt: "Step 1"
    }, {
        stepTxt: "Step 2"}
    ],
    currentStep: 1,
    completedStep: []
};
