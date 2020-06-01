import React, { Component } from 'react';
import styled from 'styled-components';
import { ButtonContainer2, ButtonContainer } from './Button';
import { Link } from 'react-router-dom';
import img from '../Comp2.png';
import Footer from './Footer';
import FeatureProductList from './FeatureProductList';




class Section extends Component {

    render() {
        return (
            <>
            <MainSection className='section'>
                <div className='container Main'>
                    <div className='row'>
                    <div className=' col-10 col-md-6 mx-auto  typo'>
                        <h2 className='text text-title'>AWESOME GADGETS </h2>
                        <p className='text-muted text1'>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                 ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                </p>

                               <Link to='/ProductList'>
                                 <ButtonContainer2 className='our-btn'>

                                <span className='text-uppercase text-white spam'>
                                    our product
                                </span>
                                 </ButtonContainer2>
                                </Link>

                    </div>
                    <div className='col-10 col-md-6 mx-auto img-flex img3 '>
                     <img src={img} alt='e-com' className='img1'>
                     </img>


                 </div>
                 </div>
                 </div>
            </MainSection>

            <MainSection2  >
                <div className='container PaySec'>
                <div className='row text-center '>
                    <div className='col-sm-4 anim'>
                        <span> <i className="fa fa-truck fa-3x" aria-hidden="true"/></span>
                     
                       
                   
                    <h4 >Free Shipping</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, voluptate!</p>
                    </div>
                    <div className='col-sm-4 anim  fa-3x'>
                         <span><i className="fas fa-redo-alt"></i></span>
                   
                    <h4>30 Days Return Policy</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, voluptate!</p>
                    </div>
                    <div className='col-sm-4 anim'>
                        <span> <i className="fas fa-dollar-sign fa-4x"></i></span>
                   
                    <h4>Secured Payment</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, voluptate!</p>
                    </div>

                </div>
                </div>

            </MainSection2>
           <FeatureProductList/>
           <div className='text-center mb-5'>
           <Link to='/ProductList'>
                                 <ButtonContainer >

                                <span className='text-uppercase' style={{padding:'5px 8px'}}>
                                    our product
                                </span>
                                 </ButtonContainer>
                                </Link>
              
           </div>
            <Footer/>
            </>
        );
    }
}

export default Section;

const MainSection = styled.section`
background:var(--mainBlue);
overFlow:hidden;

.Main{
    padding-top:12rem;
   
}
.typo{
    color:var( --mainWhite);
    z-index:1;
   
    
   
    
}


.img1{
    max-width:100%;
    width:620px;
    height:570px;
    padding-bottom:8rem;
    margin-top:-6rem;
    margin-right:10rem;
   
   
   
}

.text{
    font-size:2.5rem;
    padding-left:1rem;
    margin-bottom:1rem;
    
   
  
}
.text1{
    font-size:1.3rem;
}
.our-btn{
    margin-left:6rem;
    margin-top:1.8rem;
    font-size:1.4rem;
    letter-spacing:3px;
    
    
}

`
const MainSection2 = styled.div`
background:var(--lightBlue1);


.PaySec{
    
    padding-top:4rem;
    padding-bottom:4rem;
    color:var(--mainDark)
}
.anim{
    transition:all 1s linear;
}
.anim:hover{
    transform:scale(1.01);
}

h4{
    padding-top:1.8rem;
    padding-bottom:1rem;
}
p{
    font-size:1.2rem;
    opacity:0.8;
}
span{
    color:#04a3ff;
}
spas{
    color:#04a3ff;
}
h1{
    text-shadow: 1px 1px 4px white;
}

`
