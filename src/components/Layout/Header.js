import React, { Fragment } from 'react';

import mealsImage from "../../assests/meals1.jpg";

import classes from "./Header.module.css";
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1 className={classes.h1}>ReactMeals</h1>
                <HeaderCartButton onClick={props.onShowCart} />
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt="A table full ofdelicious food" />
            </div>
        </Fragment>
    )
}

export default Header;