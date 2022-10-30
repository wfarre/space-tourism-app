import React, { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Slide from "../components/Slide/Slide";

type Props = {};

const Crew = (props: Props) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetch("../json/data.json")
      .then((res) => res.json())
      .then((data) => setData(data.crew))
      .catch((error) => setError(error));
  }, []);

  console.log(data);

  //Handle the error state
  if (error) return <div>Failed to load</div>;
  //Handle the loading state
  if (!data) return <div>Loading...</div>;

  const currentSlide = (index: number) => {
    if (typeof window !== "undefined") {
      // browser code
      const carouselViewport: any = document.querySelector(
        ".carousel__viewport"
      );

      // const slideWidth: number = carouselViewport.offsetWidth;
      const slideWidth = carouselViewport.offsetWidth;

      carouselViewport.scroll({
        left: index * slideWidth,
        behavior: "smooth",
      });
    }

    setIndex(index);
  };

  return (
    <div>
      <Navbar />
      <Header index={"02"} title={"Meet your crew"} />

      <section className="section section--crew">
        <div className="carousel">
          <div className="carousel__nav">
            <div
              id="0"
              className={0 === index ? "dot active" : "dot"}
              onClick={() => currentSlide(0)}
            ></div>
            <div
              id="1"
              className={1 === index ? "dot active" : "dot"}
              onClick={() => currentSlide(1)}
            ></div>
            <div
              id="2"
              className={2 === index ? "dot active" : "dot"}
              onClick={() => currentSlide(2)}
            ></div>
            <div
              id="3"
              className={3 === index ? "dot active" : "dot"}
              onClick={() => currentSlide(3)}
            ></div>
          </div>
          <div className="carousel__viewport">
            {data.map((crew: any) => {
              return (
                <Slide
                  key={crew.name}
                  img={crew.images.png}
                  name={crew.name}
                  description={crew.bio}
                  role={crew.role}
                />
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Crew;
