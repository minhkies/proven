import React, {useState} from "react";
import * as FeatherIcon from "react-icons/fi";
import "../../font.scss";
import {Link,BrowserRouter} from "react-router-dom";

export default function MenuItem({menuIcon, menuTxt, collapsed, active, onClick, setSelect, link}) {
    const Icon = FeatherIcon[menuIcon];
    return(
        <BrowserRouter>
        <Link to={"/"+link} className={"menu-item" + " " + (active&&"active") + " " + (collapsed&&"collapsed-menu-item")} onClick={()=>{setSelect(menuTxt)}}>
            <Icon/>
            {!collapsed&&<p>{menuTxt}</p>}
        </Link>
        </BrowserRouter>
    )
}

MenuItem.defaultProps = {
    menuIcon: "FiGrid",
    menuTxt: "Item",
    collapsed: false,
    active: false,
    onClick: ()=>{}
};
