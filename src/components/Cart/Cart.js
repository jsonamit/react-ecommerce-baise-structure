// @flow 
import React,{ useState,useEffect } from 'react';

import { useSelector,useDispatch } from 'react-redux';
import { addQuantity } from '../../redux/reducers/cart/cartAction';
import { Header } from '../../layouts/Header/Header';
import './Cart.css';

export const Cart = () => {
    const dispatch = useDispatch();
    // const [cartData,setCartData] = useState('');

    var cart = useSelector((state)=> state.cart);

    useEffect(()=>{
     
    })

    function addPQuantity(product) {
        
        if(product !==undefined){
            dispatch(addQuantity(product));
        }
        
    }

    return (
        <>
            <Header></Header>

            <section className="mt-5">
                <div className="container">
                    <div className="cart">
                        <div className="table-responsive">
                            <table className="table">
                                <thead className="thead-dark">
                                    <tr>
                                        <th scope="col" className="text-white">Product</th>
                                        <th scope="col" className="text-white">Price</th>
                                        <th scope="col" className="text-white">Quantity</th>
                                        <th scope="col" className="text-white">Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        cart.items.map(
                                            (data,index)=> 
                                            <tr key={index}>
                                                <td>
                                                    <div className="main">
                                                        <div className="d-flex">
                                                            <img src={data.img} height="55" />
                                                        </div>
                                                        <div className="desx">
                                                            <p>{data.title}</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <h6>${data.price}</h6>
                                                </td>
                                                <td>
                                                    <div className="counter">
                                                        <i className="minus">-</i>
                                                            <input className="input-number" disabled value={data.quantity} type="number" min="0"max="10" />
                                                        <i className="plus" onClick={()=>addPQuantity(data)}>+</i>
                                                    </div>
                                                </td>
                                                <td>
                                                    <h6>${data.price}</h6>
                                                </td>
                                            </tr>
                                        )
                                    }
                                
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            <div className="col-lg-4 offset-lg-4">
                <div className="checkout">
                    <ul>
                        <li className="subtotal">subtotal
                            <span> ${cart.total}</span>
                        </li>
                        <li className="cart-total">Total
                        <span> ${cart.total}</span></li>
                    </ul>
                    <button className='btn btn-primary'>Proceed to Checkout</button>
                </div>
            </div>
        </>
    );
};