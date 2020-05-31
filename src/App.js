import React,{Component} from 'react';
import {Switch,Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './component/Navbar';
import ProductList from './component/ProductList';
import ProductDetail from './component/ProductDetail';
import Cart from './component/Cart';
import Default from './component/Default';
import Section from './component/Section';
import Contact from './component/Contact';
import About from './component/About';
import Modal from './component/Modal';


class App extends Component {
  
  render() { 
    return ( 
      <React.Fragment>
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Section}/>
        <Route path='/ProductList' component={ProductList}/>
        <Route path='/Contact' component={Contact}/>
        <Route path='/ProductDetail' component={ProductDetail}/>
        <Route path='/About' component={About}/>
        <Route path='/Cart' component={Cart}/>
        <Route path='/Default' component={Default}/>
      </Switch>
      <Modal/>
      
      </React.Fragment>
     );
  }
}
 
export default App;
