import * as React from 'react';
import {
    Route,
    Routes
} from "react-router-dom";

import { Home } from '../components/Home/Home';
import { ProductDetail } from '../components/ProductDetail/ProductDetail';
import { Cart } from '../components/Cart/Cart';

export const Routing = () => {
    return (
        <div>
             <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/product-detail" element={<ProductDetail />}></Route>
                <Route path="/cart" element={<Cart />}></Route>
            </Routes>
        </div>
    );
};