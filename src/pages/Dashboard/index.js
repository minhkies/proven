import React from "react";
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";
import Notification_active from "../../media/img/bell-active.svg";
import Header from "../../comps/Header";
import Folder from "../../comps/Folder";
import CreatePost from "../CreatePost";
import SideBar from "../../comps/SideBar";
import BiddingBar from "../../comps/BiddingBar";
import ProgressBar from "../../comps/ProgressBar";
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
   var Icon = FeatherIcon["FiCircle"];
    var projects= localStorage.getItem("projects");
    projects = JSON.parse(projects);
    console.log(projects);
    return (
        
        <div className="dashboard-content-container">
            <div className={"welcome-bar-container"}>
                <div className={"left-welcome-container"}>
                    <p>Welcome back, <span className={"welcome-username"}>Lawrence</span></p>
                </div>
                <div className={"right-welcome-container"}>
                    <img className={"notification"} src={Notification_active} alt={"Notification"}/>
                    <div className={"profile-container"}>
                        <div className={"profile-photo"}/>
                        <p className={"username"}>Lawrence</p>
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
                        projects={2}
                        completed={projects.length}
                    />
                </div>
             
                <SimpleBar style={{ maxHeight: 300 }} className={"folder-container"}>
                {projects.map((o,i)=>(
                            <Folder
                            key={i}
                            heading={o.projectId}
                            projectId={o.name}
                        />
                        ))}
                        <Folder type="new"/>
                        <Folder type="locked"/>
                        <div className={"upgrade-container"}>
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
                                <div className={"bar-graph"}>hi</div>
                                <div className={"budget-total-info"}>
                                    <p className={"budget-total-text"}>Total Budget</p>
                                    <p className={"budget-number"}>$85000</p>
                                    <div className={"budget-remaining-info"}>
                                        <div className={"remaining-container"}>
                                            <p className={"remaining-text"}>Remaining</p>
                                            <p className={"remaining-num"}>$23212</p>
                                        </div>
                                        <div className={"current-container"}>
                                            <p className={"current-text"}>Currently</p>
                                            <p className={"current-num"}>3% over</p>
                                        </div>
                                    </div>
                                    <p className={"budget-graph-text"}><Icon stroke-width="0" fill="#729CA2"/>Total Budget</p>
                                    <p className={"budget-amount-text"}><Icon stroke-width="0" fill="#C4DCDF"/>Budget Amount Used</p>
                                    <p className={"target-amount-text"}><Icon stroke-width="0" fill="#FFC539"/>Target Amount Used</p>
                                </div>
                            </div>
                        </div>
                        <div className={"phase-budget"}>
                        <p className={"phase-text"}>Phase Budget</p>
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
