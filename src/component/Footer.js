import React from 'react';
import styled from 'styled-components';


export default function Footer() {
    return (
        <>
        <MainSection2 style={{backgroundColor:'#fff'}}>
    <footer className='container'>
      <div className="footer-container ">
        <div className="left-col">
          <img src="logo.png" alt="" className="logo"/>
          <div className="social-media">
            <a href="https://www.youtube.com/"><i className="fab fa-facebook-f"></i></a>
            <a href="https://www.youtube.com/"><i className="fab fa-twitter"></i></a>
            <a href="https://www.youtube.com/"><i className="fab fa-instagram"></i></a>
            <a href="https://www.youtube.com/"><i className="fab fa-youtube"></i></a>
            <a href="https://www.youtube.com/"><i className="fab fa-linkedin-in"></i></a>
          </div>
          <p className="rights-text">Copyright © 2020 Created By Maksood All Rights Reserved.</p>
        </div>

        <div className="right-col">
          <h1>Our Newsletter</h1>
          <div className="border"></div>
          <p>Enter Your Email to get our news and updates.</p>
          <form action="" className="newsletter-form">
            <input type="text" className="txtb" placeholder="Enter Your Email"/>
            <input type="submit" className="btn" value="submit"/>
          </form>
        </div>
      </div>
    </footer>
    
    </MainSection2>		
			
		
        </>
    )
}
const MainSection2 = styled.section`


footer{
    background: #fff;
    padding: 40px 0;
  }
  
  .footer-container{
    max-width: 1300px;
    margin: auto;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap-reverse;
  }
  
  .logo{
    width: 180px;
  }
  
  .social-media{
    margin: 20px 0;
  }
  
  .social-media a{
    color:#32046e;
    margin-right: 25px;
    font-size: 22px;
    text-decoration: none;
    transition: .3s linear;
  }
  
  .social-media a:hover{
    color: #001a21;
  }
  
  .right-col h1{
    font-size: 26px;
  }
  
  .border{
    width: 100px;
    height: 4px;
    background: #32046e;
  }
  
  .newsletter-form{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
  
  .txtb{
    flex: 1;
    padding: 18px 40px;
    font-size: 16px;
    color: #293043;
    background: #ddd;
    border: none;
    font-weight: 700;
    outline: none;
    min-width: 260px;
    border-radius:10px;
  }
  
  .btn{
    padding: 18px 40px;
    font-size: 16px;
    color: #f1f1f1;
    background: #32046e;
    border: none;
    border-radius:10px;
    font-weight: 700;
    outline: none;
    margin-left: 20px;
    cursor: pointer;
    transition: opacity .3s linear;
  }
  
  .btn:hover{
    opacity: .7;
  }
  
  .page-content{
    min-height: 100vh;
    font-size: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  @media screen and (max-width:960px) {
    .footer-container{
      max-width: 600px;
    }
    .right-col{
      width: 100%;
      margin-bottom: 60px;
    }
  
    .left-col{
      width: 100%;
      text-align: center;
    }
  }
  
  
  @media screen and (max-width:700px){
    .btn{
      margin: 0;
      width: 100%;
      margin-top: 20px;
      }
  }
  
`
