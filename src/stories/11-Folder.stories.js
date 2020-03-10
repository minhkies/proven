import React from 'react';
import Folder from "../comps/Folder";
import "../App.scss";

export default {
    title: "Folder",
    component: Folder
}

export const defaultFolder = () => {
    return <Folder />
};

export const customFolder = () => {
    return <Folder heading="BY22 - LP104" address="BCIT - 3700 Willingdon" />
};

export const inactiveFolder = () => {
    return <Folder type="inactive" />
};
export const newFolder = () => {
    return <Folder type="new" />
};
