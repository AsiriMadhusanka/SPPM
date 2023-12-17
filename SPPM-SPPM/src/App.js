import React, {Component} from "react";
import {BrowserRouter, Route,useParams} from "react-router-dom";
import {RequestContextProvider} from "./services/RequestContext";
import {UserContextProvider} from "./services/UserContext";

import Header from "../src/components/Header";
import Footer from "../src/components/Footer";

import Home1 from "./components/Home1";
import Home2 from "./components/Home2";

import Signin from "./pages/AuthenticationManagement/Signin";
import Profile from "./pages/AuthenticationManagement/Profile";
import AuthenticationManagement from "./pages/AuthenticationManagement/AuthenticationManagement";
import All_Data from "./pages/AuthenticationManagement/All_Data";
import All_Edit_Data from "./pages/AuthenticationManagement/All_Edit_Data";
import Add_Customer from "./pages/AuthenticationManagement/Add_Customer";
import Add_Admin from "./pages/AuthenticationManagement/Add_Admin";
import AuthenticationReport from "./pages/AuthenticationManagement/AuthenticationReport";
import Registration from "./pages/AuthenticationManagement/Registration";

import AdminDashboard from "./components/AdminDashboard";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Add_Product from "./pages/AuthenticationManagement/AddProdcut";
import Products from "./components/products";
import Cart from "./pages/Cart";
import CheckOut from "./components/Checkout";
import {Elements} from "@stripe/react-stripe-js";
import {loadStripe} from "@stripe/stripe-js";
import ViewOrders from "./components/veiwOrders";
import MyComponent from "./components/viewOrdersAdmin";
import AdminOreders from "./components/viewOrdersAdmin";
import deleteProducts from "./components/deleteProducts";
import DeleteProducts from "./components/deleteProducts";
import Predictor from "./components/predictor";
import SingleProduct from "./components/SingleProductView";

const promise = loadStripe('pk_test_51KWFYGDXB1RTaY3BZ6ZYHWXfYCTB9T9cGoMiQDPLqC7EvLGtLuXIK1ZRYpErh2lXtryUKaDs0dkJ8mOqxovNKIuN00KRNNuk9v')
export default class App extends Component {
    render() {
        return (
            <RequestContextProvider baseURL={"http://localhost:8000/"}>
                <UserContextProvider>
                    <BrowserRouter>
                        <Header/>
                        <div style={{backgroundColor: "#ffff", margin: "0"}}>

                            <Route path="/" exact component={Home1}/>
                            <Route path="/login" exact component={Signin}/>
                            <Route path="/Profile" exact component={Profile}/>
                            <Route path="/Products" exact component={Products}/>
                            <Route path="/AuthenticationManagement" exact component={AuthenticationManagement}/>
                            <Route path="/All_Data" exact component={All_Data}/>
                            <Route path="/alledit/:id" exact component={All_Edit_Data}/>
                            <Route path="/Add_Customer" exact component={Add_Customer}/>
                            <Route path="/Add_Admin" exact component={Add_Admin}/>
                            <Route path="/AuthenticationReport" exact component={AuthenticationReport}/>
                            <Route path="/Registration" exact component={Registration}/>
                            <Route path="/Add_product" exact component={Add_Product}/>
                            <Route path="/AdminDashboard" exact component={AdminDashboard}/>
                            <Route path="/AboutUs" exact component={AboutUs}/>
                            <Route path="/ContactUs" exact component={ContactUs}/>
                            <Route path="/Cart" exact component={Cart}/>
                            <Route path="/ViewOrders" exact component={ViewOrders}/>
                            <Route path="/orders-admin" exact component={AdminOreders}/>
                            <Route path="/DeleteProduct" exact component={DeleteProducts}/>
                            <Route path="/Predictor" exact component={Predictor}/>
                            <Route path="/SingleProduct/:prod" exact component={SingleProduct}/>
                            <Route exact path="/CheckOut" >
                                <Elements stripe={promise}>
                                    <CheckOut/>
                                </Elements>
                            </Route>


                        </div>
                    </BrowserRouter>
                </UserContextProvider>
            </RequestContextProvider>
        );
    }
}