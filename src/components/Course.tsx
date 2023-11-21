import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Carousel, Grid } from "antd";
import { CarouselRef } from "antd/es/carousel";
import { useEffect, useRef, useState } from "react";
import { CourseType } from "~/demo";
import { CardBase } from "./Card";

const { useBreakpoint } = Grid;

export function CourseCarousel({ courses }: { courses: CourseType[] }) {
  const ref = useRef<CarouselRef | null>(null);
  const [slideShow, setSlideShow] = useState(3);
  const [slide, setSlide] = useState(0);
  const total = Math.ceil(courses.length / slideShow);
  const screens = useBreakpoint();

  useEffect(() => {
    if (!screens.md) {
      setSlideShow(1);
    } else if (!screens.lg) {
      setSlideShow(2);
    }

    if (screens.lg) {
      setSlideShow(3);
    } else if (screens.md) {
      setSlideShow(2);
    }
  }, [screens]);

  function onCarousel(index: number) {
    ref.current?.goTo(index * slideShow);
  }

  function afterChange(index: number) {
    setSlide(index);
  }

  function arrowClick(type: "left" | "right") {
    if (type == "left") {
      ref.current?.prev();
    } else ref.current?.next();
  }

  return (
    <div className="relative">
      <FontAwesomeIcon
        className={`base-text z-[1] text-[32px] max-md:hidden absolute top-[48%] -translate-y-1/2 left-[5px] ${
          slide == 0 ? "opacity-50" : "cursor-pointer"
        }`}
        icon={faAngleLeft}
        onClick={slide == 0 ? undefined : () => arrowClick("left")}
      />
      <FontAwesomeIcon
        className={`base-text z-[1] text-[32px] max-md:hidden absolute top-[48%] -translate-y-1/2 right-[5px] ${
          slide == ref.current?.innerSlider.state.slideCount
            ? "opacity-50"
            : "cursor-pointer"
        }`}
        icon={faAngleRight}
        onClick={
          slide == ref.current?.innerSlider.state.slideCount
            ? undefined
            : () => arrowClick("right")
        }
      />
      <Carousel
        ref={ref}
        className="antd-carousel"
        draggable
        infinite={false}
        dots={false}
        slidesToShow={slideShow}
        afterChange={afterChange}
      >
        {courses.map((item) => (
          <CardBase key={item.id} item={item} coverLink />
        ))}
      </Carousel>
      <DotCarousel
        total={total}
        slide={slide}
        slideCount={ref.current?.innerSlider.state.slideCount ?? 0}
        slideShow={slideShow}
        onCarousel={onCarousel}
      />
    </div>
  );
}

type DotCarouselProps = {
  total: number;
  slide: number;
  slideCount: number;
  slideShow: number;
  onCarousel?: (index: number) => void;
};

export function DotCarousel({
  total,
  slide,
  slideCount,
  slideShow,
  onCarousel,
}: DotCarouselProps) {
  return (
    <div className="flex-cc">
      {Array(total)
        .fill(0)
        .map((_, index, { length }) => {
          const max = slideCount;
          const some = max - slide;
          const alt = some > 0 && some <= slideShow;
          let active = false;

          if (alt) {
            if (index == length - 1) {
              active = true;
            } else active = false;
          } else {
            const result = slideShow + slideShow * index - slide;
            active = result <= slideShow && result > 0;
          }

          return (
            <Button
              key={index}
              className="btn-carousel flex-cc"
              onClick={onCarousel ? () => onCarousel(index) : undefined}
            >
              <span className={`rounded-full${active ? " active" : ""}`} />
            </Button>
          );
        })}
    </div>
  );
}
