import React from 'react';
import BiddingBar from "../comps/BiddingBar";
import "../App.scss";

export default {
    title: "BiddingBar",
    component: BiddingBar
}

export const defaultBiddingBar = () => {
    return <BiddingBar />
};
