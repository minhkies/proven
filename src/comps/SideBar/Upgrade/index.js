import React from "react";
import "../../font.scss"

export default function Upgrade({onClick, collapsed}) {
    return(
            <p className={"btn-upgrade"} onClick={onClick}>{collapsed?"PRO":"Upgrade to Pro"}</p>
        )
}

Upgrade.defaultProps = {
    collapsed: false
};
