import React, { FC, useEffect, useState } from "react";
import icons from "../../assets/icons/icons";
import Buttons from "../Buttons/Buttons";
import "./styles.scss";
import { useDispatch } from "react-redux";
import { useTypeSelector } from "../../hooks/useTypedSelector";
import { Link, useNavigate } from "react-router-dom";
import { RouteNames, navDate } from "../../routes";

const Header: FC = () => {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const urlParams = window.location.pathname.split("/");

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 1100);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className={`header ${isMobile && "mobile"}`}>
      <div className="containerHeader">
        <Buttons
          text={"Eng"}
          ico={icons.ArrowRotate}
          onClick={() => {}}
          className="lgButton"
        ></Buttons>
        <div className="logo">
          <img src={icons.Indicator} className="logoIcon"></img>
          <h4 className="logoTitle">Индикатор</h4>
        </div>
        <p
          onClick={() => navigation(RouteNames.CONTACTS)}
          className="linkHeader"
        >
          Контакты
        </p>
      </div>
    </header>
  );
};

export default Header;
