import React from 'react';
import Upgrade from "../comps/SideBar/Upgrade";
import "../App.scss";

export default {
    title: 'Upgrade Btns',
    component: Upgrade
}

export const defaultUpgradeBtn = () => {
    return <Upgrade/>
};

export const collapsedUpgradeBtn = () => {
    return <Upgrade
        collapsed={true}
    />
};
