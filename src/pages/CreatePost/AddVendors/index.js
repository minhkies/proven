import React from "react";
import Header from "../../../comps/Header";
import FormContainer from "../../../comps/FormContainer";
import InputField from "../../../comps/InputField";
import SideBar from "../../../comps/SideBar";

export default function AddVendors() {
    return <div className={"add-vendors-container"}>
        <Header
            headingTxt={"Add Company Vendors"}
            subTxt={"Complete vendor details below. Click 'Add New Vendor' to add to vendor list."}
        />
        <FormContainer
            formHeading={"Vendor Details"}
        >
            <div className={"input-container"}>
                <InputField
                    title="Company Name"
                    placeholder="Ex: FirstOnSite"
                    width="100%"
                />
                <div className={"horizontal-input"}>
                    <InputField
                        title="Company Name"
                        placeholder="Ex: FirstOnSite"
                        width="100%"
                    />
                    <InputField
                        title="Company Name"
                        placeholder="Ex: FirstOnSite"
                        width="100%"
                    />
                </div>
                <div className={"horizontal-input"}>
                    <InputField
                        title="Company Name"
                        placeholder="Ex: FirstOnSite"
                        width="100%"
                    />
                    <InputField
                        title="Company Name"
                        placeholder="Ex: FirstOnSite"
                        width="100%"
                    />
                </div>
                <InputField
                    title="Company Name"
                    placeholder="Ex: FirstOnSite"
                    width="100%"
                />
                <InputField
                    title="Company Name"
                    placeholder="Ex: FirstOnSite"
                    width="100%"
                />
            </div>

        </FormContainer>
    </div>
}
