import React, {useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";

import SideBar from "../comps/SideBar";
import Logo from "../comps/Logo";
import Menu from "../comps/Menu";
import Upgrade from "../comps/SideBar/Upgrade";
import CreatePost from "./CreatePost";
import Dashboard from "./Dashboard";
import Projects from "./Projects";
import Vendors from "./Vendors";
import Payment from "./Payment";

export default function Main() {
    let [collapse, setCollapse] = useState(false);

    let menuItems = [
        {
            menuIcon: "FiGrid",
            menuTxt: "Dashboard",
            link: "Dashboard"
        },
        {
            menuIcon: "FiFolder",
            menuTxt: "Projects",
            link: "Projects"
        },
        {
            menuIcon: "FiUsers",
            menuTxt: "Vendors",
            link: "Vendors"
        }
    ];

    const routes = [
        {
            path: "/Dashboard",
            page: <Dashboard setCollapse={setCollapse}/>,
            exact: true
        },
        {
            path: "/Projects",
            page: <Projects/>
        },{
            path: "/Vendors",
            page: <Vendors/>
        },{
            path: "/CreatePost",
            page: <CreatePost setCollapse={setCollapse}/>
        },
        {
            path: "/Payment",
            page: <Payment/>
        }
    ];


    return (
        <Router>
            <div className={"main-container"}>
                <SideBar
                    collapsed={collapse}
                >
                    <Logo/>
                    <Menu
                        menuItems={menuItems}
                        selected={"Dashboard"}
                    />
                    <Upgrade/>
                </SideBar>

                <div className={"main-content"}>
                    <Switch>
                        {routes.map((r, i) => (
                            <Route
                                key={i}
                                path={r.path}
                                children={()=>r.page}
                                exact={r.exact}
                            />
                        ))}

                    </Switch>
                </div>
            </div>
        </Router>
    );
}

