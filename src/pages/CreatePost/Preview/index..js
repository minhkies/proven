import React,{useState} from "react";
import Header from "../../../comps/Header";
import FormContainer from "../../../comps/FormContainer";
import InputField from "../../../comps/InputField";
import 'simplebar/dist/simplebar.min.css';
import CategoryBtn from "../../../comps/CategoryBtn";
import BottomBtnBar from "../../../comps/BottomBtnBar";
export default function Preview({value, setValue, setNextStep, completedStep, setCompletedStep, stepRefresh, setStepRefresh}) {
    let currentInp = {
        name: null,
        contactName: null,
        contactPos: null,
        tel: null,
        cell: null,
        email: null,
        website: null,
        address1: null,
        address2: null,
        city: null,
        province: null,
        zip: null,
        category: []
    };
    let categoryList = [
        {
        name: "Abatement (Asbetos, Lead, Silica)",
        },{
        name: "Asphalt"
        },{
        name: "Communications Systems"
        },{
        name: "Demolition"
        },{
        name: "Doors"
        },{
        name: "Electrical"
        },{
        name: "Fencing"
        },{
        name: "Flooring"
        },{
        name: "General Contracting"
        },{
        name: "Handicap Accessibility"
        },{
        name: "HVAC/ Mechanical"
        },{
        name: "Interior Renovation"
        },{
        name: "Janitorial"
        },{
        name: "Landscaping"
        },{
        name: "Life Safety/ Fire Protection"
        },{
        name: "Painting"
        },{
        name: "Pest Control"
        },{
        name: "Plumbing"
        },{
        name: "Roofing"
        },{
        name: "Security"
        },{
        name: "Snow Removal"
        },{
        name: "Walls/ Foundations"
        },{
        name: "Waste Disposal/ Recycling"
        },{
        name: "Window Replacement/ Repair"
        },
    ];
    return <div className={"preview-container"}>
        <Header 
         headingTxt={"Project Overview"}
         subTxt={"Please review project posting. Click the ‘edit’ icon to make any changes."}
         marginTop={false}
        />
        <FormContainer formHeading={"Project Details"}>
        <div className={"input-container"}>
                <InputField
                    title="Project Name"
                    placeholder="Ex:OP"
                    width="100%"
                    marginTop={false}
                />
                <div className={"horizontal-input"}>
                    <InputField
                        title="Name of Contact Person"
                        placeholder="Ex: John Smith"
                        width="100%"
                    />
                </div> 
                <InputField
                        title="Description"
                        placeholder="Ex: This is Description"
                        width="100%"
                        paddingBottom="120px"
                    />
                </div>
        </FormContainer>
    </div>
}
