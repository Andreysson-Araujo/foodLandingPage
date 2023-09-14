import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">Sobre</p>
        <h1 className="primary-heading">
          Comidas Para sua dieta ?  Aqui tem !
        </h1>
        <p className="primary-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel
          egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac
          sodales id, porttitor vitae est.
        </p>
        <p className="primary-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel
          egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac
          sodales id, porttitor vitae est.
        </p>
        <div className="about-buttons-container">
            <button className="secondary-button">Ler Mais</button>
            <button className="watch-video-button"><BsFillPlayCircleFill/> Ver video </button>
        </div>
      </div>
    </div>
  );
};

export default About;
