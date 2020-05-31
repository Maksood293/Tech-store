import React, { Component } from "react";
import { ProductConsumer } from "../Context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";
import Footer from './Footer';

export default class ProductDetail extends Component {
  render() {
    return (
      <>
        <ProductConsumer>
          {(value) => {
            const {
              id,
              company,
              img,
              info,
              price,
              title,
              inCart,
            } = value.productDetails;
            return (
              <div className="container py-5 ml-2">
                {/* title */}
                <div className="row">
                  <div className="col-10 mx-auto text-center text slanted my-4">
                    <h1
                      style={{
                        color: "#32046e",
                        fontSize: "3rem",
                        marginTop: "3rem",
                      }}
                    >
                      {title}
                    </h1>
                  </div>
                </div>

                {/* end title */}
                {/* product info  */}
                <div className="row">
                  <div
                    className="col-10 mx-auto col-md-6 my-5"
                    style={{
                      backgroundImage:
                        "linear-gradient(180deg, #32046e, #04a3ffef)",
                      paddingTop: "3rem",
                      boxShadow: "0 20px 20px rgba(0,0,0,0.2)",
                      overflow: "hidden",
                      right: "-9rem",
                    }}
                  >
                    <img src={img} className="mt-3 img-fluid " alt="product" />
                  </div>
                  <div
                    className="col-10 mx-auto col-md-6 my-4
                            text-capitalize"
                    style={{
                      left: "-1rem",
                      zIndex: "1",
                      backgroundColor: "#fff",
                      paddingTop: "2rem",
                      paddingBottom: "2rem",
                      paddingLeft: "2rem",
                      boxShadow: " 0 50px 50px rgba(0,0,0,0.3)",
                    }}
                  >
                    <h2 style={{ color: "#232528", fontWeight: "bolder" }}>
                      model : {title}{" "}
                      <span
                        className="badge badge-primary"
                        style={{ color: "#fff", fontSize: "1.2rem" }}
                      >
                        new
                      </span>
                    </h2>
                    <h4
                      className="text-title text-uppercase 
                                text-muted mt-3 mb-2"
                    >
                      made by :{" "}
                      <span className="text-uppercase">{company}</span>
                    </h4>
                    <hr />
                    <h5 className="text-capitalize font-weight-bold mt-3 mb-0">
                      some info about product:
                    </h5>
                    <br />
                    <p className="text-muted lead">{info}</p> <br />
                    <hr />
                    <div>
                      <Link to="ProductList">
                        <ButtonContainer>Back To Product</ButtonContainer>
                      </Link>
                      <ButtonContainer
                        cart
                        disabled={inCart ? true : false}
                        onClick={() => {
                          value.addToCart(id);
                          value.openModal(id);

                        }}
                      >
                        {inCart ? "inCart" : "add to cart"}
                      </ButtonContainer>
                      <h3
                        style={{
                          display: "inline",
                          position: "absolute",
                          right: "3rem",
                        }}
                      >
                        <strong>
                          price : <span>$</span>
                          {price}
                        </strong>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            );
          }}
        </ProductConsumer>
        <Footer/>
      </>
    );
  }
}
