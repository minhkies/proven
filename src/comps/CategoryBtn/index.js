import React from "react";
import * as FeatherIcon from "react-icons/fi";
import "../font.scss"
export default function CategoryBtn({name,selected,menuIcon}) {
    let Icon = FeatherIcon[menuIcon];
    let btnStyle = null;
    let iconStyle = null;

    if (selected==="activeBtn"){
        btnStyle= "category-btn-container-select";
        iconStyle="white-plus";
        Icon=FeatherIcon["FiCheck"];
    }
    else if(selected==="inactiveBtn") {
        btnStyle= "category-btn-container-no-select";
        iconStyle="gray-plus";
        Icon=FeatherIcon["FiPlus"];
    }
    else if (selected==="listBtn"){
        btnStyle= "list-btn-container";
        iconStyle="white-plus";
        Icon=FeatherIcon["FiX"];
    }
     return(
            <div className={"category-btn-container" + " " + btnStyle}>
                <p>{name}</p>
                <Icon className ={"category-icon" + " " + iconStyle} size={22}/>
            </div>
            )
}

CategoryBtn.defaultProps = {
    name:"Default Category",
    selected:"inactiveBtn"
};
