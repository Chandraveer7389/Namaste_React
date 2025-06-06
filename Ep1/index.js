/* <div id="parent">
    <div id=chinld>
         <h1>hey</h1>
         <h2>hello</h2>
    </div>
    <div id=chinld2>
         <h1>i am</h1>
         <h2>veer</h2>
    </div>


</div> */

const heading = React.createElement("div", { id: "parent" },
    [React.createElement("div", { id: "child" }, [React.createElement("h1", {}, "hey"), React.createElement("h1", {}, "hello")]),
    React.createElement("div", { id: "child2" }, [React.createElement("h1", {}, "i am "), React.createElement("h1", {}, "veer")])
    ])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(heading)