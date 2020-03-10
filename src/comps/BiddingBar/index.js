import React from "react";
import * as FeatherIcon from "react-icons/fi";

export default function BiddingBar({bidder,price,job}){
    let Icon = FeatherIcon["FiCircle"];
    return(
        <div className={"bar-container"}>
            <Icon className="icon" fill="#DBDDE0" stroke="none" size={25}/>
                <div className={"bidder-name"}>{bidder}</div> 
            <div className={"price"}>{price}</div>
            <div className={"job"}>{job}</div>

        </div>
    )
}

BiddingBar.defaultProps = {
    bidder: "Bidder",
    price: "Price",
    job:"Job"
};
