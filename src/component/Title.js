import React from 'react';
import styled from "styled-components";

export default function Title({name,title}) {
    return (
        <div className='row'>
        <ProductTitle className='col-10 mx-auto text-center text-title' style={{marginTop:'3rem', paddingBottom:'3rem'}}>
            <h1 className='text-capitalize font-weight-bold'> {name} <strong className="text-blue" style={{color:'#32046e'}}> {title}
            </strong>
                
            </h1>
        </ProductTitle>            
        </div>
    )
}
const ProductTitle = styled.div`
h1:after {
    content:' ';
    display:block;
    margin-top:0.5rem;
    margin-left:25rem;
    margin-right:25rem;
    border-bottom:4.5px solid #32046e;
    -webkit-border-radius:4px;
    -moz-border-radius:4px;
    zoom: 1;
    box-shadow:inset 0 1px 1px rgba(0, 0, 0, .05);
    -webkit-box-shadow:inset 0 1px 1px rgba(0, 0, 0, .05);
    -moz-box-shadow:inset 0 1px 1px rgba(0, 0, 0, .05);
}


`
