import React from 'react';
import Notification_active from "../../media/img/bell-active.svg";
import Header from "../../comps/Header";
import Upgrade from "../../comps/SideBar/Upgrade";
import ProjectBar from "../../comps/ProjectsBar";
import ProjectList from "../../comps/BiddingBar";

export default function Projects() {
    var projects= localStorage.getItem("projects");
    projects = JSON.parse(projects);
    console.log(projects[0].phases[0]);
    return (

    <div className="dashboard-content-container">
             
    <div className={"welcome-bar-container"}>

        <div className={"left-welcome-container"}>
            <Header
            headingTxt={"Projects"}
            margin={false}
            />
        </div>
        <div className={"right-welcome-container"}>

            <img className={"notification"} src={Notification_active} alt={"Notification"}/>
            <div className={"profile-container"}>
                <div className={"profile-photo"}/>
                <p className={"username"}>Lawrence</p>
            </div>
     
        </div>

    </div>
    <div className="projects-cont">
        <div className = {"projects-button"}>
            <Upgrade 
            text={"Create New Project"}
            />
        </div>
        <div className ={"projects-bar"}>
        <ProjectBar
        projects={2}
        completed={2}
        custom = {true}
        text="Unlimited projects available"
                    />
        </div>
    </div>
    <div className = {"current-projects-container"}>
        <div className={"project-title"}>
            <p>Project Name</p>
            <p>Project ID</p>
        </div>
        <div className={"other-titles"}>
            <p>Start Date</p>
            <p>End Date</p>
            <p>Amount Used</p>
            <p>Status</p>
        </div>
    </div>
    <div className={"project-list"}>
    {projects.map((o,i)=>(
            o.phases.map((phase,i)=>(
                <ProjectList
                key={i}
                name={o.name}
                id={o.projectId}
                startdate={phase.startDate}
                enddate={phase.bidDeadline}
                amount={"$"+phase.budget}
                />
            ))
        ))}
    </div>
    </div>
    )
}
