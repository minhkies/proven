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
            <InputField
                title="Input Heading"
                placeholder="Input Placeholder"
                width="50%"
            />
        </FormContainer>
    </div>
}
