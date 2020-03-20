import React from 'react';
import { connect } from 'net';

export default function ProjectBar({projects, completed,unlimited}) {
    var content = null;
if (unlimited==true){
content = "Unlimited projects available";
}
else {
    content = completed +" of " +projects+ " projects available ";
}
    const bar = () => {
        let tempArr = [];
        for (let i=0; i < projects ; i++){
            if (unlimited==false){
                tempArr.push(<div className={"piece" + " " + (i<completed&&"completed-piece")}/>)
            }
          else {
            tempArr.push(<div className={"unlimited-piece" + " " + (i<completed&&"completed-piece")}/>)
          }
        }
        return tempArr;
    };
    return <div className={"project-bar-container"}>
        <div className={"project-bar"}>
            {bar()}
        </div>
        <p className={"project-bar-des"}>{content}</p>
    </div>
}

ProjectBar.defaultProps = {
    projects: 2,
    completed: 1,
    unlimited: false,
};
