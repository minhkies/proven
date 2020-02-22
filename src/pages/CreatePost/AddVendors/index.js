import React from "react";
import Header from "../../../comps/Header";
import FormContainer from "../../../comps/FormContainer";
import InputField from "../../../comps/InputField";
import SideBar from "../../../comps/SideBar";
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import CategoryBtn from "../../../comps/CategoryBtn";

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
                    marginTop={false}
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
            formHeading={"Mailing Address"}
        >
            <div className={"input-container"}>
                <InputField
                    title="Address Line 1"
                    placeholder="Ex: 3700 Willingdon Ave"
                    width="100%"
                    star={true}
                    marginTop={false}
                />
                <InputField
                    title="Address Line 2"
                    placeholder="Ex: Building SE14 Room 112"
                    width="100%"
                />
                <div className={"horizontal-input-3"}>
                    <InputField
                        title="City"
                        placeholder="Ex: Burnaby"
                        width="100%"
                        star={true}
                    />
                    <InputField
                        title="Province"
                        placeholder="Ex: BC"
                        width="100%"
                        star={true}
                    />
                    <InputField
                        title="Postal Code"
                        placeholder="Ex: V5G 3H2"
                        width="100%"
                        star={true}
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
                <CategoryBtn
                    name={"jhfgjf"}
                    selected={"inactiveBtn"}
                /><CategoryBtn
                    name={"jhfgjf"}
                /><CategoryBtn
                    name={"jhfgjf"}
                /><CategoryBtn
                    name={"jhfgjf"}
                /><CategoryBtn
                    name={"jhfgjf"}
                />
            </div>

            <p className={"other-header"}>
                If "Other", please specify type of service(s) offered or provided:
            </p>
        </FormContainer>
    </div>
}
