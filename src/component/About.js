import React from 'react';
import { Link } from "react-router-dom";
import { ButtonContainer } from './Button';
import Footer from './Footer';
import img from '../about1.png'

export default function About() {
    return (
        <>
            <div className="  " style={{overflow:'hidden'}}>
            <img src={img} className=" img-fluid " alt="product" style={{width:'100%', height:'400px',right:'0',top:'0'}} />
               
                {/* product info  */}
                <div className='container'>
                <div className="row" >
                  <div
                    className="col-10 mx-auto col-md-6 my-5"
                    style={{
                      paddingTop: "3rem",
                      overflow: "hidden",
                     
                    }}
                  >
                    <img src={img} className="mt-3 img-fluid " alt="product" style={{border:'6px solid black', opacity:'0.9'}} />
                  </div>
                  <div
                    className="col-10 mx-auto col-md-6 my-4
                            text-capitalize"
                    style={{
                      zIndex: "1",
                      paddingTop: "2rem",
                      paddingBottom: "2rem",
                      paddingLeft: "2rem",
                     
                    }}
                  >
                    <h2 className='text-title' style={{ color: "#232528", fontWeight: "bolder" }}>
                     
                        Our Store
                     
                    </h2>
                    <hr />
                    <h5 className="text-capitalize muted mt-3 mb-0">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque impedit ab deleniti doloremque quia quis libero deserunt repellendus sint earum?<br/>
                    <br/>

Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque impedit ab deleniti doloremque quia quis libero deserunt repellendus sint earum?
                    </h5>
                    <br />
                    <div>
                      <Link >
                       <ButtonContainer>More Info</ButtonContainer>
                      </Link>
                    </div>
                  </div>
                </div>
                </div>
             </div>
        
          <Footer/>
      
       
      </>
        
    )}
