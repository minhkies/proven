import React from "react";
import "../../font.scss"

export default function Upgrade({onClick, collapsed, text}) {
    return(
            <p className={"btn-upgrade"} onClick={onClick}>{collapsed?"PRO":text}</p>
        )
}

Upgrade.defaultProps = {
    collapsed: false,
    text:"Upgrade to Pro"
};
