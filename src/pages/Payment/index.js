import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import ProgressBar from "../../comps/ProgressBar";
import Selection from "./Selection";
import Confirm from "./Confirm";
import Review from "./Review";
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';


export default function Payment() {
    let [completedStep, setCompletedStep] = useState([]);
    let [currentStep, setCurrentStep] = useState(1);
    let [refresh, setRefresh] = useState(true);
    let progressStep = [
        {
            stepTxt: "Payment",
            path: "/Payment/Selection",
            comps: <Selection/>
        },{
            stepTxt: "Review",
            path: "/Payment/Review",
            comps: <Review/>
        },{
            stepTxt: "Confirm",
            path: "/Payment/Confirm",
            comps: <Confirm/>
        }
    ];
    return(
        <Router>
            <div className={"payment-container"}>
                <div className={"progress-container"}>
                    <ProgressBar
                        key={refresh}
                        progressStep={progressStep}
                        completedStep={completedStep}
                        currentStep={currentStep}
                    />
                </div>
                <SimpleBar className={"payment-content"}>
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
            </div>
        </Router>
    )
}
