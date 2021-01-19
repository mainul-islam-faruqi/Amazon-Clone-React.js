import React, { forwardRef } from 'react';
import './CheckoutProduct.css';
import { useStateValue } from '../../StateProvider';

const CheckoutProduct = forwardRef(({id,title,image,price,rating, hideButton}, ref) => {
    const [{basket},dispatch] = useStateValue();

    const removeFromBasket = () => {
        // remove item form the basket 
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id: id,
        })
    }
    return (
        <div ref={ref} className='checkoutProduct'>
            <img className="checkoutProduct__image" src={image} alt=""/>

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title"> {title} </p>
                <p> 
                    <small> $ </small>
                    <strong> {price} </strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating)
                    .fill()
                    .map((_,i)=>(
                        <p> ⭐ </p>
                    ))}
                </div>
                {!hideButton && (
                    <button onClick={removeFromBasket}> Remove form basket </button>
                )}
                
            </div>
            
        </div>
    );
});

export default CheckoutProduct;