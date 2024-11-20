// import React from 'react';
import PropTypes from "prop-types";
import "./Bottle.css"

const Bottle = ({ bottle, handleAddCart }) => {
    // console.log(bottle);
    const { name, img, price, seller } = bottle;
    return (
        <div className='bottle'>
            <h3>Bottle</h3>
            <h4>{name}</h4>
            <img src={img} alt="" />
            <div className='bottle-info' style={{display: "flex", justifyContent: "space-between", alignItems: "center", fontWeight: "600"}}>
                <p>${price}</p>
                <p>Seller: {seller}</p>
                <button onClick={() => handleAddCart(bottle)}>Add to cart</button>
                
            </div>
        </div>
    );
};

Bottle.propTypes = {
    bottle: PropTypes.object.isRequired,
    handleAddCart: PropTypes.func.isRequired
}

export default Bottle;