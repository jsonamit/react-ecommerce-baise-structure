// @flow 
import React,{ useState,useEffect } from 'react';

import { useSelector } from 'react-redux';

import {Header} from '../../layouts/Header/Header';

export const ProductDetail = () => {

    //const [cartProductQuantity,setCartData] = useState(0);

    var productDetail = useSelector((state)=> state.product);

    useEffect(()=>{
       // setCartData(cart.numberCart);
    })

    return (
        <>
            <Header></Header>
            <section >
                <div className="container-fluid py-5">
                    <div className="row justify-content-center">
                        <div className="col-md-4 col-lg-4 col-xl-4">
                            <div className="card text-black">
                            <i className="fab fa-apple fa-lg pt-3 pb-1 px-3"></i>
                            <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/3.webp"
                                className="card-img-top"
                                alt="Apple Computer"
                            />
                            <div className="card-body">
                                <div className="text-center">
                                <h5 className="card-title">{productDetail.product.title}</h5>
                                <p className="text-muted mb-4">{productDetail.product.subtitle}</p>
                                </div>
                                <div>
                                <div className="d-flex justify-content-between">
                                    <span>Pro Display XDR</span><span>${productDetail.product.price}</span>
                                </div>
                                </div>
                                <div className="d-flex justify-content-between total font-weight-bold mt-4">
                                <span>Total</span><span>${productDetail.product.price}</span>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};