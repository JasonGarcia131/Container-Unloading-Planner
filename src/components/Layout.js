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
        if(height < 14){
          return column = item.totalBoxes/6
        }
        else if(height > 14 && height < 20){
            return column = item.totalBoxes/4
        }
        return(
                <tr index={i}>
                    <td>{sku}</td>
                    <td>{item.color}</td>
                    <td>{item.totalBoxes}</td>
                    <td>{column}</td>
                </tr>
        )
    })
            return(
                <div>
                    <table>
                        {/* <thead>
                            <th>Style</th>
                            <th>Color</th>
                            <th>Boxes Per Column</th>
                            <th>Number of Columns</th>
                        </thead> */}
                        {mappedColors}
                    </table>
                </div>
            )

}

export default Layout;