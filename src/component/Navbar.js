import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {ButtonContainer} from './Button'


export default class Navbar extends Component {
    render() {
        return (
           <>
           <NavWrapper className='navbar sticky-top navbar-expand-sm  navbar-dark px-sm-5' style={{zIndex:'2'}} >
            <Link to='/' style={{textDecoration:'none'}}>
               <h2 style={{color:'#fff',fontWeight:'bold'}}>Tech<span className='text-muted' style={{fontWeight:'bold',marginLeft:'4px'}}>Store</span></h2>
                
            </Link>
            
            <ul className='navbar-nav align-item-center'>
            <li className='nav-item ml-5'>
                <Link to='/' className='nav-link'>
                    home
                </Link>


            </li> 
            
            <li className='nav-item ml-5'>
                <Link to='/ProductList' className='nav-link'>
                    products
                </Link>

            </li>
            <li className='nav-item ml-5'>
                <Link to='/Contact' className='nav-link'>
                    Contact Us
                </Link>

            </li>
            <li className='nav-item ml-5'>
                <Link to='/About' className='nav-link'>
                    About Us
                </Link>

            </li>

            </ul>
            <Link to='/Cart' className='ml-auto'>
                <ButtonContainer>
                    <span className='mr-2'>
                    <i className='fas fa-cart-plus' aria-hidden="true"/>
                    </span>
                    my cart
                </ButtonContainer>
            </Link>
           </NavWrapper>
           
           </>
        )
    }
}
const NavWrapper = styled.nav`
background:var(--mainBlue);
top: 0;
z-index:1;
width:100%;
.nav-link{
    color:var(--mainWhite) !important;
    font-size:1.3rem;
    text-transform:capitalize;
}
`

