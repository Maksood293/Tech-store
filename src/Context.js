import React, { Component } from "react";
import { storeProducts, detailProduct, featureProducts } from "./data";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    products: [],
    productDetails: detailProduct,
    featureProduct: featureProducts,
    cart: [],
    modalOpen:false,
    modalProduct:detailProduct,
    cartSubTotal:0,
    cartTax:0,
    cartTotal:0

  };
  componentDidMount() {
    this.setProducts();
  }

  setProducts = () => {
    let tempProduct = [];
    storeProducts.forEach((item) => {
      const singleItem = { ...item };
      tempProduct = [...tempProduct, singleItem];
    });
    this.setState(() => {
      return { products: tempProduct };
    });
  };
  //  product detail start
  getItem = (id) => {
    const product = this.state.products.find((item) => item.id === id);
    return product;
  };
  handleDetail = (id) => {
    const product = this.getItem(id);
    this.setState(() => {
      return { productDetails: product };
    });
  };
  //  product detail end
  // add to cart function start for product
  addToCart = (id) => {
    let tempProducts = [...this.state.products, ...this.state.featureProduct];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    this.setState(
      () => {
        return { products: tempProducts, cart: [...this.state.cart, product] };
      },
      () => {
        this.addTotal();
      }
    );
  };
  //  end add to cart for product
  
//   model function
openModal = id =>{
const product =this.getItem(id);
this.setState(()=>{
    return{modalProduct:product, modalOpen:true}
})
}
closeModal = ()=>{
    this.setState(()=>{
        return {modalOpen:false}
    })
}
// cart function
increment=(id)=>{
  let tempCart = [...this.state.cart];
  const selectedProduct = tempCart.find(item=>item.id===id)
 
  const index = tempCart.indexOf(selectedProduct);
  const product = tempCart[index];

  product.count = product.count + 1;
  product.total = product.count * product.price;

  this.setState(()=>{
    return{
      cart:[...tempCart]
    }
  },this.addTotal())
}
decrement=(id)=>{
  let tempCart = [...this.state.cart];
  const selectedProduct = tempCart.find(item=>item.id===id)
 
  const index = tempCart.indexOf(selectedProduct);
  const product = tempCart[index];
  product.count = product.count - 1;
  if(product.count===0){
    this.removeItem(id)
  }
  else{
    product.total = product.count * product.price;
    this.setState(()=>{
      return{
        cart:[...tempCart]
      }
    },this.addTotal())
  }

  
}
removeItem=(id)=>{
  // only one item will be removed from cart after apply this function
  let tempProducts = [...this.state.products];
  let tempCart = [...this.state.cart];
  tempCart = tempCart.filter(item => item.id !== id);
  
  // this function help reverse to product property which is added in cart
  let index = tempProducts.indexOf(this.getItem(id));
  let removeProduct = tempProducts[index];
  removeProduct.inCart= false;
  removeProduct.count= 0;
  removeProduct.total= 0;

  this.setState(()=>{
    return{
      cart:[...tempCart],
      products:[...tempProducts]
    };
  },()=>{
    this.addTotal();
  })

}
clearCart=()=>{
  this.setState(()=>{
    return{
      cart:[]
    };
  },()=>{
    // this call back function pass fresh copy of product 
    this.setProducts();
    this.addTotal();
  });
  
};
addTotal=()=>{
  let subTotal= 0;
  this.state.cart.map(item=>(subTotal += item.total));
  const temTax =subTotal*0.1;
  const tax = parseFloat(temTax.toFixed(2));
  const total = subTotal + tax
  this.setState(()=>{
    return{
      cartSubTotal:subTotal,
      cartTax:tax,
      cartTotal:total
    }
   
     
  })
}


  //  start feature product
  getItem1 = (id) => {
    const product = this.state.featureProduct.find((item) => item.id === id);
    return product;
  };

  handleDetail1 = (id) => {
    const product = this.getItem1(id);
    this.setState(() => {
      return { productDetails: product };
    });
  };
  //    end feature product

  addToCart1 = (id) => {
    let tempProducts1 = [...this.state.featureProduct];
    const index = tempProducts1.indexOf(this.getItem1(id));
    const product = tempProducts1[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    this.setState(
      () => {
        return { products: tempProducts1, cart: [...this.state.cart, product] };
      },
      () => {
        console.log(this.state);
      }
    );
  };
  
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          openModal:this.openModal,
          closeModal:this.closeModal,
          increment:this.increment,
          decrement:this.decrement,
          removeItem:this.removeItem,
          clearCart:this.clearCart,
          handleDetail1: this.handleDetail1,
          addToCart1: this.addToCart1,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;
export { ProductProvider, ProductConsumer };
