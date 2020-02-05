import React, {useState} from "react";
import * as FeatherIcon from "react-icons/fi";
import "../../font.scss";

export default function MenuItem({menuIcon, menuTxt, collapsed, active, onClick, setSelect}) {
    const Icon = FeatherIcon[menuIcon];
    return(
        <div className={"menu-item " + (active&&"active")} onClick={()=>{setSelect(menuTxt)}}>
            <Icon/>
            <p>{menuTxt}</p>
        </div>
    )
}

MenuItem.defaultProps = {
    menuIcon: "FiGrid",
    menuTxt: "Item",
    collapsed: false,
    active: false,
    onClick: ()=>{}
};
