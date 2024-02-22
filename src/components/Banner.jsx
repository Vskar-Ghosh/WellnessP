import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Banner = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    Desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <div className=" w-full md-lg:mt-6">
        <div className=" w-full mx-auto">
          <div className=" w-full flex flex-wrap md-lg:gap-8">
            <div className=" w-full">
              <div className=" my-8">
                <Carousel
                  autoPlay={true}
                  infinite={true}
                  arrows={false}
                  showDots={true}
                  responsive={responsive}
                >
                  {[1, 2, 3, 4].length > 0 &&
                    [1, 2, 3, 4].map((b, i) => (
                      <div
                        className="lg:h-[400px] h-[450px] w-full block"
                        key={i}
                      >
                        <img
                          src={`/banner/${b}.jpg`}
                          alt={b}
                          className=" w-full h-full"
                        />
                      </div>
                    ))}
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
