import React,{Component} from 'react';
import styled from 'styled-components';
import Footer from './Footer';


class Contact extends Component {
	constructor(props) {
	  super(props);
	  this.state = {Fname: '',
					Lname:'',
					Email:'',
					phone:'',
					msg:''
	            };
	}
	handleSubmit=(event)=>{
		alert('form was submitted');
		event.preventDefault();
		this.setState({Fname:''});
		this.setState({Lname:''});
		this.setState({Email:''});
		this.setState({phone:''});
		this.setState({msg:''});
	}
  
	handleChange=(event)=> {
	  this.setState({[event.target.name]: event.target.value});
	}
	
	
	render() {
    return (
           <>
		 <div>
		   
		   <div style={{  left:'-90px', padding:'100px 200px',marginBottom:'-140px', zIndex:'1'}}>
			   <h1 style={{letterSpacing:'7px',fontSize:'3rem',fontWeight:'bold'}} >Contact us</h1>
			   <div style={{width:'150px',height:'4px',backgroundColor:'#32046e'}}></div>
			   </div>
		   </div>
           <MainSection1>
              
               <section className='mt-5 mb-1'>
    <div className="container">
		<div className="contactInfo">
			<div>
				<h2>Contact Info</h2>
				<ul className="info">
					<li>
						<span><i className="fas fa-3x fa-map-marked-alt" style={{color:'#fff', opacity:'0.5'}}></i></span>
						<span>2912 Faridabad Road <br/>
							Haryana, India<br/>121010 </span>
					</li>
					<li>
						<span><i className="fas fa-3x fa-envelope-open-text" style={{color:'#fff', opacity:'0.5'}}></i></span>
						<span>lorem123@gmail.com</span>
					</li>
					<li>
						<span><i className="fas fa-3x fa-phone-volume" style={{color:'#fff', opacity:'0.5'}}></i></span>
						<span>9882849890</span>
					</li>
				</ul>
				</div>
				<ul className="sci">
					<li><a href="https://www.youtube.com/" valid><i className="fab fa-2x fa-facebook-square" style={{opacity:'0.5'}}></i></a></li>
					<li><a href="https://www.youtube.com/" valid><i className="fab fa-2x fa-twitter-square" style={{opacity:'0.5'}}></i></a></li>
					<li><a href="https://www.youtube.com/" valid><i className="fab  fa-2x fa-instagram-square" style={{opacity:'0.5'}}></i></a></li>
					<li><a href="https://www.youtube.com/" valid><i className="fab  fa-2x fa-pinterest-square" style={{opacity:'0.5'}}></i></a></li>
					<li><a href="https://www.youtube.com/" valid><i className="fab  fa-2x fa-linkedin" style={{opacity:'0.5'}}></i></a></li>
				</ul>
			
			
		</div>
		<div className="contactForm">
			<h2>Send a Message</h2>
			<form  onSubmit={this.handleSubmit}>
			<div className=" formBox">
				<div className="inputBox w50">
					<input type="text" name="Fname" required value={this.state.Fname} onChange={this.handleChange}/>
					<span>First Name</span>
					
				</div>
				<div className="inputBox w50">
					<input type="text" name="Lname" required value={this.state.Lname} onChange={this.handleChange}/>
					<span>Last Name</span>
					
				</div>
				<div className="inputBox w50">
					<input type="email" name="Email" required  value={this.state.Email} onChange={this.handleChange}/>
					<span>Email Address</span>
					
				</div>
				<div className="inputBox w50">
					<input type="text" name="phone" required  value={this.state.phone} onChange={this.handleChange}/>
					<span>Mobile Number</span>
					
				</div>
				<div className="inputBox w100">
					<textarea name="msg"  value={this.state.msg} onChange={this.handleChange}></textarea>
					<span>Write Your Message Here...</span>
					
				</div>
				<div className="inputBox w100">
					<input type="submit" value="Send" />
				</div>	
					
	
			</div>
			</form>
			
		</div>
	</div>
    </section>
  </MainSection1>
  <Footer/>  
  </>
       
    )
}}
export default Contact;
const MainSection1 = styled.section`
*{
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	
}
section{
    z-index:1;
	position: relative;
	justify-content: center;
	align-items: center;
	display: flex;
	min-height: 100vh;
	
}
section::before{
	content: '';
	position: absolute;
	top: 0;
	left:0;
	width: 50%;
	height: 100%;
	
}
section .container{
	position: relative;
	min-width: 1100px;
	min-height: 550px;
	display: flex;
	z-index: 1000;
}
section .container .contactInfo{
	position: absolute;
	top: 40px;
	width: 350px;
	height: calc(100% - 80px);
	background: #32046e;
	z-index: 1;
	padding: 40px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	box-shadow: 0 20px 20px rgba(0,0,0,0.2);

}
section .container .contactInfo h2{
	color: #fff;
	font-size: 24px;

}
section .container .contactInfo .info{
	position: relative;
	margin: 20px 0;
}
section .container .contactInfo .info li{
	list-style: none;
	position: relative;
	display: flex;
	margin: 20px 0;
	cursor: pointer;
	align-items: flex-start;
}
section .container .contactInfo .info li span:nth-child(1) i{
	max-width: 100%;
	filter: invert(1);
	opacity: 0.5;
}
section .container .contactInfo .info li span:nth-child(2){
	color: #fff;
	margin-left: 12px;
	margin-top: 10px;
	font-weight: 300;
	opacity: 0.5;
}
section .container .contactInfo .info li:hover span:nth-child(1) i,
section .container .contactInfo .info li:hover span:nth-child(2){
	opacity: 1;
}
section .container .contactInfo .sci{
	position: relative;
	display: flex;

}
section .container .contactInfo .sci li{
	list-style: none;
	margin-right: 15px;
}
section .container .contactInfo .sci li a{
	text-decoration:none;
	color: #fff;

}
section .container .contactInfo .sci li a i{
	filter: invert(1);
	opacity: 0.5;
}
section .container .contactInfo .sci li:hover a i{
	opacity: 1;
}
section .container .contactForm{
	position: absolute;
	padding: 70px 50px;
	background: #fff;
	margin-left: 150px;
	padding-left: 250px;
	width: calc(100% - 150px);
	height: 100%;
	box-shadow: 0 50px 50px rgba(0,0,0,0.5);
}
section .container .contactForm h2{
	color: #0f3959;
	font-size: 24px;
	font-weight: 500;
}
section .container .contactForm .formBox{
	position: relative;
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	padding-top: 30px;
}
section .container .contactForm .formBox .inputBox{
position: relative;
margin: 0 0 30px 0;

}
section .container .contactForm .formBox .inputBox.w50{
	width: 47%;
}
section .container .contactForm .formBox .inputBox.w100{
	width: 100%;
}
section .container .contactForm .formBox .inputBox input,
section .container .contactForm .formBox .inputBox textarea
{
	width: 100%;
	padding: 5px 0;
	resize: none;
	font-size: 18px;
	font-weight: 300;
	color: #333;
	border: none;
	outline: none;
	border-bottom: 1px solid #777;
}
section .container .contactForm .formBox .inputBox textarea{
	min-height: 120px;
}
section .container .contactForm .formBox .inputBox span{
	position: absolute;
	left: 0;
	padding: 5px 0;
	font-size: 18px;
	font-weight: 300;
	color: #333;
	transition: 0.5s;
	pointer-events: none;

}
section .container .contactForm .formBox .inputBox input:focus ~ span,
section .container .contactForm .formBox .inputBox textarea:focus ~ span,
section .container .contactForm .formBox .inputBox input:valid ~ span,
section .container .contactForm .formBox .inputBox textarea:valid ~ span
{
	transform: translateY(-20px);
	font-weight: 400;
	font-size: 14px;
	letter-spacing: 1px;
	color:#32046e;
}
section .container .contactForm .formBox .inputBox input[type="submit"]
{
	position: relative;
	cursor: pointer;
	background: #32046e;
	color: #fff;
	border: none;
	max-width: 150px;
	padding: 12px;
	transition: all ease 0.5s;
}
section .container .contactForm .formBox .inputBox input[type="submit"]:hover
{
	transform:scale(1.1);
}
@media (max-width: 1100px){
section .container .contactForm{
	width: calc(100% - 300px);
	}
section .container .contactInfo{
	margin-left:3rem;
	width: 300px;
	height: calc(100% - 90px);
}

}
@media (max-width: 1035px){
	section .container .contactInfo{
	margin-left:6rem;
	width: 300px;
	height: calc(100% - 100px);

}


`

