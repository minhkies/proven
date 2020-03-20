import React, {useState, useEffect} from "react";
import Header from "../../../comps/Header";
import FormContainer from "../../../comps/FormContainer";
import PreviewInfoDisplay from "../../../comps/PreviewInfoDisplay";
import InputField from "../../../comps/InputField";
import 'simplebar/dist/simplebar.min.css';
import CategoryBtn from "../../../comps/CategoryBtn";
import BottomBtnBar from "../../../comps/BottomBtnBar";


export default function Preview({value, setValue, setNextStep, completedStep, setCompletedStep, stepRefresh, setStepRefresh}) {
    let currentData;
    let [edit, setEdit] = useState([]);
    let [projectEdit, setProjectEdit] = useState([false]);

    useEffect(()=>{
        currentData = JSON.parse(sessionStorage.getItem("currentData"));
        let tempArr=[];
        for (let i = 0; i < currentData.phases.length; i++) {
            tempArr.push(false)
        }
        setEdit([].concat(tempArr));
    },[]);

    if (sessionStorage.getItem("currentData")) {
        currentData = JSON.parse(sessionStorage.getItem("currentData"));
        return (
            <div className={"preview-container"}>
                <Header
                    headingTxt={"Project Overview"}
                    subTxt={"Please review project posting. Click the ‘edit’ icon to make any changes."}
                    marginTop={false}
                />
                <FormContainer
                    formHeading={"Project Details"}
                    col={3}
                    onclick={setProjectEdit}
                    edit={projectEdit}
                    pos={0}
                    key={0}
                >
                    {projectEdit[0]?
                        <div className={"preview-details-container"}>
                            <InputField
                                title={"Project Name"}
                                placeholder={currentData.projectDetails.name}
                                marginTop={false}
                            />
                            <InputField
                                title={"Project ID"}
                                placeholder={currentData.projectDetails.projectId}
                            />
                            <InputField
                                title={"Project Description"}
                                placeholder={currentData.projectDetails.description}
                            />
                        </div> : <div className={"preview-details-container"}>
                            <PreviewInfoDisplay
                                title={"Project Name"}
                                content={currentData.projectDetails.name}
                                marginTop={false}
                            /><PreviewInfoDisplay
                            title={"Project ID"}
                            content={currentData.projectDetails.projectId}
                        /><PreviewInfoDisplay
                            title={"Description"}
                            content={currentData.projectDetails.description}
                        />
                        </div>
                    }
                </FormContainer>
                {currentData.phases.map((o, i) => {
                    return (
                        <FormContainer
                            formHeading={"Phase Details"}
                            col={3}
                            onclick={setEdit}
                            edit={edit}
                            pos={i}
                            key={i}
                        >
                            {edit[i]?<div className={"preview-phases-container"}>
                                <InputField
                                    title={"Phase Name"}
                                    placeholder={o.details}
                                    marginTop={false}
                                />
                                <InputField
                                    title={"PO Number"}
                                    placeholder={o.poNumber}
                                />
                                <div className={"preview-phase-grid-4"}>
                                    <InputField
                                        title={"Budget"}
                                        placeholder={o.budget}
                                    />
                                    <InputField
                                        title={"Bid deadline"}
                                        placeholder={o.bidDeadline}
                                    />
                                    <InputField
                                        title={"Start"}
                                        placeholder={o.startDate}
                                    />
                                    <InputField
                                        title={"End Date"}
                                        placeholder={o.endDate}
                                    />
                                </div>
                                </div> : <div className={"preview-phases-container"}>
                                <PreviewInfoDisplay
                                title={"Phase Name"}
                                content={o.details}
                                marginTop={false}
                                edit={edit[i]}
                                />
                                <PreviewInfoDisplay
                                title={"PO Number"}
                                content={o.poNumber}
                                />
                                <div className={"preview-phase-grid-4"}>
                                <PreviewInfoDisplay
                                title={"Budget"}
                                content={o.budget}
                                />
                                <PreviewInfoDisplay
                                title={"Bid Deadline"}
                                content={o.bidDeadline}
                                />
                                <PreviewInfoDisplay
                                title={"Start Date"}
                                content={o.startDate}
                                />
                                <PreviewInfoDisplay
                                title={"End Date"}
                                content={o.endDate}
                                />
                                </div>
                                <div className={"preview-scope-container"}>
                                <p className={"preview-heading"}>
                                Scope of Phase
                                </p>
                                <div className={"scope-container"}>
                                {o.scope.map((x, i) => {
                                    return <CategoryBtn
                                        type={"view"}
                                        name={x}
                                    />
                                })}
                                </div>
                                </div>
                                <div className={"preview-category-container"}>
                                <p className={"preview-heading"}>
                                Category
                                </p>
                                <div className={"category-container"}>
                                {o.category.map((x, i) => {
                                    return <CategoryBtn
                                        type={"view"}
                                        name={x}
                                    />
                                })}
                                </div>
                                </div>
                                </div>
                            }
                        </FormContainer>
                    )
                })}
                <BottomBtnBar
                    rightBtn1Txt={"Cancel"}
                    rightBtn2Txt={"Post Project"}
                    rightBtn2OnClick={() => {
                        let projects = [];
                        // setNextStep(4);
                        // setCompletedStep(completedStep.concat(3));
                        // setStepRefresh(!setRefresh);
                        // let currentData = JSON.parse(sessionStorage.getItem("currentData"));
                        // currentData.phases = value;
                        // sessionStorage.setItem("currentData", JSON.stringify(currentData));
                        let currentData = JSON.parse(sessionStorage.getItem("currentData"));
                        currentData.projectDetails.phases = currentData.phases;
                        localStorage.setItem("vendors", JSON.stringify(currentData.vendors));
                        if (localStorage.getItem("projects")!==null){
                            projects = JSON.parse(localStorage.getItem("projects"));
                        }
                        projects.push(currentData.projectDetails);
                        localStorage.setItem("projects", JSON.stringify(projects));
                        localStorage.setItem("profile", JSON.stringify({name: "Lawrence", tier: 1, trial: true}))
                    }}
                    nextStep={"./Preview"}
                />
            </div>
        )
    }
}
