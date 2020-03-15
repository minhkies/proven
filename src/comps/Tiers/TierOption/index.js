import React from 'react';

export default function TierOption({name, price, features, selected, recommended, onclick, pos}) {
    return <div className={"tier-option-container" + " " + (selected&&"selected-container")} onClick={()=>{onclick(pos)}}>
        {recommended&&<div className={"recommended"}>Recommended</div>}
        {selected&&<img src={require("../../../media/img/selected-tick.svg")} alt="Tick" className={"selected-tick"}/>}
        <p className={"tier-name"}>{name}</p>
        <p className={"tier-price"}>${price}<span className={"monthly"}>/month</span></p>
        {features.map((o,i)=>{
            return(
                <div className={"features-container"}>
                    <img src={require("../../../media/img/feature-tick.svg")} alt={"Tick"} className={"feature-tick"}/>
                    <p className={"feature-txt"} dangerouslySetInnerHTML={{__html: o}}/>
                </div>
            )
        })}
    </div>
}

TierOption.defaultProps = {
    name: "Plan 1",
    price: 99,
    features: [<b>+"1"+</b>+" User", "Up to 2 projects per user"],
    selected: true,
    recommended: true
};
