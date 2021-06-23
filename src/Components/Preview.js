import React from 'react'

const Preview = ({value,name,age,text}) => {
    return (
        <div>
            <h1>Entered Value:{name}</h1>
            <p>Radio Selected:{value}</p>
            <p>Selected Option:{age}</p>
            <p>User suggestions:{text}</p>

            
        </div>
    )
}

export default Preview
