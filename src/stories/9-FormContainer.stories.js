import React from 'react';
import FormContainer from "../comps/FormContainer";
import "../App.scss";

export default {
    title: "FormContainer",
    component: FormContainer
}

export const defaultContainer = () => {
    return <FormContainer/>
};

export const customContainer = () => {
    return <FormContainer
        col={1}
        formHeading={"This is form heading"}
        children={<p>Custom content go here</p>}
    />
};
