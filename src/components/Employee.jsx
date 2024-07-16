import React from "react";
import Skills from './Skills'


function Employee(props) {
        

    return(
        <div>
                 <h1>Hello, {props.name}</h1>
                 <h1> Your Emp id:{props.empid}</h1>
                 <Skills empskills='Softwere Engineer'></Skills>



        </div>
    )
}

export default Employee