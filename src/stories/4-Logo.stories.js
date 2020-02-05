import React from 'react';
import Logo from "../comps/Logo";
import "../App.scss";

export default {
    title: 'Logos',
    component: Logo
}

export const defaultLogo = () => {
    return <Logo/>
};

export const collapsedLogo = () => {
    return <Logo
        collapsed={true}
    />
};
