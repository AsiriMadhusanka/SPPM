import React, { Component } from 'react'
import img from '../images/jj.jpg';
import "./About.css";


export default class AboutUs extends Component {
    render() {
        return (
            <div className="about-main">

                <br/>

                <div className="main">
                    <img src={img} className="d-block w-100" alt="width=50%" />

                </div>

                <div className="bg-text">
                    <h1>ABOUT-US</h1>
                    <p>--UNIVERSAL COMPUTERS--</p>
                </div>

                <div className="description">

                    <h4>
                        <p>Established in 2008, Universal Computer Solutions has strived to be one of the leading retailers for branded & customizable computers and related products in today’s market. Our many years of experience has provided us with the expertise to cater you; our valued customers with the latest technology, while providing an excellent service that would culminate in providing you the best available products. Universal Computer Solutions has always been the stable backdrop for many PC enthusiasts in the face of rising enthusiasm for high-end computer gaming and custom-built PCs. Thus, enabling the dreams of making one's own computer that would fit all of one's needs come true.</p>


                        <p>We believe in your passion, as fellow PC enthusiasts, we would be more than glad to provide you with any assistance when you're looking for branded computer solutions. If you visit our store, it would be possible for you to see for yourself the latest products that we have in our showroom, sourced from the international market.  We specialize in making available the latest technology as soon as it is released worldwide. In fact, you would be able to observe that most products on our shelves are less than 30 days old! It is this quality and the service that has earned Nanotek Computer Solutions the untarnished reputation that it has had throughout the years.</p>


                        <p>Whether you're building your own gaming PC or hoping to upgrade the computer you have for your desired purpose, Universal Computer Solutions has the ability to offer you the ideal solution that will meet your expectations. The premium hardware that we offer would be of outstanding quality and the brands that we choose would speak for themselves. We give you not only the ability to be exposed to such high-end hardware, but also ensure that we offer them at reasonable prices. It is our thought that every individual who has the passion for high-end computers deserves to experience great high-end hardware. With the latest computer products brought from the top-grade brands all over the world, we promise you on delivering the best available options for your dream gaming rig.</p>


                        <p>We have understood what it means to be trusted by thousands of customers, and we intend on keeping that trust by continuing to provide you with the best products for affordable prices. We make it our responsibility to attend to your requirements of structuring the ideal PC for you. The personalized experience that you can have at Universal as a customer is unparalleled. The business owners are also actively involved in providing advice to choose and customize your ideal computer. Our fervent hope would be to let you have the best product for the budget at your hand, and we know that our direct involvement in letting you have a wider understanding on the products would contribute to this greatly.</p>


                        <p>Technology today plays a significant role in evolving the world.  We at Universal Computer Solutions always execute our promises keeping you as our topmost priority, and we believe that adapting to the tech scene in the world on par with the international scale has given us the opportunity to be who we are today; a pioneer in the field of computer products in the country.</p>
                    </h4>
                </div>

                <div style={{marginTop:'400px'}}></div>
                <br/>

            </div>
        )
    }
}
