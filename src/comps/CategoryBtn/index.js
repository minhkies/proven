import React from "react";
import * as FeatherIcon from "react-icons/fi";
import "../font.scss"
export default function CategoryBtn({menuIcon,name,width,background,iconColor,fontColor,list}) {
    const Icon = FeatherIcon[menuIcon];
    if (list==false){
        return(
            <div style={{width:width, background: background}} className="categorybtn-container">
            <p style={{color:fontColor}}>{name}</p>
            <Icon size={22} color={iconColor}/>
            </div>
            )
    }
    else {
        return(
            <div style={{width:width, background: background}} className="listbtn-container">
            <p style={{color:fontColor}}>{name}</p>
            <Icon size={22} color={iconColor} style={{padding:20}}/>
            </div>
            )
    }
}

CategoryBtn.defaultProps = {
    menuIcon:"FiPlus",
    name:"Default Category",
    width:"",
    background:"#ECF0F4",
    iconColor:"#979797",
    fontColor:"#979797",
    list:false,
};
