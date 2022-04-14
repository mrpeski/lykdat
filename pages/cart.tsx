import React from 'react';
import useMultipleIds from "../hooks/useMultipleIds";
import Header from "../components/Header";
import {NextPage} from "next";

const Cart: NextPage = () => {
    const cartItems = useMultipleIds();

    return <React.Fragment>
        <Header />
        <h4>Cart</h4>
        <div className="products">
            {cartItems?.map(id => <div key={id} className={"item"}>{id}</div>)}
        </div>
    </React.Fragment>
};

export default Cart;
