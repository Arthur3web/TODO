import React from 'react';

function Product({name, cost}) {

    return <p>
        name: <span>{name}</span>,
        cost: <span>{cost}</span>
    </p>;
}

export default Product;