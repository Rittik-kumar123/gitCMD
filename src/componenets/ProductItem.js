import React,{ useState } from 'react';

import ProductDate from './ProductDate';
import Card from './Card';

import './ProductItem.css';

const ProductItem = (props) => 
{
    const [title, setTitle] = useState(props.title);
    //here title is a string and setTitle is a function to change the value of title
    //h/w -> how the variable changing as the it is const type
    //h/w->read useState documentation properly
    function handler()
    {
        //to update value on click we have to use setTitle(<name>)
        setTitle("popcorn");
        //h/w-> is setTitle function changes instantly or takes some time
        console.log("Clicked");
    }
    return(
        <Card className='product-Item'>
            <ProductDate date={props.date} />
            <div className='product-item_description'>
                <h2>{title}</h2>
            </div>
            <button onClick={handler}>Add to cart</button>
        </Card>
    );
};

export default ProductItem;