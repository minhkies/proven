import React, {useState} from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import ProgressBar from "../../comps/ProgressBar";
import AddVendors from "./AddVendors";
import AddProjectDetails from "./AddProjectDetails";
import AddPhases from "./AddPhases";
import Preview from "./Preview";
import SideBar from "../../comps/SideBar";
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import VendorCard from "../../comps/VendorCard";

export default function CreatePost({setCollapse}) {
    let [vendors, setVendors] = useState([]);
    let [phases, setPhases] = useState([]);
    let [completedStep, setCompletedStep] = useState([]);
    let [currentStep, setCurrentStep] = useState(1);
    let [refresh, setRefresh] = useState(true);
    // setCollapse(true);
    let progressStep = [
        {
            stepTxt: "Vendors",
            path: "/CreatePost/AddVendors",
            comps: <AddVendors
                value={vendors}
                setValue={setVendors}
                setNextStep={setCurrentStep}
                setCompletedStep={setCompletedStep}
                completedStep = {completedStep}
                stepRefresh={refresh}
                setStepRefresh={setRefresh}
            />
        },
        {
            stepTxt: "Project",
            path: "/CreatePost/AddProjectDetails",
            comps: <AddProjectDetails
                setNextStep={setCurrentStep}
                setCompletedStep={setCompletedStep}
                completedStep = {completedStep}
                stepRefresh={refresh}
                setStepRefresh={setRefresh}
            />
        },
        {
            stepTxt: "Phases",
            path: "/CreatePost/AddPhases",
            comps: <AddPhases
                value={phases}
                setValue={setPhases}
                setNextStep={setCurrentStep}
                setCompletedStep={setCompletedStep}
                completedStep = {completedStep}
                stepRefresh={refresh}
                setStepRefresh={setRefresh}
                setPhaseVendors={setVendors}
                phaseVendors={vendors}
            />
        },
        {
            stepTxt: "Preview",
            path: "/CreatePost/Preview",
            comps: <Preview/>
        }
    ];
    return(
        <Router>
            <div className={"create-container"}>
                <div className={"progress-container"}>
                    <ProgressBar
                        key={refresh}
                        progressStep={progressStep}
                        completedStep={completedStep}
                        currentStep={currentStep}
                    />
                </div>
                <SimpleBar className={"step-content"}>
                    <Switch>

                        {progressStep.map((r,i)=>(
                            <Route
                                key={i}
                                path={r.path}
                                children={r.comps}
                            />
                        ))}
                    </Switch>
                </SimpleBar>
                <div className={"right-side-bar-container" + " " + ((currentStep===4||currentStep===2)?"remove-right-side-bar":"show-right-side-bar")}>
                    <SideBar
                        key={refresh}
                        align={"top"}
                        color={"dark2"}
                        right={true}
                    >
                        <p className={"right-bar-title"}>Vendor List</p>
                        <div className={"vendor-container"}>
                            {vendors.map((o,i)=>{
                                return(
                                    <VendorCard
                                        title={o.name}
                                        category={o.category}
                                        vendors={vendors}
                                        setVendors={setVendors}
                                    />
                                )
                            })}
                        </div>
                    </SideBar>
                </div>
            </div>
        </Router>
    );
}
