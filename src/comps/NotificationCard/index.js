import React from "react";
import {FiX,FiCircle} from "react-icons/fi";


export default function NotificationCard({header}) {
    return(
        <div className={"notification-cont"}>
            {header&&<div className="notification-header">
                <p>Bidding Notifications</p>
                <FiCircle size={16} fill="#FF893B" strokeWidth="0"/>
            </div>}
            <div className = "notification-innercont">
                <div className="delete-icon"><FiX size={16} color="white"/></div>
                <p className="bid-heading">Magic Touch Constructions</p>
                 <div className="container">
                <div className="inner-headings">
                    <p>Date</p>
                    <p>Project</p>
                    <p>Phase</p>
                    <p>Bid Amount</p>
                    <p>Bid Status</p>
                </div>
                <div className="inner-details">
                    <p>03/10/2020 1:30PM</p>
                    <p>BCIT - 3700 Willingdon</p>
                    <p>BY18-LH123</p>
                    <p>$1,200</p>
                    <p><span>Pending</span></p>
                    </div>
   
                </div>
            </div>
        </div>
        )
}

NotificationCard.defaultProps = {
header:true
};
