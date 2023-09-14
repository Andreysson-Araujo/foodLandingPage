import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Escolha suas Refeições",
      text: "Com um cardapio variado você mesmo monta sua marmita com nossos produtos.",
    },
    {
      image: ChooseMeals,
      title: "Escolha a frenquência",
      text: "Você pode escolher a quantida de pratos que seram entregues para você em nosso pacotes. ",
    },
    {
      image: DeliveryMeals,
      title: "Estrega Rapida",
      text: "Em poucos minutos sua comida esta ai juntinho de você",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Funcionamento</p>
        <h1 className="primary-heading">Como funciona?</h1>
        <p className="primary-text">
          Contamos com um sistema simples onde você decide o melhor.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;