import React from 'react';
import Menu from "../comps/Menu";
import "../App.scss";

export default {
    title: 'Menus',
    component: Menu
}

export const defaultMenu = () => {
    return <Menu/>
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

export const MenuWOptions = () => {
    return <Menu
        menuItems={menuItems}
        selected={"Dashboard"}
    />
};
