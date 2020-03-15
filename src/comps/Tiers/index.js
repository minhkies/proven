import React from 'react';
import TierOption from "./TierOption";

export default function Tiers({options, selected, onclick}) {
    return <div className={"tiers-container"}>
        {options.map((o,i)=>{
            let select = false;
            selected===i?select=true:select=false;
            return <TierOption
                {...o}
                selected={select}
                onclick={onclick}
                pos={i}
            />
        })}
    </div>
}

Tiers.defaultProps = {
    options: {},
    selected: 0,
    onclick: ()=>{}
};
