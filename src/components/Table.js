import React, {useEffect, useState} from "react";

function Table(props){

    useEffect(()=>{},[])
    
    const mappedColors = props.tableData.map((item,i) => {
        console.log("item from table", item)
        let column = 0;
        let maxHeight = 0;
        
        if(item.formData.height <= 11){
            maxHeight = 9
        }else if(item.formData.height > 11 && item.formData.height <= 13){
            maxHeight = 7
        }else if(item.formData.height > 13 && item.formData.height <= 16){
            maxHeight = 6
        }else if(item.formData.height > 16 && item.formData.height <= 19){
            maxHeight = 5
        }else if(item.height > 20){
            maxHeight = 4
        }
        
        const arrayColors = item.colors.map(b=>{
        column = Math.ceil(b.totalBoxes/maxHeight);
           return(
            <tr>
                <td>
                    {b.color.toUpperCase()}
                </td>
                <td>
                    {maxHeight}
                </td>
                  <td>{column}</td>
                <td>
                    {b.totalBoxes}
                </td>
            </tr>

           ) 
        })
        return (
            <div key={i}>
            <h3>Style: {item.formData.sku.toUpperCase()}</h3>
            <table>
            <thead>
            <th>Color</th>
            <th>Boxes Per Column</th>
            <th>Number of Columns</th>
            <th>Total Boxes</th>
            </thead>
            {arrayColors}
            </table>
            </div>
        );
    })

            return(
                <div className="tableWrapper">
                   {mappedColors}
                </div>
            )

}

export default Table;