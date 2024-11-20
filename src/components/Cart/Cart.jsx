// import React from 'react';
import PropTypes from 'prop-types';
import "./Cart.css"

const Cart = ({cart, handleRemoveFromCart}) => {
    return (
        <div>
            <h3>Cart: {cart.length}</h3>

            <div className="cart-container">
                {
                    cart.map(bottle => <div key={bottle.id}>
                        <img src={bottle.img} alt='water bottle' />
                        <button onClick={() => handleRemoveFromCart(bottle.id)}>X</button>
                    </div>)
                }
            </div>
        </div>
    );
};

Cart.propTypes = {
    cart: PropTypes.array.isRequired,
    handleRemoveFromCart: PropTypes.func.isRequired
}

export default Cart;