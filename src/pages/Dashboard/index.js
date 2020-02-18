import React from "react";
import {Switch, Route, Link} from "react-router-dom";
import { useHistory } from "react-router-dom";
import CreatePost from "../CreatePost";

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
                    <p className={"title"}>Welcome to proven, Let's get started</p>
                    <p className={"btn-close-pop-up"}>x</p>
                    <div>Hi</div>
                    <div>Hi</div>
                    <div>Hi</div>
                    <Link to={"/CreatePost/AddVendors"}>Get Started</Link>
                </div>
            </div>
    )
};


const Dash = () => {
    return(
        <div className={"dashboard-container"}>
            {CheckFirstTime()&&<FirstTime/>}
            Hi
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
