import React from "react";
import "../../font.scss"
import {Link} from "react-router-dom";

export default function Upgrade({onClick, collapsed, text}) {
    return(
            <Link to={"/Payment/Selection"} className={"btn-upgrade"} onClick={onClick}>{collapsed?"PRO":text}</Link>
        )
}

Upgrade.defaultProps = {
    collapsed: false,
    text:"Upgrade to Pro"
};
