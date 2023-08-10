import React from "react";


const Terminator = ({id,name,serialnumber}) =>{
    return (
        <div className="float-start">
            <img src={`https://robohash.org/${id}`} alt="terminator" width="auto" height="180"/>
            <div>
                <h2>{name}</h2>
                <p>SN: {serialnumber}</p>
            </div>
        </div>
    )
}
export default Terminator;