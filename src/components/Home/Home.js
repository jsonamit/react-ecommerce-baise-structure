// @flow 
import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { addToCart } from '../../redux/reducers/cart/cartAction';
import {  setProductDetail } from '../../redux/reducers/product/productAction';
import { Header } from '../../layouts/Header/Header';
import productListJson from '../../database/product.json';

export const Home = () => {
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useSelector((s)=>{
        // console.log(s);
    });
   
    useEffect(() => {
      
    });

    function addToCartProduct(product) {
        let productdata = {
            "id" : product['id'],
            "quantity": product['quantity'],
            "title" : product['title'],
            "subtitle" : product['subtitle'],
            "accessories" : product['accessories'],
            "price" : product['price'],
            "img" : product['img']
        }
        dispatch(addToCart(productdata));
    }

    function navigateToProductDetail (product) {
        dispatch(setProductDetail(product));
        navigate('/product-detail');
    }
  

    return (
        <>
            <Header></Header>
            <section >
                <div className="container-fluid py-3">
                    <div className="row justify-content-center">
                        {
                            productListJson.map((product,index)=>
                                <ProductCard key={index} products={product} navigateToProductDetail={navigateToProductDetail} addToCartProduct={addToCartProduct} />
                            )
                        } 
                    </div>
                </div>
            </section>
        </>
    );
};


const ProductCard = (props) => {
    
    function addToCartProduct(props) {
        props.addToCartProduct(props.products);
    }

    function navigateToProductDetail(data) {
        props.navigateToProductDetail(data.products);
    }

    return (
        <div className="col-md-4 col-lg-4 col-xl-4">
            <div className="card text-black mt-2">
                <i className="fab fa-apple fa-lg pt-3 pb-1 px-3"></i>
                    <img
                        onClick={()=>navigateToProductDetail(props)}
                        src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/3.webp"
                        className="card-img-top"
                        alt="Apple Computer"
                    />

                <div className="card-body">
                    <div className="text-center">
                    <h5 className="card-title">{props.products.title}</h5>
                    <p className="text-muted mb-4">{props.products.subtitle}</p>
                    </div>
                    <div>
                    <div className="d-flex justify-content-between">
                        <span>Pro Display XDR</span><span>${props.products.price}</span>
                    </div>
                    </div>
                    <div className="d-flex justify-content-between total font-weight-bold mt-4">
                        <span></span><span><button onClick={()=>addToCartProduct(props)} className='btn btn-primary'>Add To Cart</button></span>
                    </div>
                </div>
            </div>
        </div>
    );
}