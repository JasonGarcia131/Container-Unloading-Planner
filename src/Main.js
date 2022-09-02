import "./App.css"
import SkuForm from "./components/SkuForm";
import React, {useEffect} from "react";
import {Link} from "react-router-dom"

function Main(){

  useEffect(()=>{},[])
    return(
      <div>
        <Link to="/" className="backLink">back</Link>
        <div className="formMargin">
          <SkuForm/>
        </div>
        
      </div>
    )
  }

export default Main;
