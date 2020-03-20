import React from 'react';
import Notification_active from "../../media/img/bell-active.svg";
import Header from "../../comps/Header";
import Upgrade from "../../comps/SideBar/Upgrade";
import ProjectBar from "../../comps/ProjectsBar";
import ProjectList from "../../comps/BiddingBar";

export default function Projects() {
    let projects= localStorage.getItem("projects");
    projects = JSON.parse(projects);
    let profile = JSON.parse(localStorage.getItem("profile"));
    let allowProjects = 2;
    let unlimited = false;
    if (profile.tier === 1){
        allowProjects = 2;
    } else if (profile.tier === 2){
        allowProjects = 10;
    } else if (profile.tier === 3){
        unlimited = true;
    }
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
        projects={allowProjects}
        completed={projects.length}
        unlimited={unlimited}
            />
        </div>
    </div>
    <div className = {"current-projects-container"}>
            <p className={"title-init"}/>
            <p className={"title-name"}>Project Name</p>
            <p className={"title-id"}>Project ID</p>
            <p className={"title-start-date"}>Start Date</p>
            <p className={"title-end-date"}>End Date</p>
            <p className={"title-amount"}>Amount Used</p>
            <p className={"title-status"}>Status</p>
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
                letter={o.name[0]}
                />
            ))
        ))}
    </div>
    </div>
    )
}
