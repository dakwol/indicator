import React, { FC, Fragment, useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import "./styles.scss";
import Footer from "../../components/Footer/Footer";
import CardContainer from "../../components/CardContainer/CardContainer";
import icons from "../../assets/icons/icons";

const HomePage: FC = () => {
  const dataCard = [
    {
      id: 1,
      title: "Сервисы Белгородской ипотченой корпорации",
      link: "БИК",
      img: icons.bg,
      tag: "Проект",
      col: 1,
    },
    {
      id: 2,
      title: "Сервисы Белгородской ипотченой корпорации",
      link: "БИК",
      img: icons.bg,
      tag: "Проект",
      col: 2,
    },
    {
      id: 3,
      title: "Сервисы Белгородской ипотченой корпорации",
      link: "БИК",
      img: icons.bg,
      tag: "Проект",
      col: 3,
    },
    {
      id: 4,
      title: "Сервисы Белгородской ипотченой корпорации",
      link: "БИК",
      img: icons.bg,
      tag: "Проект",
      col: 1,
    },
    {
      id: 5,
      title: "Сервисы Белгородской ипотченой корпорации",
      link: "БИК",
      img: icons.bg,
      tag: "Проект",
      col: 1,
    },
    {
      id: 6,
      title: "Сервисы Белгородской ипотченой корпорации",
      link: "БИК",
      img: icons.bg,
      tag: "Проект",
      col: 1,
    },
    {
      id: 7,
      title: "Сервисы Белгородской ипотченой корпорации",
      link: "БИК",
      img: icons.bg,
      tag: "Проект",
      col: 3,
    },
  ];
  return (
    <Fragment>
      <section className="section">
        <Header />
        {/*@ts-ignore */}
        <CardContainer dataCard={dataCard} />
      </section>
    </Fragment>
  );
};

export default HomePage;
