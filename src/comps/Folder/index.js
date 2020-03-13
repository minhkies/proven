import React,{useState} from "react";
import * as FeatherIcon from "react-icons/fi";

export default function Folder({type,heading,address,onClick,selected}){
    let Icon = FeatherIcon["FiPlusCircle"];
    let folderType=null;
    let addressStyle = null;
    let headingStyle = "heading";
    let upgradeCta = "";
    let iconStyle = "";

    if (type==="inactive"){
        folderType = "folder-svg-active";
        iconStyle = "icon-inactive";
        upgradeCta = "upgrade-inactive";
    }
    else if (type==="active"){
        folderType = "folder-svg-inactive";
        iconStyle = "icon-inactive";
        upgradeCta = "upgrade-inactive";
    }
    else if(type==="new") {
        folderType = "folder-svg-new";
        headingStyle = "heading-inactive";
        addressStyle = "address-inactive";
        iconStyle = "icon-active";
    }
    return(
        <div className={"folder-container"}>
            <div className ={folderType}>
                <div className = {headingStyle}>{heading}</div>
                <div className = {addressStyle}>{address}</div>
                <Icon className ={iconStyle} color="#FF893B" size ={33} stroke-width ={1.5} />
                <div className={upgradeCta}>Upgrade CTA</div>
            </div>
        </div>
    )
}

Folder.defaultProps = {
    type: "active",
    heading: "Default Heading",
    address:"Default Address",
    selected:false,
    onClick: ()=>{},
};
