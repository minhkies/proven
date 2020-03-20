import React,{useState} from "react";
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";
import Notification_active from "../../media/img/bell-active.svg";
import Header from "../../comps/Header";
import Folder from "../../comps/Folder";
import CreatePost from "../CreatePost";
import SideBar from "../../comps/SideBar";

import ProgressBar from "../../comps/ProgressBar";
import NotificationCard from "../../comps/NotificationCard";
import ProjectSmallTab from "../../comps/ProjectSmallTab";
import Upgrade from "../../comps/SideBar/Upgrade";
import ProjectBar from "../../comps/ProjectsBar";
import SimpleBar from 'simplebar-react';
import * as FeatherIcon from "react-icons/fi";
import 'simplebar/dist/simplebar.min.css';

let CheckFirstTime = () =>{
    if(localStorage.getItem("firstTime")){
        localStorage.setItem("firstTime", JSON.stringify(true));
        return true;
    } else {
        localStorage.setItem("firstTime", JSON.stringify(true));
        return false;
    }
};

let FirstTime = () => {
    return(
            <div className={"dimmer"}>
                <div className={"pop-up-container"}>
                    <p className={"title"}>Welcome to proven, Henry <br/> proven is designed to help you streamline your project bidding</p>
                    <p className={"btn-close-pop-up"}>x</p>
                    <div>Hi</div>
                    <div>Hi</div>
                    <div>Hi</div>
                    <Link to={"/CreatePost/AddVendors"}>Get Started</Link>
                </div>
            </div>
    )
};

let SavedUser = () => {
    let Icon = FeatherIcon["FiCircle"];
    let projects= JSON.parse(localStorage.getItem("projects"));
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
                    <p>Welcome back, <span className={"welcome-username"}>Laurence</span></p>
                </div>
                <div className={"right-welcome-container"}>

                    <img className={"notification"} src={Notification_active} alt={"Notification"}/>
                    <div className={"profile-container"}>
                        <div className={"profile-photo"}/>
                        <p className={"username"}>Laurence</p>
                    </div>
                </div>
            </div>
            <div className={"project-selection-container"}>
                <div className={"project-selection-header"}>

                    <Header
                        headingTxt={"Recent Projects"}
                        margin={false}
                        font={"20px"}
                    />
                    <ProjectBar
                        projects={allowProjects}
                        completed={projects.length}
                        unlimited={unlimited}
                    />
                </div>

                <SimpleBar>
                {projects.map((o,i)=>(

                            <Folder
                            key={i}
                            heading={o.projectId}
                            projectId={o.name}
                            />
                        ))}
                         <Folder type="new" />
                         <div className={"lock-container"} style={allowProjects!==projects.length?{opacity: 0}:{}}>
                             <Folder type="locked"/>
                         </div>

                        <div className={"upgrade-container"} style={allowProjects!==projects.length?{opacity: 0}:{}}>
                            <p className={"upgrade-text"}>Upgrade to unlock more projects.</p>
                            <p>Choose a plan that fits your needs.</p>
                            <Upgrade text={"See Pricing Plans"}/>
                        </div>
                </SimpleBar>
            </div>
            <div className={"project-analytics"}>
                <div className={"analytics-header"}>
            <Header
                        headingTxt={"Project Analytics"}
                        margin={false}
                        font={"20px"}
                    />
                    <p className={"select-text"}>Select a project</p>
                    </div>
                    <div className={"project-tabs"}>
                        <ProjectSmallTab type="bids"/>
                        <ProjectSmallTab/>
                        <ProjectSmallTab type="completedphases"/>
                        <ProjectSmallTab type="deadline"/>
                    </div>
                    <div className={"project-graphs"}>
                        <div className={"project-budget"}>
                            <p className={"budget-text"}>Project Budget</p>
                            <div className={"info-container"}>
                                <div className={"bar-graph"}/>
                                <div className={"budget-total-info"}>
                                    <p className={"budget-total-text"}>Total Budget</p>
                                    <p className={"budget-number"}>$85,000</p>
                                    <div className={"budget-remaining-info"}>
                                        <div className={"remaining-container"}>
                                            <p className={"remaining-text"}>Remaining</p>
                                            <p className={"remaining-num"}>$23,212</p>
                                        </div>
                                        <div className={"current-container"}>
                                            <p className={"current-text"}>Currently</p>
                                            <p className={"current-num"}>3% over</p>
                                        </div>
                                    </div>
                                    <p className={"budget-graph-text"}><Icon style={{marginRight:"5px"}} stroke-width="0" fill="#729CA2"/>Total Budget</p>
                                    <p className={"budget-amount-text"}><Icon style={{marginRight:"5px"}} stroke-width="0" fill="#C4DCDF"/>Budget Amount Used</p>
                                    <p className={"target-amount-text"}><Icon style={{marginRight:"5px"}} stroke-width="0" fill="#FFC539"/>Target Amount Used</p>
                                </div>
                            </div>
                        </div>
                        <div className={"phase-budget"}>
                        <p className={"phase-text"}>Phase Budget</p>
                            <div className={"phase-info-cont"}>
                                <div className={"phase-pie"}></div>
                                <div className = {"phase-info"}>
                                    <div className={"phases-cont"}>
                                        Phase Name
                                        <p className={"phase-name"}><Icon size={15}style={{marginRight:"5px"}} stroke-width="0" fill="#FFC539"/>BY18-LH003</p>
                                        <p className={"phase-name"}><Icon size={15} style={{marginRight:"5px"}} stroke-width="0" fill="#C4DCDF"/>BY18-LH010</p>
                                        <p className={"phase-name"}><Icon size={15} style={{marginRight:"5px"}} stroke-width="0" fill="#729CA2"/>BY18-LH023</p>
                                        <p className={"phase-name"}><Icon size={15} style={{marginRight:"5px"}} stroke-width="0" fill="#4FAAFF"/>BY18-LH123</p>
                                    </div>
                                    <div className={"phase-budget-text"}>
                                        Budget
                                        <p className={"phase-budget-number"}>$22,350</p>
                                        <p className={"phase-budget-number"}>$17,550</p>
                                        <p className={"phase-budget-number"}>$19,000</p>
                                        <p className={"phase-budget-number"}>$13,100</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>

        </div>


    )
};


const Dash = () => {
    return(

        <div className={"dashboard-container"}>
             {/* {CheckFirstTime()?<FirstTime/>:<SavedUser />} */}
        <SavedUser/>
        </div>

    )
};


export default function Dashboard({setCollapse}) {
    setCollapse(false);

    return(
        <BrowserRouter>
            <Switch>
                <Route exact path={"/Dashboard"} children={()=><Dash/>}/>
                <Route path={"/CreatePost"} children={()=><CreatePost/>}/>
            </Switch>
        </BrowserRouter>

    )
}
