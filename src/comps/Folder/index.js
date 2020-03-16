import React,{useState} from "react";
import * as FeatherIcon from "react-icons/fi";
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";
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
    
if (type=="project"){
    if (select==true||selected==true){

            folderType = "folder-svg-active";
    }
        else {
            folderType = "folder-svg-inactive";
        }
}
    else if(type==="new") {
        folderType = "folder-svg-new";
        headingStyle = "heading-inactive";
        addressStyle = "address-inactive";


    
}
else if(type="locked"){
    folderType = "folder-svg-locked";
    headingStyle = "heading-inactive";
    addressStyle = "address-inactive";
}
    return(
        <div className={"folder-container"}>
            <div className ={folderType} onClick= {()=>{!selected?setSelect(!select):(setRemoved(true))}}>
                <div className = {headingStyle}>{heading}</div>
                <div className = {addressStyle}>{projectId}</div>
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
