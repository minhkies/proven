import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import ProgressBar from "../../comps/ProgressBar";
import AddVendors from "./AddVendors";
import AddProjectDetails from "./AddProjectDetails";
import AddPhases from "./AddPhases";
import Preview from "./Preview/index.";

export default function CreatePost({setCollapse}) {
    setCollapse(true);
    let progressStep = [
        {
            stepTxt: "Vendors",
            path: "/CreatePost/AddVendors",
            comps: AddVendors
        },
        {
            stepTxt: "Project",
            path: "/CreatePost/AddProjectDetails",
            comps: AddProjectDetails
        },
        {
            stepTxt: "Phases",
            path: "/CreatePost/AddPhases",
            comps: AddPhases
        },
        {
            stepTxt: "Preview",
            path: "/CreatePost/Preview",
            comps: Preview
        }
    ];
    return(
        <Router>
            <div className={"create-container"}>
                <div className={"progress-container"}>
                    <ProgressBar
                        progressStep={progressStep}
                        completedStep={[]}
                        currentStep={1}
                    />
                </div>
                <div className={"step-content"}>
                    <Switch>
                        {progressStep.map((r,i)=>(
                            <Route
                                key={i}
                                path={r.path}
                                children={r.comps}
                            />
                        ))}
                    </Switch>
                </div>
            </div>
        </Router>
    )
}
