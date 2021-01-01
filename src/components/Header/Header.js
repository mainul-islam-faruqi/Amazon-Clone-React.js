import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import { Link } from 'react-router-dom';
import {useStateValue} from '../../StateProvider';

const Header = () => {

    const [{basket}] = useStateValue();

    return (
        <div className="header">
            <Link to='/'> 
                <img
                    className="header__logo" 
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=""/>
            </Link>
            <div className="header__search">
                <input className="header__searchInput" type="text" name="" id=""/>
                <SearchIcon className="header__searchIcon"></SearchIcon>
            </div>
            <div className="header__nav">
                <Link to='/login'> 
                    <div className="header__option">
                        <span className="header__optionLineOne">
                            hello guest
                        </span>
                        <span className="header__optionLineTwo">
                            Sign In 
                        </span>
                    </div>
                </Link>

                <div className="header__option">
                    <span className="header__optionLineOne">
                        hello guest
                    </span>
                    <span className="header__optionLineTwo">
                        Sign In 
                    </span>
                </div>

                <div className="header__option">
                    <span className="header__optionLineOne">
                        hello guest
                    </span>
                    <span className="header__optionLineTwo">
                        Sign In 
                    </span>
                </div>

                <Link to='/checkout'>
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon className=""/>
                        <span className="header__optionLineTwo header__basketCount ">
                            {basket.length}
                        </span>
                    </div>
                </Link>

            </div>
        </div>
    );
};

export default Header;