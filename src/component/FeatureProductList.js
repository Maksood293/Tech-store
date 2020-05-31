import React, { Component } from 'react'
import Title from './Title';
import {featureProducts} from '../data';
import { ProductConsumer } from '../Context';
import FProduct from './FProduct';


export default class FeatureProductList extends Component {
    state = { 
        products:featureProducts
     };
    render() { 
        return ( 
            <React.Fragment>
                <div className='py-5'>
                    <div className='container'>
                        <Title name='Feature' title='products'/>
                        <div className='row'>
                        <ProductConsumer>
                            {value =>{
                                return value.featureProduct.map(product=>{
                                     return <FProduct key={product.id} product={product}/>;
                                 });
                            }}
                        </ProductConsumer>
                        </div>

                    </div>

                </div>

               
               
            </React.Fragment>
         );
    }
}

