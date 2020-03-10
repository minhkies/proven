import React from "react";
import {Switch, Route, Link} from "react-router-dom";
import Header from "../../comps/Header";
import Folder from "../../comps/Folder";
import CreatePost from "../CreatePost";
import SideBar from "../../comps/SideBar";
import BiddingBar from "../../comps/BiddingBar";

let CheckFirstTime = () =>{
    if(localStorage.getItem("firstTime")){
        localStorage.setItem("firstTime", JSON.stringify(true));
        return true;
    } else {
        //Remove the next line in the future
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
    return (
        <div className="main">
        <div className={"recent-projects"}>
            <Header
            font="20px"
            headingTxt={"Recent Projects"}
            marginTop
            />
            <div className={"project-section"}>
            <Folder />
            <Folder />
            <Folder />
            </div>
            <div className = {"bidding-section"}>
                <Header
                font="20px"
                headingTxt={"Bidding Notifications"}
                />
                <BiddingBar />
                <BiddingBar />
                <BiddingBar />
                <BiddingBar />
                <BiddingBar />
                <BiddingBar />
            </div>
        </div>
        </div>
    )
}


const Dash = () => {
    return(
        
        <div className={"dashboard-container"}>
            {/* {CheckFirstTime()?<FirstTime/>:<SavedUser />} */}
            <SavedUser />
        </div>
        
    )
};


export default function Dashboard({setCollapse}) {
    setCollapse(false);
    
    return(
        
            <Switch>
                
                <Route exact path={"/Dashboard"} children={Dash}/>
                <Route path={"/CreatePost"} children={CreatePost}/>
                
            </Switch>

    )
}
