// import React, { useEffect, useState } from 'react';
import { useEffect, useState } from 'react';
import Bottle from '../Bottle/Bottle';
import "./Bottles.css"
import { dataFromLs, removeFromLs, saveData } from '../../utilities/localStorage';
import Cart from '../Cart/Cart';

const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    const [cart, setCart] = useState([]);

    const handleAddCart = (bottle) => {
        const newCart = [...cart, bottle];
        setCart(newCart)
        saveData(bottle.id);
    }

    const handleRemoveFromCart = (id) => {
        console.log(id);
        const remainingCartItems = cart.filter(bottle => bottle.id !== id);
        setCart(remainingCartItems);

        // Remove from local storage...
        removeFromLs(id);
    }

    useEffect(() => {
        fetch("bottles.json")
            .then(res => res.json())
            .then(data => setBottles(data))
    }, [])

    useEffect(() => {
        if (bottles.length) {
            const cartData = dataFromLs();
            // console.log(cartData);
            if (cartData.length > 0) {
                const saveCart = [];
                for (const id of cartData) {
                    const bottle = bottles.find(bottle => bottle.id === id)
                    console.log(bottle);
                    if (bottle) {
                        saveCart.push(bottle);
                    }
                }
                setCart(saveCart);
            }
        }
        // setCart(cartData)
    }, [bottles])

    return (
        <div>
            <div style={{ display: "flex", flexDirection: "column", textAlign: "left"}}>
                <h2>Total Bottles: {bottles.length}</h2>
                <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
            </div>

            <div className='bottle-container'>
                {
                    bottles.map((bottle) => <Bottle key={bottle.id} bottle={bottle} handleAddCart={handleAddCart}></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;