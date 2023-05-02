//  The Carousel component design came from: https://medium.com/tinyso/how-to-create-the-responsive-and-swipeable-carousel-slider-component-in-react-99f433364aa0
//  The Carousel component uses the components children as CarouselItems to display them withing a sliding carousel.
/*  The carousel is structured in that CarouselItems are displayed inline to make up the Inner. 
  The Inner translates within the Carousel with the Carousel overflow hidden to display different CarouselItems  */
//  In this case the children are currently from About.js
//  The carousel is touch screen swipe responsive using react-swipeable.

import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";

import "../styles/Carousel.css";

//  The children come from CarouselItem tags in About.js.
export const CarouselItem = ({ children, width }) => {
  return (
    <div className="carousel-item" style={{ width: width }}>
      {children}
    </div>
  );
};

const Carousel = ({ children }) => {
  //  activeIndex is the index of the current CarouselItem being displayed.
  //  On Carousel hover, the paused state is used to stop the interval that automatically runs setActiveIndex.
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  //  If the newIndex is to be less than 0. Set newIndex to the last index of the array.
  //  If the newIndex is to be more than the length of the array. Set the newIndex to the first index or 0.
  //  Finally sets activeIndex to newIndex.
  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };

  //  Interval function to change the activeIndex.
  //  If the Carousel isnt being hovered by the mouse, causing the paused state. Update the activeIndex every 8000ms or 8seconds. Then repeat interval.
  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateIndex(activeIndex + 1);
      }
    }, 8000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  //  Handlers to enable carousel swipe function.
  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1),
  });

  //  The onMouseEnter and onMouseLeave in the carousel div set the paused state on mouse hover.
  //  The inner div controls how far the inner translates within the carousel.
  //  The inners child element sets the width of the CarouselItems.
  return (
    <div
      {...handlers}
      className="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* This div controls how far the inner translates within the carousel. */}
      <div
        className="inner"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {/* This map function sets the width of the CarouselItems */}
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: "100%" });
        })}
      </div>
      <div className="indicators">
        <button
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          Prev
        </button>
        {React.Children.map(children, (child, index) => {
          return (
            <button
              className={`${index === activeIndex ? "active" : ""}`}
              onClick={() => {
                updateIndex(index);
              }}
            >
              {index + 1}
            </button>
          );
        })}
        <button
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Carousel;
