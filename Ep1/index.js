import React from "react";
import { createRoot } from "react-dom/client"; 


const heading = React.createElement("div", { id: "parent" },
    [React.createElement("div", { id: "child" }, [React.createElement("h1", {}, "hey"), React.createElement("h1", {}, "hello")]),
    React.createElement("div", { id: "child2" }, [React.createElement("h1", {}, "i am "), React.createElement("h1", {}, "veer")])
    ])

const root = createRoot(document.getElementById("root"))
root.render(heading)