import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"
import Body from "./components/Body";
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import About from "./components/about"
import Error from "./components/error";


const App = ()=>{
  return (
    <div className="app">
      <Header/>
      <Outlet/>
      
    </div>
  )
}
const appRouter = createBrowserRouter([{
  path:"/",
  element:<App/>,
  children : [{
    path:"/",
    element:<Body/>,
  },
    {
    path:"/about",
    element:<About/>
  }],
  errorElement:<Error/>,
},
])


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router = {appRouter}/>);
