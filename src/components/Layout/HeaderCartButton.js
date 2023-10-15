import React, { useContext, useState, useEffect } from 'react'
import classes from "./HeaderCartButton.module.css"
import CartIcon from '../Cart/CartIcon'
import CartContext from '../../store/cart-context'
const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartctx = useContext(CartContext);

  const  numberOfCartItems = cartctx.items.reduce((curNumber, item) =>{
    return curNumber + item.amount
  }, 0);

  const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

  useEffect(() => {
    if (cartctx.items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [cartctx.items]);
  return (
    <button className={btnClasses} onClick={props.onClick}>
        <span className={classes.icon}><CartIcon /></span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  )
}

export default HeaderCartButton