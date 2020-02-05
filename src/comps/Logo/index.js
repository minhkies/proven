import React from 'react';

export default function Logo({collapsed}){
    return(
        <div className={"logo-container " + (collapsed&&"logo-collapsed")}>
        </div>
    )
}

Logo.defaultProps = {
    collapsed: false
};
