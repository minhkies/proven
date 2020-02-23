import React from "react";
import {FiX} from "react-icons/fi";


export default function VendorCard({title,category, vendors, setVendors}) {
    return(
        <div className={"vendor-cont"}>
            <FiX className={"icon-style"} size={16} onClick={()=>{
                setVendors(vendors.splice(vendors.map((o)=>{return o.name}).indexOf(title), 1));
            }}/>
            <p className={"company-name"}>{title}</p>
            <div className={"card-category-container"}>
                {category.map((o,i)=>{
                    return(
                        <p>{o}</p>
                    )
                })}
            </div>
        </div>
        )
}

VendorCard.defaultProps = {
    title: "Company Name",
    category:["Category 1", "Category 2"],
    vendors: null,
    setVendors: null
};
