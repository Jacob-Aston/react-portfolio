import React from "react";

import Carousel, { CarouselItem } from "./../Carousel";

import avatar from "./../../assets/images/avatar.jpg";

import DeseretPeakTrail from "./../../assets/images/carousel/DeseretPeakTrail.jpg";
import DeseretPeakSummit from "./../../assets/images/carousel/DeseretPeakSummit.jpg";
import GreatSaltLakeJetty from "./../../assets/images/carousel/GreatSaltLakeJetty.jpg";
import GreatSaltLakeRiver from "./../../assets/images/carousel/GreatSaltLakeRiver.jpg";

import "../../styles/About.css";

export default function About() {
  return (
    <div className="about-container">
      <h2>About Page</h2>
      <img src={avatar} className="avatar" alt="A self portrait."></img>
      <div className="about-introduction">
        <p className="about">
          I'm a hard working young man with an interest in entrepreneurship and
          leadership. Through my time Working I have learned the importance of
          developing a positive culture in the workplace. As well as doing what
          I can to support the team and my leadership.
        </p>
        <p className="about">
          I love the great outdoors. Living in the mountains of Utah. I go on a
          lot of hikes. I go on a walk every day. Taking the time to live in the
          moment. Look at the flowers and watch the birds. Enjoying the sun and
          exercise. I have found it tremendously beneficial to my mental health.
        </p>
      </div>
      <div className="round-about">
        <Carousel>
          <CarouselItem className="image-one">
            <div
              className="carousel-image"
              style={{ backgroundImage: `url(${DeseretPeakTrail})` }}
            ></div>
          </CarouselItem>
          <CarouselItem>
            <div
              className="carousel-image"
              style={{ backgroundImage: `url(${DeseretPeakSummit})` }}
            ></div>
          </CarouselItem>
          <CarouselItem>
            <div
              className="carousel-image"
              style={{ backgroundImage: `url(${GreatSaltLakeJetty})` }}
            ></div>
          </CarouselItem>
          <CarouselItem>
            <div
              className="carousel-image"
              style={{ backgroundImage: `url(${GreatSaltLakeRiver})` }}
            ></div>
          </CarouselItem>
        </Carousel>
      </div>
    </div>
  );
}
