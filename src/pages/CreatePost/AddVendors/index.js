import React from "react";
import Header from "../../../comps/Header";
import FormContainer from "../../../comps/FormContainer";
import InputField from "../../../comps/InputField";
import SideBar from "../../../comps/SideBar";
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

export default function AddVendors() {
    return <div className={"add-vendors-container"}>
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
                />
                <div className={"horizontal-input"}>
                    <InputField
                        title="Name of Contact Person"
                        placeholder="Ex: John Smith"
                        width="100%"
                        star={true}
                    />
                    <InputField
                        title="Position of Contact Person"
                        placeholder="Ex: Manager Assistant"
                        width="100%"
                    />
                </div>
                <div className={"horizontal-input"}>
                    <InputField
                        title="Telephone Number"
                        placeholder="(___) ___ - ____"
                        width="100%"
                        star={true}
                    />
                    <InputField
                        title="Cellphone Number"
                        placeholder="(___) ___ - ___"
                        width="100%"
                    />
                </div>
                <InputField
                    title="Email"
                    placeholder="Ex: hleung@company.com"
                    width="100%"
                    star={true}
                />
                <InputField
                    title="Website (Optional)"
                    placeholder="Ex: company.com"
                    width="100%"
                />
            </div>
        </FormContainer>
        <FormContainer
            formHeading={"Vendor Details"}
        >
            <div className={"input-container"}>
                <InputField
                    title="Company Name"
                    placeholder="Ex: FirstOnSite"
                    width="100%"
                    star={true}
                />
                <div className={"horizontal-input"}>
                    <InputField
                        title="Name of Contact Person"
                        placeholder="Ex: John Smith"
                        width="100%"
                        star={true}
                    />
                    <InputField
                        title="Position of Contact Person"
                        placeholder="Ex: Manager Assistant"
                        width="100%"
                    />
                </div>
                <div className={"horizontal-input"}>
                    <InputField
                        title="Telephone Number"
                        placeholder="(___) ___ - ____"
                        width="100%"
                        star={true}
                    />
                    <InputField
                        title="Cellphone Number"
                        placeholder="(___) ___ - ___"
                        width="100%"
                    />
                </div>
                <InputField
                    title="Email"
                    placeholder="Ex: hleung@company.com"
                    width="100%"
                    star={true}
                />
                <InputField
                    title="Website (Optional)"
                    placeholder="Ex: company.com"
                    width="100%"
                />
            </div>
        </FormContainer>
    </div>
}
