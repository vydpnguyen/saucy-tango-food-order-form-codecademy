import React, { useState } from "react";

function FoodOrderForm() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [order, submitOrder] = useState('');

    return(
        <form>
            <label htmlFor='name'>Name:</label>
            <input id='name'></input>
            <br/>
            <label htmlFor='phone'>Phone:</label>
            <input id='phone'></input>
            <br/>
            <label htmlFor='address'>Address:</label>
            <input id='address'></input>
            <br/>
            <label htmlFor='order'>Order:</label>
            <input id='order'></input>
            <br/>
            <button type='submit'>Submit Order</button>
        </form>
    );
}

export default FoodOrderForm;