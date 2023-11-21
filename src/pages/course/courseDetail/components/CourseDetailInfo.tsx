import { Button, Card, Carousel, Flex, Grid, Image } from "antd";
import { CarouselRef } from "antd/es/carousel";
import { Fragment, useEffect, useRef, useState } from "react";
import { DotCarousel } from "~/components/Course";
import { CourseType } from "~/demo";

const { useBreakpoint } = Grid;

const classes = [
  <CourseDetailClass />,
  <CourseDetailClass />,
  <CourseDetailClass />,
  <CourseDetailClass />,
];

export default function CourseDetailInfo({ course }: { course: CourseType }) {
  return (
    <div className="w-1/3 max-[992px]:w-full mb-4">
      <Card className="course-detail-card">
        <Flex
          className="[&_div:has(img)]:w-full"
          vertical
          align="center"
          gap={12}
        >
          <Image
            className="object-cover rounded-lg overflow-hidden"
            src={course.thumbnail}
            preview={false}
            alt={course.name}
          />
          <span className="text-[36px] font-bold text-center">
            {course.price.toLocaleString()} VND
          </span>
          <h1 className="text-[20px]">Danh sách lớp học</h1>
          <CourseDetailClassCarousel />
          <Flex
            className="w-full px-4 mb-4 h-[435px] overflow-y-scroll no-scrollbar max-[992px]:hidden"
            vertical
            gap={16}
          >
            {classes.map((item, index) => (
              <Fragment key={index}>{item}</Fragment>
            ))}
          </Flex>
        </Flex>
      </Card>
    </div>
  );
}

function CourseDetailClassCarousel() {
  const ref = useRef<CarouselRef | null>(null);
  const [slideShow, setSlideShow] = useState(1);
  const [slide, setSlide] = useState(0);
  const total = Math.ceil(classes.length / slideShow);
  const screens = useBreakpoint();

  useEffect(() => {
    if (!screens.sm) {
      setSlideShow(1);
    }

    if (screens.md) {
      setSlideShow(2);
    }
  }, [screens]);

  function onCarousel(index: number) {
    ref.current?.goTo(index * slideShow);
  }

  function afterChange(index: number) {
    setSlide(index);
  }

  return (
    <div className="w-full min-[992px]:hidden">
      <Carousel
        ref={ref}
        className="antd-carousel [&>div>div>div]:!px-2"
        draggable
        infinite={false}
        dots={false}
        slidesToShow={slideShow}
        afterChange={afterChange}
      >
        {classes.map((item, index) => (
          <Fragment key={index}>{item}</Fragment>
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

function CourseDetailClass() {
  return (
    <Flex className="course-detail-card-item-course" vertical gap={4}>
      <Flex align="center" gap={6}>
        <p>Mã lớp:</p>
        <p>n% I = W</p>
      </Flex>
      <Flex align="center" gap={6}>
        <p>Thời gian:</p>
        <p>19:00 - 21:00 (T3, T5)</p>
      </Flex>
      <Flex align="center" gap={6}>
        <p>Dự kiến mở lớp:</p>
        <p>01/01/2051</p>
      </Flex>
      <Flex align="center" gap={6}>
        <p>Buổi học:</p>
        <p>18 buổi</p>
      </Flex>
      <Flex align="center" gap={6}>
        <p>Số lượng học viên:</p>
        <p>20</p>
      </Flex>
      <Flex align="center" gap={6}>
        <p>Hình thức học:</p>
        <p>Online</p>
      </Flex>
      <Button className="w-full text-white hover:opacity-80 border border-solid bg-[#778899] border-[#778899] hover:!text-white hover:!border-[#778899]">
        Đã bắt đầu
      </Button>
    </Flex>
  );
}
