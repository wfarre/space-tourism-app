import React, { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Slide from "../components/Slide/Slide";

import Image from "next/image";
import Head from "next/head";

import bgImgMobile from "../public/assets/crew/background-crew-mobile.jpg";
import bgImgTablet from "../public/assets/crew/background-crew-mobile.jpg";
import bgImgDesktop from "../public/assets/crew/background-crew-desktop.jpg";
// import { Html } from "next/document";

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
      <Head>
        {/* <Html lang="en" /> */}
        <title>Space Tourism - Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Image alt="" src={bgImgMobile} fill className="bg-img bg-img--mobile" />
      <Image alt="" src={bgImgTablet} fill className="bg-img bg-img--tablet" />
      <Image
        alt=""
        src={bgImgDesktop}
        fill
        className="bg-img bg-img--desktop"
      />
      <Navbar page={"crew"} />
      <Header index={"02"} title={"Meet your crew"} />

      <section className="section section--crew">
        <h2 hidden>Crew</h2>
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
