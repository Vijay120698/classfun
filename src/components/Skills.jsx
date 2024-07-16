import React from "react";
import FullDetails  from "./FullDetails";

function Skills(props)
{

    return(
        <div>
            <h1 style={{colour:'red'}}>
                my skils:{props.empskills}
                <FullDetails location='chennai'></FullDetails>
            </h1>
        </div>
    )
}


export default Skills