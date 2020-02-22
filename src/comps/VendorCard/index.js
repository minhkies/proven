import React from "react";
import "../font.scss"
import * as FeatherIcon from "react-icons/fi";
export default function VendorCard({title,category}) {
    var Icon = FeatherIcon["FiX"];
    return(
        <div className={"vendor-cont"}>
            <Icon className={"icon-style"} size={22}/>
          <p className={"company-name"}>{title}</p>
        </div>
        )
}

VendorCard.defaultProps = {
    title:"Company Name",
    category:"Waste Disposal/Recycling"
};
