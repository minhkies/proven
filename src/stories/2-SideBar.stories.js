import React from 'react';
import SideBar from "../comps/SideBar";
import "../App.scss";
import Menu from "../comps/Menu";
import Logo from "../comps/Logo";
import Upgrade from "../comps/SideBar/Upgrade";

export default {
    title: 'Sidebars',
    component: SideBar
}

export const defaultSidebar = () => {
    return <SideBar/>
};

let menuItems = [
    {
        menuIcon: "FiGrid",
        menuTxt: "Dashboard",
    },
    {
        menuIcon: "FiFolder",
        menuTxt: "Project",
    },
    {
        menuIcon: "FiUsers",
        menuTxt: "Vendors"
    }
];

export const defaultSidebarWMenu = () => {
    return <SideBar>
        <Menu
            menuItems={menuItems}
            selected={"Dashboard"}
        />
    </SideBar>
};

// export const sidebarWLogoNMenu = () => {
//     return <SideBar>
//         <Logo/>
//         <Menu
//             menuItems={menuItems}
//             selected={"Dashboard"}
//         />
//     </SideBar>
// };

export const sidebarWLogonMenuNBtn = () => {
    return <SideBar>
        <Logo/>
        <Menu
            menuItems={menuItems}
            selected={"Dashboard"}
        />
        <Upgrade/>
    </SideBar>
};

export const sidebarWLogonMenuNBtnWSpecs = () => {
    return <SideBar
        align={"top"}
    >
        <Logo/>
        <Menu
            menuItems={menuItems}
            selected={"Dashboard"}
        />
        <Upgrade/>
    </SideBar>
};
export const collapsedSidebarWLogoNMenuNBtnWSpecs = () => {
    return <SideBar
        collapsed={true}
        align={"top"}
    >
        <Logo/>
        <Menu
            menuItems={menuItems}
            selected={"Dashboard"}
        />
        <Upgrade/>
    </SideBar>
};

export const rightSidebar = () => {
    return <SideBar
        align={"top"}
        color={"dark2"}
        right={true}
    >
        <p>Vendor List</p>
    </SideBar>
};
