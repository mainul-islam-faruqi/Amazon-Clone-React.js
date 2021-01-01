import React from 'react';
import './Home.css';
import Product from '../Product/Product';

const Home = () => {
    return (
        <div className='home'>
            <div className="home__container">
                <img 
                className="home__image"
                src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg" alt=""/>

                <div className="home__row">
                    <Product
                        id="4903851"
                        title="Microsoft Surface Pro 7 – 12.3 Touch-Screen – Platinum with Black Type Cover"
                        price={999.99}
                        image="https://m.media-amazon.com/images/I/714cHoaDUpL._AC_UL320_.jpg"
                        rating={5}
                    />
                    <Product
                        id="4903852"
                        title="Apple MacBook Pro MLUQ2LL/A 13-inch Laptop, 2.0GHz dual-core Intel Core i5, 256GB, Retina Display, Silver"
                        price={24.99}
                        image="https://m.media-amazon.com/images/I/61DjtpWIkWL._AC_UY218_.jpg" 
                        rating={5}
                    />
                </div>

                <div className="home__row">
                    <Product
                            id="4903850"
                            title="Apple Watch Series 5 (GPS + Cellular, 40MM) - Gold Aluminum Case with Pink Sand Sport Band "
                            price={199.99}
                            rating={3}
                            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                        />
                        <Product
                            id="23445930"
                            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                            price={98.99}
                            rating={5}
                            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                        />
                        <Product
                            id="3254354345"
                            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                            price={598.99}
                            rating={4}
                            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                        />
                </div>

                <div className="home__row">
                    <Product
                            id="90829332"
                            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                            price={1094.98}
                            rating={4}
                            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                        />
                </div>
            </div>
        </div>
    );
};

export default Home;