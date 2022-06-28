import React from "react";




function Links(prop){
    console.log(prop)
    return(
        <div>
            <h3>Links</h3>
            <a href={prop.linkedin}>{prop.linkedin}</a>
            <a href={prop.github}>{prop.github}</a>
        </div>
    )
}

export default Links