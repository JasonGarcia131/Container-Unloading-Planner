import "./App.css"
import SkuForm from "./components/SkuForm";
import React, {useState, useEffect} from "react";

function Main(){

  useEffect(()=>{},[])
  const [skuForm, setSkuForm] = useState([]);

  const addInput = (e) => {
    e.preventDefault()
    setSkuForm([...skuForm, <SkuForm/>])
}

const removeInput = (index) => {
    let data = [...skuForm];
    data.splice(index,1);
    setSkuForm(data);
}

const mappedSkuField = skuForm.map((item, index) => {
  return  (
      <div key={index} className="mainFormFlex">
          {item}
          <button className="mainFormRemoveBtn" onClick={()=>removeInput(index)}>Remove</button>
      </div>
  )
})
    return(
      <SkuForm/>
    )
  // return (
  //   <div className="main">
  //     <h1>Container Unloading Planner</h1>
  //     {mappedSkuField}
  //     <button onClick={addInput}>Add New Sku</button> 
  //     <button>Master Submit</button>
  //   </div>
  // );
}

export default Main;
