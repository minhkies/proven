import React from "react";
export default function PreviewInfoDisplay({title, content, marginTop, edit}){
    return <div className={"info-display-container"}>
        <p className={"preview-info-title" + " " + (!marginTop&&"remove-margin-top")}>{title}</p>
        <p className={"preview-info-content"}>{content}</p>
    </div>
}

PreviewInfoDisplay.defaultProps={
    title: "Title",
    content: "content",
    marginTop: true,
};
