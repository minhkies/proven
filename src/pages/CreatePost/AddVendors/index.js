import React,{useState} from "react";
import Header from "../../../comps/Header";
import FormContainer from "../../../comps/FormContainer";
import InputField from "../../../comps/InputField";
import 'simplebar/dist/simplebar.min.css';
import CategoryBtn from "../../../comps/CategoryBtn";
import BottomBtnBar from "../../../comps/BottomBtnBar";


export default function AddVendors({value, setValue, setNextStep, completedStep, setCompletedStep, stepRefresh, setStepRefresh}) {
    let [refresh, setRefresh] = useState(true);
    // const writeJsonFile = require('write-json-file');

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

    return <div className={"add-vendors-container"} key={refresh}>
        <Header
            headingTxt={"Add Company Vendors"}
            subTxt={"Complete vendor details below. Click 'Add New Vendor' to add to vendor list."}
            marginTop={false}
        />
        <FormContainer
            formHeading={"Vendor Details"}
        >
            <div className={"input-container"}>
                <InputField
                    title="Company Name"
                    placeholder="Ex: FirstOnSite"
                    width="100%"
                    star={true}
                    marginTop={false}
                    onChange={(e)=>{currentInp.name=e.target.value}}
                />
                <div className={"horizontal-input"}>
                    <InputField
                        title="Name of Contact Person"
                        placeholder="Ex: John Smith"
                        width="100%"
                        star={true}
                        onChange={(e)=>{currentInp.contactName=e.target.value}}
                    />
                    <InputField
                        title="Position of Contact Person"
                        placeholder="Ex: Manager Assistant"
                        width="100%"
                        onChange={(e)=>{currentInp.contactPos=e.target.value}}
                    />
                </div>
                <div className={"horizontal-input"}>
                    <InputField
                        title="Telephone Number"
                        placeholder="(___) ___ - ____"
                        width="100%"
                        star={true}
                        number={true}
                        onChange={(e)=>{currentInp.tel=e.target.value}}
                    />
                    <InputField
                        title="Cellphone Number"
                        placeholder="(___) ___ - ___"
                        width="100%"
                        number={true}
                        onChange={(e)=>{currentInp.cell=e.target.value}}
                    />
                </div>
                <InputField
                    title="Email"
                    placeholder="Ex: hleung@company.com"
                    width="100%"
                    star={true}
                    onChange={(e)=>{currentInp.email=e.target.value}}
                />
                <InputField
                    title="Website (Optional)"
                    placeholder="Ex: company.com"
                    width="100%"
                    onChange={(e)=>{currentInp.website=e.target.value}}
                />
            </div>
        </FormContainer>
        <FormContainer
            formHeading={"Mailing Address"}
        >
            <div className={"input-container"}>
                <InputField
                    title="Address Line 1"
                    placeholder="Ex: 3700 Willingdon Ave"
                    width="100%"
                    star={true}
                    marginTop={false}
                    onChange={(e)=>{currentInp.address1=e.target.value}}
                />
                <InputField
                    title="Address Line 2"
                    placeholder="Ex: Building SE14 Room 112"
                    width="100%"
                    onChange={(e)=>{currentInp.name=e.target.value}}
                />
                <div className={"horizontal-input-3"}>
                    <InputField
                        title="City"
                        placeholder="Ex: Burnaby"
                        width="100%"
                        star={true}
                        onChange={(e)=>{currentInp.address2=e.target.value}}
                    />
                    <InputField
                        title="Province"
                        placeholder="Ex: BC"
                        width="100%"
                        star={true}
                        onChange={(e)=>{currentInp.province=e.target.value}}
                    />
                    <InputField
                        title="Postal Code"
                        placeholder="Ex: V5G 3H2"
                        width="100%"
                        star={true}
                        onChange={(e)=>{currentInp.zip=e.target.value}}
                    />
                </div>
            </div>
        </FormContainer>
        <FormContainer
            col={1}
            formHeading={"Category"}
            formSub={"Please select the type of service(s) or scope of work for which this vendor is pre-qualifying:"}
            star={true}
        >
            <div className={"category-container"}>
                {categoryList.map((o,i)=>{
                    return(
                        <CategoryBtn
                            name={o.name}
                            onclick={currentInp.category}
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
            leftBtnTxt = {"Add New Vendor"}
            leftBtnOnClick={()=>{
                setValue(value.concat(currentInp));
                setRefresh(!refresh);
            }}
            rightBtn1Txt = {"Cancel"}
            rightBtn2Txt = {"Next Step"}
            rightBtn2OnClick={async () => {
                // await writeJsonFile('../../../data/currentData.json', {vendors: value});
                setNextStep(2);
                setCompletedStep(completedStep.concat(1));
                setStepRefresh(!stepRefresh);
                sessionStorage.setItem('currentData', JSON.stringify({vendors: value}));
                setValue([]);
                // const handleSaveToPC = jsonData => {
                //     const fileData = JSON.stringify(jsonData);
                //     const blob = new Blob([fileData], {type: "text/plain"});
                //     const url = URL.createObjectURL(blob);
                //     const link = document.createElement('a');
                //     // link.download = 'filename.json';
                //     link.href = url;
                //     link.click();
                //     console.log(link.href);
                // };
                // handleSaveToPC({vendors: value})
            }}
            nextStep={"./AddProjectDetails"}
        />
    </div>
}
