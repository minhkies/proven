import React from 'react';
import InputField from "../comps/InputField";
import "../App.scss";

export default {
    title: 'InputField',
    component: InputField
}

export const defaultInputField = () => {
    return <InputField
        title="Input Heading"
        placeholder="Input Placeholder"
        width="50%"
    />
};
