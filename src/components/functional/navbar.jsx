import React from 'react'
import { useContext } from 'react';
import productContext from '../../context/products';

const Navbar = (props) => {

    const productContext = useContext(productContext)

    return (
        <nav className='navbar navbar-light bg-light'>
            <div className='container-fluid'>
                <a hret='#' className='nav-bar-brand'>
                    Navbar {calculateSum()}
                </a>
            </div>

        </nav>
    )

    function calculateSum (){
        let sum = 0;
        productContext.products.forEach(p => { sum += p.count;});
        return sum;
    }
}

export default Navbar

