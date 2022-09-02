import React, {useEffect} from "react";

function Table(props){

    useEffect(()=>{},[]);
    
    const mappedColors = props.tableData.map((item,i) => {
        let column = 0;
        let maxHeight = 0;
        //Checks the box height input value and assigns a maxHeight accordingly
        if(item.formData.height > 0 && item.formData.height <= 9){
            maxHeight = 10
        }else if(item.formData.height > 9 && item.formData.height <= 11){
            maxHeight = 9
        }else if(item.formData.height > 11 && item.formData.height <= 13){
            maxHeight = 7
        }else if(item.formData.height > 13 && item.formData.height <= 16){
            maxHeight = 6
        }else if(item.formData.height > 16 && item.formData.height <= 20){
            maxHeight = 5
        }else if(item.formData.height > 20){
            maxHeight = 4
        }
        //loops through the array and returns data in a table
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
                <div onClick={()=>props.removeTable(i)} className="removeX">
                    <div className="x" id="x1"></div>
                    <div className="x" id="x2"></div>
                </div>
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