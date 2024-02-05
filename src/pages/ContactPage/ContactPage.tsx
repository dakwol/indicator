import React, { FC, Fragment, useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import "./styles.scss";
import Footer from "../../components/Footer/Footer";
import CardContainer from "../../components/CardContainer/CardContainer";
import icons from "../../assets/icons/icons";

const ContactPage: FC = () => {
  const [renderCount, setRenderCount] = useState(0); // State variable to trigger re-renders

  useEffect(
    () => {
      // Update the state variable to trigger re-renders
      setRenderCount((prevCount) => prevCount + 1);
    },
    [
      /* add dependencies if needed */
    ]
  );

  // Function to generate a limited number of elements with the same text
  const generateLimitedElements = (limit: number) => {
    const baseData = [
      {
        id: 1,
        text: "Решения для государства",
      },
      {
        id: 2,
        text: "Telegram-боты",
      },
      {
        id: 3,
        text: "Мобильные приложения",
      },
      {
        id: 4,
        text: "Урбанистика",
      },
      {
        id: 5,
        text: "Веб-разработка",
      },
      {
        id: 6,
        text: "Дизайн и полиграфия",
      },
    ];

    const extendedData = Array.from({ length: 50 }, (_, index) => {
      return baseData.map((item) => ({
        ...item,
        id: item.id + index * baseData.length,
      }));
    }).flat();

    return extendedData.slice(0, limit);
  };

  const dataLine = generateLimitedElements(100); // Change 100 to your desired limit

  return (
    <Fragment>
      <div>
        <section className="section">
          <Header />
        </section>
        <div className="lineContainer">
          <div className="line">
            {dataLine.map((item) => (
              <p key={item.id} className="lineText">
                {item.text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ContactPage;
