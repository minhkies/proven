import React from "react";
import * as FeatherIcon from "react-icons/fi";
import "../font.scss"
export default function CategoryBtn({name,selected,menuIcon}) {
    var Icon = FeatherIcon[menuIcon];
    var btnStyle=null;
    var iconStyle=null;

    if (selected=="activebtn"){
        btnStyle= "categorybtn-container-select";
        iconStyle="whiteplus"
        Icon=FeatherIcon["FiCheck"];
    }
    else if(selected=="inactivebtn") {
        btnStyle= "categorybtn-container-noselect";
        iconStyle="grayplus"
        Icon=FeatherIcon["FiPlus"];
    }
    else if (selected=="listbtn"){
        btnStyle= "listbtn-container";
        iconStyle="whiteplus"
        Icon=FeatherIcon["FiX"];
    }
     return(
            <div className={btnStyle}>
            <p>{name}</p>
            <Icon className ={iconStyle} size={22}/>
            </div>
            )
}

CategoryBtn.defaultProps = {
    name:"Default Category",
    selected:"inactivebtn"
};
