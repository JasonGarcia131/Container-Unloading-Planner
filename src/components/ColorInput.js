import React, { useState,useEffect } from 'react'
import Layout from './Layout'

function ColorInput(props){

    const {sku, height} = props

    useEffect(()=>{},[])
   const [formData,setFormData] = useState({
    color: "",
    totalBoxes: 0
   })

   const [plan, setPlan] = useState(false)

   const handleChange = (e) => {
    const {name, value} = e.target
    setFormData({
        ...formData,
        [name] : value
    })
    console.log("inside COlor", formData)
   }

   const handleClick = (e) => {
    e.preventDefault()
    setPlan(!plan);
   }
   console.log("plan", plan)
   
//    const renderPlan = () => {

//    }
            return (
                <div>
                    <form>
                    <label htmlFor="color">Enter Color</label>
                    <input 
                        type="text"
                        name="color"
                        value={formData.color}
                        onChange={handleChange}
                    />
                    <label htmlFor='totalBoxes'>Total Boxes</label>
                    <input 
                        type="number"
                        name="totalBoxes"
                        value={formData.totalBoxes}
                        onChange={handleChange}
                    />
                    <button onClick={handleClick}>Submit</button>
                    </form>
                    {plan ? <Layout value={formData} sku={sku} height={height}/> : null}
                </div>
            )
}

export default ColorInput;