import { useState } from 'react';
import './ProductForm'

function ProductForm(props)
{
    const[newTitle,setTitle] = useState('');
    const[newDate,setDate] = useState('');
    function titleChangeHandler(event)
    {
        setTitle(event.target.value);
    }
    function dateChangeHandler(event)
    {
        setDate(event.target.value);
        console.log(newTitle);
        console.log(newDate);
    }

    function submitHandler(event)
    {
        event.preventDefault();

        const productData ={
            title:newTitle,
            date:newDate
        };
        console.log(productData);
        props.onSaveProduct(productData);
        
        setTitle('');
        setDate('');
    }

    return(
        <form onSubmit={submitHandler}>
            <div className='new-prouct_controls'>
                <div className='new-product_controls'>
                    <label>Title</label>
                    <input type='text' value={newTitle} onChange={titleChangeHandler}></input>
                </div>
                <div className='new-product_controls'>
                    <label>Date</label>
                    <input type='date' value={newDate} onChange={dateChangeHandler} min='2023-01-01' max='2023-12-12'></input>
                </div>
                <div className='new-product_button'>
                    <button type='submit'>Add products</button>
                </div>
            </div>
        </form>
    );
}

export default ProductForm;