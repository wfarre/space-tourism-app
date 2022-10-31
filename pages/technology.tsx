import React, { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Slide from "../components/Slide/Slide";

type Props = {};

const Technology = (props: Props) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState();
  const [index, setIndex] = useState(0);
  const [desktop, setDesktop] = useState(true);

  const [matches, setMatches] = useState(
    typeof window !== "undefined" &&
      window.matchMedia("(min-width: 768px)").matches
  );

  useEffect(() => {
    fetch("../json/data.json")
      .then((res) => res.json())
      .then((data) => setData(data.technology))
      .catch((error) => setError(error));
  }, []);

  console.log(data);

  //Handle the error state
  if (error) return <div>Failed to load</div>;
  //Handle the loading state
  if (!data) return <div>Loading...</div>;
  //Handle the ready state and display the result contained in the data object mapped to the structure of the json file

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

  useEffect(() => {
    window
      .matchMedia("(min-width: 768px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);
  // }
  console.log(matches);

  return (
    <div>
      <Navbar />
      <Header index={"03"} title={"Space launch 101"} />
      <main className="main">
        <section className="section section--technology">
          <div className="carousel">
            <div className="carousel__nav">
              <div
                id="0"
                className={0 === index ? "dot active" : "dot"}
                onClick={() => currentSlide(0)}
              >
                1
              </div>
              <div
                id="1"
                className={1 === index ? "dot active" : "dot"}
                onClick={() => currentSlide(1)}
              >
                2
              </div>
              <div
                id="2"
                className={2 === index ? "dot active" : "dot"}
                onClick={() => currentSlide(2)}
              >
                3
              </div>
            </div>
            <div className="carousel__viewport">
              {data.map((technology: any) => {
                return (
                  <Slide
                    key={technology.name}
                    img={
                      matches
                        ? technology.images.portrait
                        : technology.images.landscape
                    }
                    name={technology.name}
                    role={"the terminlogy..."}
                    description={technology.description}
                  />
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Technology;
