import React, {useEffect, useState} from "react";
import MenuItem from "../Menu/MenuItem";
import Menu from "../Menu";



export default function SideBar({children}) {
    return(
        <div className={"side-bar"}>
            {children}
        </div>
    )

}

SideBar.defaultProps = {
    menuItems: [
        {
            menuIcon: "FiGrid",
            menuTitle: "Sidebar Menu"
        }
    ]
};
