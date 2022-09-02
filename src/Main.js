import "./App.css"
import SkuForm from "./components/SkuForm";
import React, {useEffect} from "react";
import {Link} from "react-router-dom"

function Main(){

  useEffect(()=>{},[])
    return(
      <div>
        <h1 className="title">Container Unloading Plan</h1>
        <Link to="/" className="backLink">back</Link>
        <div className="formMargin">
          <SkuForm/>
        </div>
        
      </div>
    )
  }

export default Main;
