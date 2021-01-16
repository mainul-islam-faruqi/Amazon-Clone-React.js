import React from 'react';
import { useStateValue } from '../../StateProvider';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import './Payment.scss';

const Payment = () => {
    const [{basket, user}, dispatch]  = useStateValue();
    return (
        <div className="payment">
            <div className="payment__container">
                {/* Payment section -- delivery address */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3> Delivery Address </h3>
                    </div>
                    <div className="payment__address">
                        <p> {user?.email} </p>
                        <p> 123 React Developer Lane </p>
                        <p> Dhaka, Bangladesh </p>
                    </div>
                </div>
                {/* Payment section -- Review Items */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3> Review items and delivery </h3>
                    </div>
                    <div className="payment__items">
                        {/* all the products */}
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>
                {/* Payment section -- Payment method */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3> Payment Method </h3>
                    </div>

                    <div className="payment__details">
                        {/* Stripe magic will go */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;