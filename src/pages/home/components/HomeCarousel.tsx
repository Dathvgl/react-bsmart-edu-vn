import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, Carousel, Grid, Image, Space } from "antd";
import { CarouselRef } from "antd/es/carousel";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { DotCarousel } from "~/components/Course";
import { MentorType } from "~/demo";

const { useBreakpoint } = Grid;

export function MentorCarousel({ mentors }: { mentors: MentorType[] }) {
  const ref = useRef<CarouselRef | null>(null);
  const [slideShow, setSlideShow] = useState(3);
  const [slide, setSlide] = useState(0);
  const total = Math.ceil(mentors.length / slideShow);
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
        {mentors.map((item) => {
          return (
            <Card
              key={item.id}
              className="card-base card-mentor h-[550px] [&_.ant-card-cover]:rounded-lg [&_.ant-card-cover]:overflow-hidden [&_.ant-card-body]:border-t-0"
              cover={
                <Image
                  className="object-cover"
                  src={item.thumbnail}
                  preview={false}
                  height={300}
                  alt={item.name}
                />
              }
            >
              <Space direction="vertical">
                <Link to="/">
                  <h3 className="base-txt text-center mt-5 mb-[5px] text-[24px]">
                    {item.name}
                  </h3>
                </Link>
                <p className="line-clamp-5" style={{ textAlign: "justify" }}>
                  {item.introduce}
                </p>
              </Space>
            </Card>
          );
        })}
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

export function ImageCarousel({ images }: { images: string[] }) {
  const ref = useRef<CarouselRef | null>(null);
  const [slideShow, setSlideShow] = useState(4);
  const [slide, setSlide] = useState(0);
  const total = Math.ceil(images.length / slideShow);
  const screens = useBreakpoint();

  useEffect(() => {
    if (!screens.sm) {
      setSlideShow(1);
    } else if (!screens.md) {
      setSlideShow(2);
    }

    if (screens.lg) {
      setSlideShow(4);
    } else if (screens.md) {
      setSlideShow(3);
    }
  }, [screens]);

  function afterChange(index: number) {
    setSlide(index);
  }

  return (
    <div className="px-[10%]">
      <Carousel
        ref={ref}
        className="antd-carousel antd-carousel-image"
        dots={false}
        autoplay
        slidesToShow={slideShow}
        afterChange={afterChange}
      >
        {images.map((item) => {
          return (
            <Image
              key={item}
              className="object-cover"
              src={item}
              preview={false}
            />
          );
        })}
      </Carousel>
      <DotCarousel
        total={total}
        slide={slide}
        slideCount={ref.current?.innerSlider.state.slideCount ?? 0}
        slideShow={slideShow}
      />
    </div>
  );
}
