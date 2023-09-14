import React from "react";
import Navbar from "./Navbar";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
            <img src={BannerBackground} alt=""/>
        </div>
        <div className="home-text-section">
            <h1 className="primary-heading">
                Sua comida favorita chegando em sua casa
            </h1>
            <p className="primary-text">
                Toda a variade de comida desde da tradicional ate as mais exóticas, em um unico só lugar
            </p>
            <button className="secondary-button">
                Peça ja <FiArrowRight/>
            </button>
        </div>
        <div className="home-image-section">
            <img src={BannerImage} alt=""/>
        </div>
      </div>
    </div>
  );
};

export default Home;
