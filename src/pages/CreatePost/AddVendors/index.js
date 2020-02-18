import React from "react";
import Header from "../../../comps/Header";
import FormContainer from "../../../comps/FormContainer";

export default function AddVendors() {
    return <div className={"add-vendors-container"}>
        <Header
            headingTxt={"Add Company Vendors"}
            subTxt={"Complete vendor details below. Click 'Add New Vendor' to add to vendor list."}
        />
        <FormContainer
            formHeading={"Vendor Details"}
        >

        </FormContainer>
    </div>
}
