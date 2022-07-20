// @flow 
import React,{ useState,useEffect } from 'react';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';

export const Header = () => {

    const [cartData,setCartData] = useState(0);

    var cart = useSelector((state)=> state.cart);

    useEffect(()=>{
        setCartData(cart);
    })

    return (
        <>
         <header className="section-header">
            <nav className="navbar navbar-dark navbar-expand p-0 bg-dark">
                <div className="container-fluid">
                    <ul className="navbar-nav d-none d-md-flex mr-auto">
                        <li className="nav-item"><a className="nav-link" href="#" data-abc="true">Cash On Delivery</a></li>
                        <li className="nav-item"><a className="nav-link" href="#" data-abc="true">Free Delivery</a></li>
                        <li className="nav-item"><a className="nav-link" href="#" data-abc="true">Cash Backs</a></li>
                    </ul>
                    <ul className="navbar-nav d-flex align-items-center">
                        <li className="nav-item">
                            <div className="d-flex flex-row"> 
                            
                                <img src="https://i.imgur.com/EYFtR83.jpg" className="rounded-circle pointer" width="30" /> 
                            
                            </div>
                        </li>
                        <li className="nav-item"> <a href="#" className="nav-link d-flex align-items-center" data-abc="true"><span>Nantano M</span><i className='bx bxs-chevron-down'></i></a> </li>
                    </ul> 
                </div> 
            
            </nav> 
            <section className="header-main border-bottom bg-white">
                <div className="container-fluid">
                    <div className="row p-2 pt-3 pb-3 d-flex align-items-center">
                        <div className="col-md-2"> 
                            <Link to='/'>
                            <img className="d-none d-md-flex" src="https://i.imgur.com/R8QhGhk.png" width="100" /> 
                            </Link>
                        </div>
                        <div className="col-md-8">
                            <div className="d-flex form-inputs"> <input className="form-control" type="text" placeholder="Search any product..." /> <i className="bx bx-search"></i> </div>
                        </div>
                        <div className="col-md-2">
                            <Link to='/cart'>
                                <div className="d-flex d-none d-md-flex flex-row align-items-center"> 
                                    <span className="shop-bag mr-2"><img width={40} src="https://pngimg.com/uploads/shopping_cart/shopping_cart_PNG17.png"/></span>
                                    <div className="d-flex flex-column ms-2">
                                        <span className="qty">{cartData.numberCart} Product</span> <span className="fw-bold">${cartData.total}</span> 
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid"> <a className="navbar-brand d-md-none d-md-flex" href="#">Categories</a> <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span> </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item"> <a className="nav-link active" aria-current="page" href="#">Electronics</a> </li>
                            <li className="nav-item"> <a className="nav-link" href="#">Fashion</a> </li>
                            <li className="nav-item"> <a className="nav-link" href="#">Furnitures</a> </li>
                            <li className="nav-item dropdown"> <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false"> Mobiles </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a className="dropdown-item" href="#">Smart Phones</a></li>
                                    <li><a className="dropdown-item" href="#">Feature Phones</a></li>
                                    <li><a className="dropdown-item" href="#">Mobile Covers</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
        </>
    );
};