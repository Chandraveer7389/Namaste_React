import Card from "./Card";
import {useState} from "react"
import { rest } from "../utils/constant";


const Body = () =>{
  let filterOb =[];
  const [List,setaList] = useState(rest);
    return (
      <div className="body">
        <div className="filter">
            <button className="filter-btn" onClick={() =>{
                    filterOb=List.filter((obj) => {
                      if(obj.rating > 3.9){
                        return obj;
                      }
                      })
                    setaList(filterOb);
                }
            }>
                try me to get top rated restaurant
            </button>
        </div>
        <div className="res-container">
        {
            List.map((obj,index) => (
                <Card key={index} data={obj} />
            ))}
        </div>
      </div>
    )
  }
  export default Body; 