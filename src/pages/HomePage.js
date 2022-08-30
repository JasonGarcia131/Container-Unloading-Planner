import {Link} from "react-router-dom"

function HomePage(){

    return(
        <div className="homepage">
            <h2>Welcome</h2>
            <p>Let's get started</p>
            <Link to="/Main">Start</Link>
        </div>
    )
}

export default HomePage