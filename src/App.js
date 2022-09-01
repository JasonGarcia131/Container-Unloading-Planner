import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Main from "./Main";
import HomePage from "./pages/HomePage";

function App(){

    return(
        <div className="App">
           <Router>
            <Routes>
                <Route exact path="/" element={<HomePage/>}/>
                <Route exact path="/Main" element={<Main/>}/>
            </Routes>
           </Router>
        </div>
    )
}

export default App;