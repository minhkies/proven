import React from 'react';
import * as FeatherIcon from "react-icons/fi";


export default function ProjectSmallTab({type,num}) {
var botText,iconColor,Icon = null;
    if (type=="totalphases"){
        Icon = FeatherIcon["FiFolder"];
        botText="Project Phases";
        iconColor="#FF6660";
    }
    else if(type=="completedphases"){
        Icon = FeatherIcon["FiCheckCircle"];
        botText="Phases Completed";
        iconColor="#729CA2";
    }
    else if(type=="deadline"){
        Icon = FeatherIcon["FiCalendar"];
        botText="Deadline: March 31, 2020";
        iconColor="#FFC539";
    }
    else if(type=="bids"){
        Icon = FeatherIcon["FiDollarSign"];
        botText="Total Bids";
        iconColor="#72C850";
    }
    return <div className={"tab-container"}>
            <div className ={"content"}>
                <div style={{background:iconColor}} className={"sign-cont"}> <Icon size={22} color="white" /></div>
                    <div className ="text-cont">
                        <div className={"text1"}>{num}</div>
                        <div className={"text2"}>{botText}</div>
                    </div>
             </div>
    </div>
}

ProjectSmallTab.defaultProps = {
    type:"totalphases",
    num:"12",
};
