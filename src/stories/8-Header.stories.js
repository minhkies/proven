import React from 'react';
import Header from "../comps/Header";
import "../App.scss";

export default {
    title: "Header",
    component: Header
}

export const defaultHeader = () => {
    return <Header/>
};

export const customHeader = () => {
    return <Header
        headingTxt={"Custom header"}
        subTxt={"This is a custom sub-header"}
    />
};
