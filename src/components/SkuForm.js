import React, {useState,useEffect} from "react";
import Table from "./Table";
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

    const [tableData, setTableData] = useState([])

    const [clicked, setClicked] = useState(false);
    
    useEffect(()=>{},[])

    //onChange functions
    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleChangeColorForm = (index,e)=> {
        let data = [...colors];
        data[index][e.target.name] = e.target.value;
        setColors(data);
        console.log("colors on change", colors)
    }


    //onSubmit functions
    const handleSubmit = (e) => {
        e.preventDefault();
        
    }

    const addInput = (e) => {
        e.preventDefault()
        let newInput = {
            color: "",
            totalBoxes: 0
        }
        setColors([...colors, newInput])
    }

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

        setClicked(true);
        setTableData([...tableData, {formData, colors}]);
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


    }

    console.log("table data needed", tableData)

    const mappedColorField = colors.map((item, index) => {
        return  (
            <div key={index}>
                <div className="subFormWrapper">
                    <div className="inputWrapper">
                        <label htmlFor="colors">Enter color</label>
                        <input
                            type="text"
                            name="color"
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

    // const mappedSkuField = arrayOfSkuForm.map((item, index) => {
    //     return(
    //         <div className="mainFormWrapper" key={index} >
    //         <div className="skuWrapper">
    //             <label htmlFor="sku">Enter Sku</label>
    //             <input 
    //                 type="text"
    //                 name="sku"
    //                 value={formData.sku}
    //                 onChange={handleChange}
    //                 className="skuInput"
    //             />
    //             <label htmlFor="height">Enter Box height</label>
    //             <input  
    //                 type="number"
    //                 name="height"
    //                 value={formData.height}
    //                 onChange={handleChange}
    //                 className="heightInput"
    //             />
    //               {mappedColorField}  
    //             <div className="subFormBtnFlex">
    //                 <button onClick={addInput} className="skuWrapperBtns">Add Color</button> 
    //             </div>
    //         </div>
    //           {/* {clicked ? <Table formData={formData} colors={colors}/> : null} */}
    //     </div>
    //     )
    // })

    // return(
    //     <div>
    //         {mappedSkuField}
    //         <button onClick={addSkuForm}>Add New Sku</button> 
    //         <button onClick={handleSave}>Save</button>
    //     </div>
    // )
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
                <label htmlFor="height">Enter Box height</label>
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
                    {/* <button type="submit" onClick={handleSubmit} className="skuWrapperBtns">Submit</button> */}
                </div>
            </div>
            <button onClick={handleSave}>Save</button>
              {clicked ? <Table tableData={tableData} removeTable={(i)=>removeTable(i)}/> : null}
        </div>
    )
}

export default SkuForm