import React from "react";

export default function ProjectList({name,id,startdate,enddate,amount,letter}){
    return(
        <div className = {"bar-container"}>
            <div className={"init-container"}>
                <div className="icon">{letter}</div>
            </div>

            <p className="project-name">{name}</p>
            <p className="project-id">{id}</p>
            <p className={"start-date"}>{startdate}</p>
            <p className={"end-date"}>{enddate}</p>
            <p className={"amount"}>{amount}</p>
            <p className={"status"}>Status</p>
        </div>
    )
}

ProjectList.defaultProps = {
    name: "",
    id:"",
    startdate:"",
    enddate:"",
    amount:"",
    letter:""
};
