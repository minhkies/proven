import React from 'react';

export default function ProjectBar({projects, completed}) {

    const bar = () => {
        let tempArr = [];
        for (let i=0; i < projects ; i++){
            tempArr.push(<div className={"piece" + " " + (i<completed&&"completed-piece")}/>)
        }
        return tempArr;
    };
    return <div className={"project-bar-container"}>
        <div className={"project-bar"}>
            {bar()}
        </div>
        <p className={"project-bar-des"}>{completed} of {projects} projects available</p>
    </div>
}

ProjectBar.defaultProps = {
    projects: 2,
    completed: 1
};
