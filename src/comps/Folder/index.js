import React,{useState} from "react";
import * as FeatherIcon from "react-icons/fi";

export default function Folder({type,heading,projectId,onClick,selected}){
    let [removed, setRemoved] = useState(false);
    let [select, setSelect] = useState(false);
    let Icon = FeatherIcon["FiLock"];
    if (type=="locked"){
         Icon = FeatherIcon["FiLock"];
    }
    else {
         Icon = FeatherIcon["FiPlusCircle"];
    }
    
    let folderType=null;
    let addressStyle = null;
    let headingStyle = "heading";
    let upgradeCta = "";
    let iconStyle = "";
if (type=="project"){
    if (select==true||selected==true){

            folderType = "folder-svg-active";
            iconStyle = "icon-inactive";
            upgradeCta = "upgrade-inactive";
    }
        else {
            folderType = "folder-svg-inactive";
            iconStyle = "icon-inactive";
            upgradeCta = "upgrade-inactive";
        }
    
    
}
    else if(type==="new") {
        folderType = "folder-svg-new";
        headingStyle = "heading-inactive";
        addressStyle = "address-inactive";
        iconStyle = "icon-active";
        upgradeCta = "upgrade-inactive";
    
}
else if(type="locked"){
    folderType = "folder-svg-locked";
    headingStyle = "heading-inactive";
    addressStyle = "address-inactive";
    upgradeCta = "upgrade-inactive";
}
    return(
        <div className={"folder-container"}>
            <div className ={folderType} onClick={()=>{!selected?setSelect(!select):(setRemoved(true))}}>
                <div className = {headingStyle}>{heading}</div>
                <div className = {addressStyle}>{projectId}</div>
                <Icon className ={iconStyle} color={type=="new"?"#FF893B":"#A9A9A9"} size ={33} stroke-width ={1.5} />
                <div className={upgradeCta}>Upgrade CTA</div>
            </div>
        </div>
    )
}

Folder.defaultProps = {
    type: "project",
    heading: "Default Heading",
    projectId:"Default Id",
    selected:false,
    onClick: ()=>{},
};
