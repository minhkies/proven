import React from "react";
import {FiX} from "react-icons/fi";
export default function VendorCard({title,category}) {
    return(
        <div className={"vendor-cont"}>
            <FiX className={"icon-style"} size={22}/>
          <p className={"company-name"}>{title}</p>
        </div>
        )
}

VendorCard.defaultProps = {
    title: "Company Name",
    category:"Waste Disposal/Recycling"
};
