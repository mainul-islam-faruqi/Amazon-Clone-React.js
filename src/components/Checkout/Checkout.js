import React from 'react';
import './Checkout.css';
import Subtotal from '../Subtotal/Subtotal';
import { useStateValue } from '../../StateProvider';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import FlipMove from 'react-flip-move';

const Checkout = () => {

    const [{basket, user} , dispatch] =  useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img 
                className='checkout__ad'
                src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt=""/>

                <div className='checkout__title'>
                    <h3> Hello {user?.email} </h3>
                    <h2 > Your Shopping Basket </h2>
                </div>
                <FlipMove className="flip-wrapper"  duration={500}>
                    {basket.map(item =>(
                        <CheckoutProduct 
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ) )}
                </FlipMove>
            </div>

            <div className="checkout__right">
                <Subtotal/>
            </div>
        </div>
    );
};

export default Checkout;