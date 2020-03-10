import React from "react";
import Header from "../../../comps/Header";
import 'simplebar/dist/simplebar.min.css';
import FormContainer from "../../../comps/FormContainer";
import InputField from "../../../comps/InputField";
import BottomBtnBar from "../../../comps/BottomBtnBar";

export default function AddProjectDetails({setNextStep, completedStep, setCompletedStep, stepRefresh, setStepRefresh}) {
    let currentInp = {
        name:null,
        projectId:null,
        description:null
    };
    return <div className={"add-project-details-container"}>
        <Header
            headingTxt={"Add Project Details"}
            subTxt={"Complete project details below to start a new project."}
            marginTop={false}
        />
        <FormContainer formHeading={"Project Details"} >
        <div className={"input-container"}>
                    <InputField
                        title="Project Name"
                        placeholder="Ex. 3700 Willingdon - BCIT"
                        width="100%"
                        star="true"
                        onChange={(e)=>{currentInp.name=e.target.value}}
                    />
                    <div className={"horizontal-input"}>
                    <InputField
                        title="Project ID"
                        placeholder="Ex. BY19 - LH204"
                        width="100%"
                        star="true"
                        onChange={(e)=>{currentInp.projectId=e.target.value}}
                    />
                    </div>
                        <InputField
                        paddingBottom="120px"
                        title="Description"
                        placeholder="Enter your project's description"
                        star="true"
                        width="100%"
                        onChange={(e)=>{currentInp.description=e.target.value}}
                    />
                    </div>
        </FormContainer>
        <BottomBtnBar
            rightBtn1Txt = {"Cancel"}
            rightBtn2Txt = {"Next Step"}
            rightBtn2OnClick={()=>{
                let tempData = JSON.parse(sessionStorage.getItem("currentData"));
                tempData.projectDetails = currentInp;
                sessionStorage.setItem("currentData", JSON.stringify(tempData));
                setNextStep(3);
                setCompletedStep(completedStep.concat(2));
                setStepRefresh(!stepRefresh);
            }}
            nextStep={"./AddPhases"}
        />

    </div>;
}
