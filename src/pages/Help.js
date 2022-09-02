import {Link} from "react-router-dom"

function Help(){
    return(
        <div>
            <Link to="/">back</Link>
            <div className="helpPage">
                <h1>Instructions</h1>
                <div>
                    <p>Enter a sku number in the input box shown below:</p>
                    <img src="../skuhelpimg.png" alt="sku input screenshot"/>
                </div>
                <div>
                    <p>Enter a box height in the input box shown below:</p>
                    <img src="../boxheighthelp.png" alt="box height input screenshot"/>
                </div>
                <div>
                    <p>You can add multiple colors and total boxes with the click of a button:</p>
                    <img src="../addcolorhelpimg.png" alt="add input screenshot"/>
                </div>
                <div>
                    <p>Once the data is correct, click "create plan" and see your floor plan created:</p>
                    <img src="../createplanhelpimg.png" alt="create plan button screenshot"/>
                </div>
                <div>
                    <p>Make sure to fill out every field:</p>
                    <img src="../errormessagehelpimg.png" alt="error message screenshot"/>
                </div>
                <div>
                    <p>Red "X" will remove data:</p>
                    <img src="../removehelpimg.png" alt="remove icon screenshot"/>
                </div>
                <div>
                    <Link to="/Main">Give it a try</Link>
                </div>
            </div>
        </div>
    )
}

export default Help;