import React from 'react'
import ComponentC from "./ComponentC";

export default (props) => {
    return(
        <div>
            <ComponentC number = {props.number}/>
        </div>
    )
}