import React, {useEffect} from "react";

function Layout(props){

    useEffect(()=>{},[])

    const {color, totalBoxes} = props.colors;
    const {sku, height} = props.formData

    console.log("color from layout", props.colors)
    const boxesPerColumn = () => {
       
    }
    
    const mappedColors = props.colors.map((item,i) => {
        console.log("sku from mapped data", sku)
        console.log('item from mapped colors', item)
        let column = 0;
        let numOfColumn = 0;
        let maxHeight = 0;
        
        if(height < 14){
        maxHeight = 6
        column = item.totalBoxes/maxHeight
        }
        else if(height > 14 && height < 20){
        maxHeight = 4
        column = item.totalBoxes/maxHeight
        }
        numOfColumn = item.totalBoxes/column

        return(
                <tr index={i}>
                    <td>{sku}</td>
                    <td>{item.color}</td>
                    <td>{maxHeight}</td>
                    <td>{column}</td>
                    <td>{item.totalBoxes}</td>
                </tr>
        )
    })
            return(
                <div>
                    <table>
                        <thead>
                            <th>Style</th>
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

export default Layout;