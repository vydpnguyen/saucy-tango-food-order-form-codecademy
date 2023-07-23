import React, { useState } from "react";

function FoodOrderForm() {
    return(
        <form>
            <label htmlFor='name'>Name:</label>
            <input id='name'></input>
            <label htmlFor='phone'>Phone:</label>
            <input id='phone'></input>
            <label htmlFor='addres'>Address:</label>
            <input id='address'></input>
            <label htmlFor='order'>Order:</label>
            <input id='order'></input>
            <button type='submit'>Submit Order</button>
        </form>
    );
}

export default FoodOrderForm;