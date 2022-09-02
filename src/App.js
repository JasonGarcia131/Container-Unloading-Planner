import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Main from "./Main";
import HomePage from "./pages/HomePage";
import Help from "./pages/Help";

function App(){

    return(
        <div>
           <Router>
            <Routes>
                <Route exact path="/" element={<HomePage/>}/>
                <Route exact path="/Main" element={<Main/>}/>
                <Route path="/Help" element={<Help/>}/>
            </Routes>
           </Router>
        </div>
    )
}

export default App;