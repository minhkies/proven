import React from 'react';
import VendorCard from "../comps/VendorCard";
import "../App.scss";

export default {
    title: "VendorCard",
    component: VendorCard
}

export const defaultVendorCard = () => {
    return <VendorCard/>
};
