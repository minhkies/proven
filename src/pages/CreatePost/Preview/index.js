import React,{useState} from "react";
import Header from "../../../comps/Header";
import FormContainer from "../../../comps/FormContainer";
import PreviewInfoDisplay from "../../../comps/PreviewInfoDisplay";
import InputField from "../../../comps/InputField";
import 'simplebar/dist/simplebar.min.css';
import CategoryBtn from "../../../comps/CategoryBtn";
import BottomBtnBar from "../../../comps/BottomBtnBar";


export default function Preview({value, setValue, setNextStep, completedStep, setCompletedStep, stepRefresh, setStepRefresh}) {
    let currentData;
    if(sessionStorage.getItem("currentData")) {
        currentData = JSON.parse(sessionStorage.getItem("currentData"));
        return (<div className={"preview-container"}>
            <Header
                headingTxt={"Project Overview"}
                subTxt={"Please review project posting. Click the ‘edit’ icon to make any changes."}
                marginTop={false}
            />
            <FormContainer formHeading={"Project Details"} col={3}>
                <div className={"preview-details-container"}>
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
            </FormContainer>
            {currentData.phases.map((o,i)=>{
                return(
                    <FormContainer formHeading={"Phase Details"} col={3}>
                        <div className={"preview-phases-container"}>
                            <PreviewInfoDisplay
                                title={"Phase Name"}
                                content={o.details}
                                marginTop={false}
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
                                <div className={"scope-container"}></div>
                            </div>
                            <div className={"preview-category-container"}>
                                <p className={"preview-heading"}>
                                    Category
                                </p>
                                <div className={"category-container"}></div>
                            </div>

                        </div>
                    </FormContainer>
                    )

            })}

        </div>)
    }


}
