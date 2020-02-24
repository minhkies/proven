import React from "react";
import Header from "../../../comps/Header";

export default function AddProjectDetails() {
    return <div className={"add-project-details-container"}>
        <Header
            headingTxt={"Add Project Details"}
            subTxt={"Complete project details below to start a new project."}
            marginTop={false}
        />
    </div>;
}
