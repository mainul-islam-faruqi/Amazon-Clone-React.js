import { useElements, useStripe, CardElement } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useStateValue } from '../../StateProvider';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import {getBasketTotal}  from '../../reducer';
import './Payment.scss';
import CurrencyFormat from 'react-currency-format';
import axios from '../../axios';
import {db} from '../Login/firebase';

const Payment = () => {
    const [{basket, user}, dispatch]  = useStateValue();
    const history = useHistory();

    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError ] = useState(null);    
    const [disabled, setDisabled ] = useState(true);
    const [clientSecret, setClientSecret ] = useState(true);
    
    useEffect(() => {
        // generate the special stripe secret which allows us to charge the customer
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                // Stripe expects the total is a currencies submits
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret)
        }

        getClientSecret();
    }, [basket])

    console.log("The secret is >>>> ", clientSecret);

    // const handleSubmit = async event => {
    //     // do somthing fancy stripe stuff
    //     event.preventDefault();
    //     setProcessing(true);

    //     // setClientSecret("pi_1IBMnsL2Eb4HEaVe1mXyQsMy_secret_cXRNqDeGm4sYNBQ0oIMnDpsM9")
    //     const payload = await stripe.confirmCardPayment(clientSecret, {
    //         payment_method: {
    //             card: elements.getElement(CardElement)
    //         }
    //     }).then(({paymentIntent}) => {
    //         // paymentIntent = payment confirmation

    //         db.collection('users')
    //         .doc(user?.uid)
    //         .collection('orders')
    //         .doc(paymentIntent.id)
    //         .set({
    //             basket: basket,
    //             amount: paymentIntent.amount,
    //             created: paymentIntent.created
    //         })

    //         setSucceeded(true);
    //         setError(null)
    //         setProcessing(false)

    //         dispatch({
    //             type: 'EMPTY_BASKET'
    //         })

    //         history.replace('/orders')
    //     })
    // }

    // This is temporary bcz my card is not available and so my backend firebase cloud function is not working
    // so I saved this file to the database directly
    const handleSubmit = async event => {
        // do somthing fancy stripe stuff
        event.preventDefault();
        setProcessing(true);

        const paymentIntent = {
            id: "pi_1IB1piL2Eb4HEaVedlWGkhhw",
            amount: getBasketTotal(basket) * 100,
            created: new Date()
        }

        db.collection('users')
            .doc(user?.uid)
            .collection('orders')
            .doc(paymentIntent.id)
            .set({
                basket: basket,
                amount: paymentIntent.amount,
                created: paymentIntent.created
            })

            setSucceeded(true);
            setError(null)
            setProcessing(false)

            dispatch({
                type: 'EMPTY_BASKET'
            })

            history.replace('/orders')

       
    }
    const handleChange = event => {
        // Listen for changes in the CardElement
        // and display any errors as the customer types their card details
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }    

    return (
        <div className="payment">
            <div className="payment__container">
                <h1> Checkout (<Link to="/checkout"> {basket?.length}  items  </Link>)</h1>
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
                        <form action="" onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />
 
                            <div className="payment__priceContainer">
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <h3> Order Total: {value} </h3>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandsSeparator={true}
                                    prefix={"$"}
                                />
                                <button disabled={processing || disabled || succeeded }>
                                    <span> {processing ? <p> Processing</p> : "Buy Now"} </span>
                                </button>
                            </div>
                            {/* Errors */}
                            {error && <div> {error} </div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;