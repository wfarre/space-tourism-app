import React, { useEffect, useState, useRef } from "react";
//useSWR allows the use of SWR inside function components
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Slide from "../components/Slide/Slide";

import Image from "next/image";

import bgImgMobile from "../public/assets/destination/background-destination-mobile.jpg";
import bgImgTablet from "../public/assets/destination/background-destination-mobile.jpg";
import bgImgDesktop from "../public/assets/destination/background-destination-desktop.jpg";

//Write a fetcher function to wrap the native fetch function and return the result of a call to url in json format
// const fetcher = (url: string) => fetch(url).then((res) => res.json());

type Props = {};

// const carouselViewport = document.querySelector(".carousel__viewport");

const Destination = (props: Props) => {
  // const { data, error } = useSWR("/api/staticdata.ts", fetcher);
  const [data, setData] = useState([]);
  const [dataLength, setDataLength] = useState(0);

  const [error, setError] = useState();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetch("../json/data.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data.destinations);
        setDataLength(data.destinations.length);
      })
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

  // const handleScroll = (e) => {
  //   console.log(e.currentTarget.scrollLeft);
  // };

  // useEffect(() => {
  //   const dots = document.querySelectorAll(".dot");
  //   dots.map(dot => {
  //     if(dot.id === index)
  //   })
  // })

  return (
    <div>
      <Image alt="" src={bgImgMobile} fill className="bg-img bg-img--mobile" />
      <Image alt="" src={bgImgTablet} fill className="bg-img bg-img--tablet" />
      <Image
        alt=""
        src={bgImgDesktop}
        fill
        className="bg-img bg-img--desktop"
      />
      <Navbar page={"destination"} />
      <Header index={"01"} title={"Pick your destination"} />
      <main className="main">
        <section className="section section--planet">
          <div className="carousel">
            <div className="carousel__nav">
              <div
                id="0"
                className={0 === index ? "option active" : "option"}
                onClick={() => currentSlide(0)}
              >
                <p className="option__name">moon</p>
              </div>
              <div
                id="1"
                className={1 === index ? "option active" : "option"}
                onClick={() => currentSlide(1)}
              >
                <p className="option__name">mars</p>
              </div>
              <div
                id="2"
                className={2 === index ? "option active" : "option"}
                onClick={() => currentSlide(2)}
              >
                <p className="option__name">europa</p>
              </div>
              <div
                id="3"
                className={3 === index ? "option active" : "option"}
                onClick={() => currentSlide(3)}
              >
                <p className="option__name">titan</p>
              </div>
            </div>
            <div className="carousel__viewport">
              {data.map((planet: any) => {
                return (
                  <Slide
                    key={planet.name}
                    img={planet.images.png}
                    name={planet.name}
                    description={planet.description}
                    distance={planet.distance}
                    travel={planet.travel}
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

export default Destination;
