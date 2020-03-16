import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import ProgressBar from "../../comps/ProgressBar";
import Selection from "./Selection";
import Confirm from "./Confirm";
import Review from "./Review";
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import AddVendors from "../CreatePost/AddVendors";


export default function Payment() {
    let [completedStep, setCompletedStep] = useState([]);
    let [currentStep, setCurrentStep] = useState(1);
    let [refresh, setRefresh] = useState(true);
    let [data, setData] = useState({});
    let progressStep = [
        {
            stepTxt: "Payment",
            path: "/Payment/Selection",
            comps: <Selection
                setNextStep={setCurrentStep}
                setCompletedStep={setCompletedStep}
                completedStep = {completedStep}
                stepRefresh={refresh}
                setStepRefresh={setRefresh}
                data={data}
                setData={setData}
            />
        },{
            stepTxt: "Review",
            path: "/Payment/Review",
            comps: <Review
                setNextStep={setCurrentStep}
                setCompletedStep={setCompletedStep}
                completedStep = {completedStep}
                stepRefresh={refresh}
                setStepRefresh={setRefresh}
                data={data}
                setData={setData}
            />
        },{
            stepTxt: "Confirm",
            path: "/Payment/Confirm",
            comps: <Confirm
                setNextStep={setCurrentStep}
                setCompletedStep={setCompletedStep}
                completedStep = {completedStep}
                stepRefresh={refresh}
                setStepRefresh={setRefresh}
                data={data}
                setData={setData}
            />
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
