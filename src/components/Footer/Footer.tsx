import React, { FC } from "react";
import "./styles.scss";
import icons from "../../assets/icons/icons";
import { RouteNames, navDate } from "../../routes";
import { Link, useNavigate } from "react-router-dom";

const Footer: FC = () => {
  const navigation = useNavigate();

  return (
    <footer className="footer">
      <div className="footerContainer"></div>
    </footer>
  );
};

export default Footer;
