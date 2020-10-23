import React from 'react';
import ComponentB from "./ComponentB";

export default (props) => {
    return(
        <div>
            <ComponentB number = {props.number}/>
        </div>
    )
}