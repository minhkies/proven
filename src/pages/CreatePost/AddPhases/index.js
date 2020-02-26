import React, {useState} from "react";
import Header from "../../../comps/Header";
import FormContainer from "../../../comps/FormContainer";
import InputField from "../../../comps/InputField";
import 'simplebar/dist/simplebar.min.css';
import CategoryBtn from "../../../comps/CategoryBtn";
import BottomBtnBar from "../../../comps/BottomBtnBar";

export default function AddPhases({value, setValue, setNextStep, completedStep, setCompletedStep, setStepRefresh, StepRefresh, phaseVendors, setPhaseVendors}) {
    let [refresh, setRefresh] = useState(true);
    let [scope, setScope] = useState([]);
    let currentInp = {
        details: null,
        poNumber: null,
        budget: null,
        bidDeadline: null,
        startDate: null,
        endDate: null,
        scope: null,
        category: []
    };
    let categoryList = [
        {
            name: "Abatement (Asbetos, Lead, Silica)",
        }, {
            name: "Asphalt"
        }, {
            name: "Communications Systems"
        }, {
            name: "Demolition"
        }, {
            name: "Doors"
        }, {
            name: "Electrical"
        }, {
            name: "Fencing"
        }, {
            name: "Flooring"
        }, {
            name: "General Contracting"
        }, {
            name: "Handicap Accessibility"
        }, {
            name: "HVAC/ Mechanical"
        }, {
            name: "Interior Renovation"
        }, {
            name: "Janitorial"
        }, {
            name: "Landscaping"
        }, {
            name: "Life Safety/ Fire Protection"
        }, {
            name: "Painting"
        }, {
            name: "Pest Control"
        }, {
            name: "Plumbing"
        }, {
            name: "Roofing"
        }, {
            name: "Security"
        }, {
            name: "Snow Removal"
        }, {
            name: "Walls/ Foundations"
        }, {
            name: "Waste Disposal/ Recycling"
        }, {
            name: "Window Replacement/ Repair"
        },
    ];

    return <div className={'add-phases-container'} key={refresh}>
        <Header
            headingTxt={"Add Project Phases"}
            subTxt={"Complete phase details below. Click the appropriate service to contact proper vendors."}
            marginTop={false}
        />
        <FormContainer formHeading={"Phase Details"}>
            <div className={"input-container"}>
                <InputField
                    title="Phase Name"
                    placeholder="Ex. PO"
                    width="100%"
                    star={true}
                    onChange={(e) => {
                        currentInp.details = e.target.value;
                    }}
                />
                <InputField
                    title="PO Number"
                    placeholder="Ex. BY19 - LH204"
                    width="100%"
                    star={true}
                    onChange={(e) => {
                        currentInp.poNumber = e.target.value
                    }}
                />
                <div className={"horizontal-input"}>
                    <InputField
                        title="Budget"
                        placeholder="Ex. $2,500"
                        width="100%"
                        star={true}
                        number={true}
                        onChange={(e) => {
                            currentInp.budget = e.target.value
                        }}
                    />
                    <InputField
                        title="Bid Deadline"
                        placeholder="Select Date"
                        width="100%"
                        star={true}
                        onChange={(e) => {
                            currentInp.bidDeadline = e.target.value
                        }}
                    />
                </div>
                <div className={"horizontal-input"}>
                    <InputField
                        title="Phase Start Date"
                        placeholder="Select Date"
                        width="100%"
                        star={true}
                        onChange={(e) => {
                            currentInp.startDate = e.target.value
                        }}
                    />
                    <InputField
                        title="Phase End Date"
                        placeholder="Select Date"
                        width="100%"
                        star={true}
                        onChange={(e) => {
                            currentInp.endDate = e.target.value
                        }}
                    />
                </div>
                <InputField
                    title="Scope of Phase"
                    placeholder="Select Date"
                    width="100%"
                    star={true}
                    addButton={true}
                    onChange={(e) => {
                        console.log("hihihi", currentInp);
                    }}
                    onClick={setScope}
                    scope={scope}
                />
                <div className={"scope-container"}>
                    {console.log("hahahaha", scope)}
                    {scope.map((o,i)=>{
                        return <CategoryBtn
                            type={"other"}
                            name={o}
                        />
                    })}
                </div>
            </div>
        </FormContainer>
        <FormContainer
            col={1}
            formHeading={"Category"}
            formSub={"Please select the type of service(s) or scope of work for which you are pre-qualifying:"}
            star={true}
        >
            <div className={"category-container"}>
                {categoryList.map((o, i) => {
                    return (
                        <CategoryBtn
                            name={o.name}
                            onclick={setPhaseVendors}
                            phaseVendors={phaseVendors}
                        />
                    )

                })}
            </div>

            <p className={"other-header"}>
                If "Other", please specify type of service(s) offered or provided:
            </p>
            <InputField
                addButton={true}
            />
        </FormContainer>
        <BottomBtnBar
            leftBtnTxt={"Add New Phase"}
            leftBtnOnClick={() => {
                currentInp.scope=scope;
                setValue(value.concat(currentInp));
                setRefresh(!refresh);
                setPhaseVendors([]);
                setStepRefresh(!setRefresh);
                setScope([].concat([]));
            }}
            rightBtn1Txt={"Cancel"}
            rightBtn2Txt={"Next Step"}
            rightBtn2OnClick={() => {
                setNextStep(4);
                setCompletedStep(completedStep.concat(3));
                setStepRefresh(!setRefresh);
                let currentData = JSON.parse(sessionStorage.getItem("currentData"));
                currentData.phases = value;
                sessionStorage.setItem("currentData", JSON.stringify(currentData));
            }}
            nextStep={"./Preview"}
        />
    </div>
}
