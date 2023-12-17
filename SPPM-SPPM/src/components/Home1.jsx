import React, {Component, useEffect, useState} from 'react'
import Card from './Card';
import Video from './Video';
import img1 from '../images/slide_img01.jpg';
import img2 from '../images/slide_img02.jpg';
import img3 from '../images/slide_img03.jpg';
import img4 from '../images/slide_img04.jpg';
import img5 from '../images/slide_img05.jpg';
import image1 from "../images/image1.jpg";
import Add_Product from "../pages/AuthenticationManagement/AddProdcut";
import {message, Row} from "antd";
import useRequest from "../services/RequestContext";
import VCard from "./Card";
import './Home1.css'
import Footer from "./Footer";

function Home1() {
    const {request} = useRequest();
    const [products, setProducts] = useState();

    useEffect(() => {

        async function getProd() {
            try {
                let result = await request.post("http://localhost:8000/product/getProducts");
                setProducts(result.data?.Products)

            } catch (error) {
                console.log(" error ", error);
                message.error(error.message);
            }
        }

        getProd()
    }, []);


    console.log(products)

    return (
        <div className="main_home">


            {/* Create home page slide show */}
            <div style={{}}>

                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0"
                                className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                                aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                                aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3"
                                aria-label="Slide 4"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4"
                                aria-label="Slide 5"></button>
                    </div>

                    <div className="carousel-inner">

                        <div className="carousel-item active">
                            <img src={img1} className="d-block w-100" alt="..."/>
                        </div>

                        <div className="carousel-item">
                            <img src={img2} className="d-block w-100" alt="..."/>
                        </div>

                        <div className="carousel-item">
                            <img src={img3} className="d-block w-100" alt="..." s/>
                        </div>

                        <div className="carousel-item">
                            <img src={img4} className="d-block w-100" alt="..."/>
                        </div>

                        <div className="carousel-item">
                            <img src={img5} className="d-block w-100" alt="..."/>
                        </div>

                    </div>
                </div>
            </div>

            <div className="container">
                <div className="home_container">
                    <div className="row hidden-md-up">
                        {products?.map((item) => (
                            <VCard key={item._id} item={item}/>
                        ))}
                    </div>
                </div>
            </div>
            <br/>
            <Video/>


        </div>

    )

}

export default Home1;
