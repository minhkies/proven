import React, {useEffect, useState, Children, cloneElement} from "react";
import MenuItem from "../Menu/MenuItem";
import Menu from "../Menu";



export default function SideBar({children, right, color, align, collapsed}) {
    return (
        <div
            className={"side-bar" + " " + ((align==="top"&&Children.count(children)!==3)&&"top") + " " + (right&&"right-side-bar") + " " + ((color === "dark1" || color === "dark2" )?color:"dark1") + " " + (collapsed&&"collapsed-side-bar")}>
            {Children.count(children) > 0 ?
                Children.count(children) === 3 ? ([
                    <div>
                        {cloneElement(children[0], {collapsed: collapsed})}
                        {cloneElement(children[1], {collapsed: collapsed})}
                    </div>,
                    <div>
                        {cloneElement(children[2], {collapsed: collapsed})}
                    </div>
                    ]) :
                    children : ""
            }
        </div>
    )
}

SideBar.defaultProps = {
    color: "dark1",
    right: false,
    align: "top",
    collapsed: false
};
