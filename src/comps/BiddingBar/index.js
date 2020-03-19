import React from "react";  

export default function ProjectList({name,id,startdate,enddate,amount,letter}){
    return(
        <div className = {"bar-container"}>
        <div className={"bar-title"}>
            <div className={"left-head"}>
            <span className="icon">{letter}</span>
            <p className="project-name">{name}</p>
            </div>
            <p className="project-id">{id}</p>
        </div>
        <div className={"bar-other-titles"}>
            <p>{startdate}</p>
            <p>{enddate}</p>
            <p>{amount}</p>
            <p>Status</p>
        </div>
        </div>
    )
}

ProjectList.defaultProps = {
    name:"",
    id:"",
    startdate:"",
    enddate:"",
    amount:"",
    letter:""
};
