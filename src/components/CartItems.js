import React, { useState, useEffect } from 'react';
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react';
import {
    Link
} from 'react-router-dom';
import API from '../api/api';

const CartItems = ({cartId, id, name, price, productId, itemQuantity, setRender}) => {
    const [updateQuantity, setUpdateQuantity] = useState({quantity: itemQuantity});
    async function updateItemQuantity(e) {
        setUpdateQuantity({quantity: Number(e.target.value)})
        console.log(updateQuantity);
        console.log(id);
        try {
            const data = await API.makeRequest(`/cart_item/${id}`, 'PATCH', updateQuantity);
            console.log(data);
        } catch (error) {
            throw error;
        } finally {
            setRender(updateQuantity.quantity);
        }
    }

    async function removeItem(e) {
        try {
            const deleteItem = await API.makeRequest(`/cart_item/${id}`, 'DELETE');
            console.log(deleteItem);
        } catch (error) {
            throw error;
        } finally {
            setRender(Math.random())
        }
    }
    return (
        <div className='cart-item'>
            <h3>Name: {name}</h3>
            <h4>Price: {price}</h4>
            <h5>Quantity: <input defaultValue={itemQuantity} type='number' onChange={(e) => updateItemQuantity(e)}></input></h5>
            <div>
                <button onClick={(e) => removeItem(e)}>Remove Item</button>
            </div>
        </div>
    )
}

export default CartItems;