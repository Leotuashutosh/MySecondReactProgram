import React from "react"
function SchComponent(props){
    return(
        <div>
        <h3 >{props.name}</h3>
        <h3> {props.price}</h3>
        <h3> {props.description}</h3>
        <hr />
        </div>
    )
}
export default SchComponent