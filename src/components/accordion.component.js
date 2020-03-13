import React from 'react';
import { render } from '@testing-library/react';
import Item from './item.component'

function Accordion(props) {
    
    const renderAccordionItems = () => 
    props.arr.map((el) => <Item item={el}/>)
    
    return (<div>
    {renderAccordionItems()}
    </div>)
}


export default Accordion