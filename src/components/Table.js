import React, {useEffect, useState} from "react";

function Table(props){

    useEffect(()=>{},[])

    const {sku, height} = props.formData

    console.log("color from layout", props.colors)
    
    const mappedColors = props.colors.map((item,i) => {
        console.log("sku from mapped data", sku)
        console.log('item from mapped colors', item)
        let column = 0;
        let maxHeight = 0;
        
        if(height <= 11){
            maxHeight = 9
        }else if(height > 11 && height <= 13){
            maxHeight = 7
        }else if(height > 13 && height <= 16){
            maxHeight = 6
        }else if(height > 16 && height <= 19){
            maxHeight = 5
        }else if(height > 20){
            maxHeight = 4
        }
        column = Math.ceil(item.totalBoxes/maxHeight);

        return(
                <tr index={i}>
                    <td>{item.color.toUpperCase()}</td>
                    <td>{maxHeight}</td>
                    <td>{column}</td>
                    <td>{item.totalBoxes}</td>
                </tr>
        )
    })

            return(
                <div className="tableWrapper">
                    <h3 className="skuHeader">Style: {sku.toUpperCase()}</h3>
                    <table>
                        <thead>
                            <th>Color</th>
                            <th>Boxes Per Column</th>
                            <th>Number of Columns</th>
                            <th>Total Boxes</th>
                        </thead>
                        {mappedColors}
                    </table>
                </div>
            )

}

export default Table;