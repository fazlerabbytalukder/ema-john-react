import React from 'react';

const ReiewItem = (props) => {
    const { name, price, quantity,key } = props.product;
    const { handleRemove } = props;
    return (
        <div className='product'>
            <div>
            <h4 className='product-name'>{name}</h4>
            <p>price: {price}</p>
            <p>Quantity: {quantity}</p>
            <button onClick={() => handleRemove(key)} className='btn-regular'>Remove Item</button>
            </div>
        </div>
    );
};

export default ReiewItem;