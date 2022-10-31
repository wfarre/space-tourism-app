import React from "react";
import Image from "next/image";

type Props = {
  name: string;
  description: string;
  img: string;
  distance?: string;
  travel?: string;
  role?: string;
};

const Slide = (props: Props) => {
  return (
    <div className="slide">
      <div className="slide__picture">
        <Image
          className="image"
          src={"/" + props.img}
          alt="planet image"
          width={40}
          height={40}
        />
      </div>

      <div className="slide__info">
        <div className="slide__info__main">
          <h3 className="slide__info__main__subtitle">{props.role}</h3>
          <h2 className="slide__info__main__title">{props.name}</h2>
          <p className="slide__info__main__description">{props.description}</p>
        </div>

        <div className="slide__info__extra">
          <div className="slide__info__extra__distance">
            <h3 className="slide__info__extra__distance__title">
              avg. distance
            </h3>
            <p className="slide__info__extra__distance__data">
              {props.distance}
            </p>
          </div>
          <div className="slide__info__extra__travel">
            <h3 className="slide__info__extra__travel__title">
              Est. travel time
            </h3>
            <p className="slide__info__extra__travel__data">{props.travel}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide;
