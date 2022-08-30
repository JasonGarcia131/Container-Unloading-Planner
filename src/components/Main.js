import React, {useState,useEffect} from "react";
import Layout from "./Layout";

function Main(){

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

    const [inputArray, setInputArray] = useState([{
        formData: {},
        colors: []
    }])

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
        setClicked(!clicked);
        setInputArray([...inputArray, formData, colors])
        
        // const reset = ()=>{
        //     setFormData({
        //         sku: "",
        //         height: 0,
        //     })
        //     setColors(
        //         {
        //             color: "",
        //             totalBoxes: 0
        //         }
        //     )
        // }
        console.log("colors: ", colors)
        console.log("formData". formData)
        console.log("input array", inputArray)
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

    const mappedColorField = colors.map((item, index) => {
        return  (
            <div key={index}>
                <label htmlFor="colors">Enter color</label>
                <input
                    type="text"
                    name="color"
                    value={colors.color}
                    onChange={e=>handleChangeColorForm(index,e)}
                />
                <label htmlFor="totalBoxes">Total Boxes</label>
                <input 
                    type="number"
                    name="totalBoxes"
                    value={colors.totalBoxes}
                    onChange={e=>handleChangeColorForm(index,e)}
                />
                <button onClick={()=>removeInput(index)}>Remove</button>
            </div>
        )
    })

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <fieldset>
                <legend>Example</legend>
                <label htmlFor="sku">Enter Sku</label>
                <input 
                    type="text"
                    name="sku"
                    value={formData.sku}
                    onChange={handleChange}
                />
                <label htmlFor="height">Enter Box height</label>
                <input  
                    type="number"
                    name="height"
                    value={formData.height}
                    onChange={handleChange}
                />
                  {mappedColorField}  
                <button onClick={addInput}>Add Color</button> 
                <button type="submit" onClick={handleSubmit}>Submit</button>
                </fieldset>
            </form>
            {clicked ? <Layout formData={formData} colors={colors}/> : null}
        </div>
    )
}

export default Main