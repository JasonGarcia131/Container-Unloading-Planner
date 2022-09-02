import React, {useState,useEffect} from "react";
import Table from "./Table";
import ReactHTMLTableToExcel from "react-html-table-to-excel"

function SkuForm(){

    //State variables
    const [formData, setFormData] = useState({
        sku: "",
        height: 0,
    })
    
    const [colors,setColors] = useState([
        {
            color: "",
            totalBoxes: 0
        }
    ])

    const [tableData, setTableData] = useState([]);

    const [clicked, setClicked] = useState(false);

    const [message, setMessage] = useState("");

    useEffect(()=>{},[])

    //onChange functions
        // name and value keys are deconstructed to pass to the state variable
    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData({
            ...formData,
            [name]: value
        });
    }

    //This function takes an array of inputs
        //need to find a way to only use handleChange function.
    const handleChangeColorForm = (index,e)=> {
        let data = [...colors];
        data[index][e.target.name] = e.target.value;
        setColors(data);
    }

    //This function creates the array of inputs
    const addInput = (e) => {
        e.preventDefault();
        let newInput = {
            color: "",
            totalBoxes: 0
        }
        setColors([...colors, newInput]);
    }

    //This function removes index that was clicked
    const removeInput = (index) => {
        let data = [...colors];
        data.splice(index,1);
        setColors(data);
    }

    const removeTable = (index) => {
        let data = [...tableData];
        data.splice(index,1);
        setTableData(data);
    }

    const handleSave = () => {
        //Checks to see if any input field is not empty
        if(formData.sku.length > 0 && formData.height > 0 && colors.length > 0){
            setTableData([...tableData, {formData, colors}]);
           //Resets the state variables
            setFormData({
                sku: "",
                height: 0,
            })
            setColors([
                {
                    color: "",
                    totalBoxes: 0
                }
            ])
            setClicked(true);
            setMessage("");
        }else{
            setMessage("Missing fields!")
            setTimeout(()=>{setMessage("")},3000)
        }

    }

    const mappedColorField = colors.map((item, index) => {
        return  (
            <div key={index}>
                <div className="subFormWrapper">
                    <div className="inputWrapper">
                        <label htmlFor="colors">Enter color</label>
                        <input
                            type="text"
                            name="color"
                            autoFocus
                            value={colors.color}
                            onChange={e=>handleChangeColorForm(index,e)}
                            className="subFormInput"
                        />
                    </div>
                    <div className="inputWrapper">
                        <label htmlFor="totalBoxes">Total Boxes</label>
                        <input 
                            type="number"
                            name="totalBoxes"
                            value={colors.totalBoxes}
                            onChange={e=>handleChangeColorForm(index,e)}
                            className="subFormInput"
                        />
                    </div>
                    <div onClick={(index)=>removeInput(index)} className="removeX">
                        <div className="x" id="x1"></div>
                        <div className="x" id="x2"></div>
                    </div>
                </div>
            </div>
        )
    })

    return(
        <div className="mainFormWrapper" >
            <div className="skuWrapper">
                <div className="inputWrapper">
                <label htmlFor="sku">Enter Sku</label>
                <input 
                    type="text"
                    name="sku"
                    value={formData.sku}
                    onChange={handleChange}
                    className="skuInput"
                />
                </div>
                <div className="inputWrapper">
                <label htmlFor="height">Enter Box Height</label>
                <input  
                    type="number"
                    name="height"
                    value={formData.height}
                    onChange={handleChange}
                    className="heightInput"
                />
                </div>
                
               
                  {mappedColorField}  
                <div className="subFormBtnFlex">
                    <button onClick={addInput} className="skuWrapperBtns">Add Color</button> 
                </div>
            </div>
            <button className="createPlanBtn" onClick={handleSave}>Create Plan</button>
                <p className="errorMessage">{message}</p>
            {clicked ? <Table tableData={tableData} removeTable={(i)=>removeTable(i)}/>  : null}
            {clicked ? <ReactHTMLTableToExcel table="unloading-floor-plan" fileName="floor-plan"/> : null}
            
        </div>
    )
}

export default SkuForm