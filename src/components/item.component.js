import React, { useState } from 'react';


function Item (props){
    const [isVisible, setIsVisible] = useState(false)

    return (<div>
            <h2 onClick={() => setIsVisible(!isVisible)}>{props.item.title} </h2>
            {isVisible ? <p>{props.item.description}</p> : null}
    </div>
    )
}

export default Item;