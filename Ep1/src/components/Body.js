import Card from "./Card";
import {useState} from "react"
import { rest } from "../utils/constant";


const Body = () =>{
  let filterOb =[];
  const [List,setaList] = useState(rest);
  const [searchItems,setSearchItems] = useState("");
    return (
      <div className="body">
        <div className="filter">
          <div className="search">
            <input type="text" className="search-box" value={searchItems} onChange={(items) =>{
              setSearchItems(items.target.value)
            }}/>
            <button className="search-btn" onClick={()=>{
              const additems = rest.filter((obj) =>{
                return obj.Resname.toUpperCase().includes(searchItems.toUpperCase())
              })
              setaList(additems)
            }}>Search</button>

          </div>
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