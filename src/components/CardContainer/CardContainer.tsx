import React, { FC, Fragment } from "react";
import "./styles.scss";
import { Link, useNavigate } from "react-router-dom";
import { RouteNames } from "../../routes";

const CardContainer: FC = ({ dataCard }: any) => {
  const CardItem = (data: any) => {
    console.log("data", data);

    const navigation = useNavigate();

    const openProject = () => {
      //@ts-ignore
      navigation(`${RouteNames.PROJECT}/${data.data.id}`);
    };

    return (
      <div
        onClick={() => {
          openProject();
        }}
        className={`cardContainer colItem-${data.data.col}`}
        key={data.id}
      >
        <div className="cardItemHeader">
          <p className="cardItemTag">{data.data.tag}</p>
        </div>
        <img src={data.data.img} className="cardBg"></img>
        <div className="contentCard">
          <a href={data.data.link} className="cardLink" target="_blank">
            {data.data.link}
          </a>
          <h1 className="cardTitle">{data.data.title}</h1>
        </div>
      </div>
    );
  };

  return (
    <div className="cardSection">
      {dataCard.map((item: any) => {
        return <CardItem data={item} />;
      })}
    </div>
  );
};

export default CardContainer;
