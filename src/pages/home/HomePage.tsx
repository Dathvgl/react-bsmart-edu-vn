import {
  Button,
  Card,
  Carousel,
  Col,
  Flex,
  Grid,
  Image,
  Row,
  Space,
} from "antd";
import { CarouselRef } from "antd/es/carousel";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Banner2Image from "~/assets/home/banner-2.webp";
import Banner3Image from "~/assets/home/banner-3.webp";
import Banner4Image from "~/assets/home/banner-4.webp";
import BannerImage from "~/assets/home/banner.webp";
import FunFactImage from "~/assets/home/funfact_bg.webp";
import DaiHocImage from "~/assets/home/logo-dai-hoc-01 (1).webp";
import DaiHoc2Image from "~/assets/home/logo-dai-hoc-01.webp";
import DaiHoc3Image from "~/assets/home/logo-dai-hoc-02.webp";
import DaiHoc4Image from "~/assets/home/logo-dai-hoc-03.webp";
import DaiHoc5Image from "~/assets/home/logo-dai-hoc-04.webp";
import DaiHoc6Image from "~/assets/home/logo-dai-hoc-05.webp";
import DaiHoc7Image from "~/assets/home/logo-dai-hoc-06.webp";
import DaiHoc8Image from "~/assets/home/logo-dai-hoc-07.webp";
import { ButtonLink } from "~/components/Button";
import { CardBase } from "~/components/Card";
import { CourseType, MentorType, courses, mentors } from "~/demo";
import "./index.css";

const { useBreakpoint } = Grid;

const h1Base: React.CSSProperties = {
  textAlign: "center",
  marginTop: 0,
  marginBottom: 30,
  fontSize: 40,
};

const pBase: React.CSSProperties = { fontSize: 18, textAlign: "justify" };

const sectionBase: React.CSSProperties = { paddingBlock: 50 };

export default function HomePage() {
  return (
    <div>
      <section
        className="banner"
        style={{
          backgroundImage: `url(${BannerImage})`,
          backgroundSize: "cover",
          textAlign: "center",
          color: "white",
        }}
      >
        <Space size="middle" direction="vertical">
          <h4 className="base-txt" style={{ fontSize: 20 }}>
            KHỞI ĐẦU SỰ NGHIỆP CỦA BẠN
          </h4>
          <h2>Trở thành lập trình viên chuyên nghiệp tại BSMART</h2>
          <p>
            Với đội ngũ Mentor có nhiều năm kinh nghiệm giảng dạy cùng các khóa
            học chất lượng. BSMART sẽ giúp các bạn có định hướng về nghề nghiệp
            và phát triển bản thân trên con đường trở thành lập trình viên
            chuyên nghiệp
          </p>
          <ButtonLink className="uppercase" path="/course">
            Xem khóa học
          </ButtonLink>
        </Space>
      </section>
      <section style={sectionBase}>
        <h1 style={h1Base}>Về chúng tôi</h1>
        <Row align="top">
          <Col lg={12}>
            <Space
              className="flex-1"
              style={{ padding: 12 }}
              size="middle"
              direction="vertical"
            >
              <p style={pBase}>
                BSMART được thành lập với mục tiêu trở thành nền tảng tin cậy về
                đào tạo lập trình viên, kết nối Mentor và Mentee. Với đội ngũ
                Mentor giàu kinh nghiệm và chuyên môn, BSMART cam kết mang đến
                các khóa học lập trình chất lượng nhất. Hệ thống khóa học đa
                dạng và linh hoạt, từ cơ bản đến nâng cao, giúp học viên có thể
                lựa chọn các khóa học phù hợp với nhu cầu và khả năng của mình.
                BSMART cập nhật và áp dụng những công nghệ mới, giúp học viên và
                Mentor được tiếp cận với những kiến thức và kỹ năng mới nhất
                trong lập trình. Bên cạnh đó, BSMART luôn đặt sự quan tâm, hỗ
                trợ học viên trong quá trình học tập và phát triển sự nghiệp sau
                khi tốt nghiệp.
              </p>
              <Flex style={{ paddingBottom: 12 }} justify="center" gap={12}>
                <ButtonLink className="uppercase" path="/course">
                  Xem khóa học
                </ButtonLink>
                <ButtonLink className="uppercase" path="/">
                  Hỗ trợ tư vấn
                </ButtonLink>
              </Flex>
            </Space>
          </Col>
          <Col lg={12} style={{ paddingInline: 12 }}>
            <Image
              className="flex-1 rounded-lg"
              style={{ boxShadow: "0 0 15px #000" }}
              src={Banner2Image}
              preview={false}
            />
          </Col>
        </Row>
      </section>
      <section className="row-section" style={sectionBase}>
        <h1 style={h1Base}>Điểm ưu việt tại BSmart</h1>
        <Row style={{ width: "100%", paddingInline: 20 }} gutter={30}>
          {[
            {
              title: "Học theo lộ trình, có định hướng",
              content:
                "BSmart sẽ định hướng và đưa ra các lộ trình học lập trình nhằm phát triển năng lực và niềm đam mê lập trình của bạn để có việc ngay sau khi học.",
            },
            {
              title: "Nền tảng cốt lõi trong lập trình",
              content:
                "BSmart cung cấp những nền tảng, giá trị tư duy cốt lõi nhất trong lập trình. Bạn sẽ tự tin trước sự thay đổi của công nghệ và môi trường làm việc.",
            },
            {
              title: "Mài giũa bạn qua thực tế",
              content:
                'Đội ngũ Mentor là những người dày dặn kinh nghiệm qua các dự án thực tế tại các công ty lớn sẽ truyền đạt những kinh nghiệm "máu lửa" cho bạn.',
            },
            {
              title: "Mentor tận tâm",
              content:
                "Bạn sẽ được giao dự án và Teamwork ngay từ ngày đầu tiên. Đóng vai trò một thành viên trong quy trình Scrum, Agile. Được Mentor hỗ trợ tận tâm, nhiệt tình.",
            },
            {
              title: "Công nghệ mới, thực tế",
              content:
                "Bạn được học và trải nghiệm các công nghệ lập trình mới nhất, chuyên sâu, bám sát nhu cầu tuyển dụng thực tế từ doanh nghiệp.",
            },
            {
              title: "Trao tay chìa khóa thành công",
              content:
                "Hướng dẫn viết CV, phỏng vấn. Kết nối, gặp gỡ, phỏng vấn cùng doanh nghiệp ngay sau khi tốt nghiệp.",
            },
          ].map((item) => (
            <Col key={item.title} lg={8}>
              <h4
                className="base-txt"
                style={{ fontSize: 22, marginBlock: 10 }}
              >
                {item.title}
              </h4>
              <p style={pBase}>{item.content}</p>
            </Col>
          ))}
        </Row>
      </section>
      <section className="learning-path">
        <Row>
          <Col xs={24} lg={12}>
            <div
              className="rounded-lg"
              style={{
                backgroundImage: `url(${Banner3Image})`,
                backgroundSize: "cover",
              }}
            >
              <div className="absolute-cc">
                <h2>TRÁI NGÀNH</h2>
                <p>From Zero to Hero</p>
              </div>
            </div>
          </Col>
          <Col xs={24} lg={12}>
            <div
              className="rounded-lg"
              style={{
                backgroundImage: `url(${Banner4Image})`,
                backgroundSize: "cover",
              }}
            >
              <div className="absolute-cc">
                <h2>ĐÃ BIẾT LẬP TRÌNH</h2>
                <p>Đã có kiến thức tư duy lập trình và OOP</p>
              </div>
            </div>
          </Col>
        </Row>
      </section>
      <section style={sectionBase}>
        <h1 style={h1Base}>Khoá học tiêu biểu</h1>
        <CourseCarousel
          courses={courses.filter((item) => item.sector != "fast")}
        />
      </section>
      <section style={sectionBase}>
        <h1 style={h1Base}>Khoá học cấp tốc</h1>
        <CourseCarousel
          courses={courses.filter((item) => item.sector == "fast")}
        />
      </section>
      <section style={sectionBase}>
        <h1 style={h1Base}>Mentor tiêu biểu</h1>
        <MentorCarousel mentors={mentors} />
      </section>
      <section
        className="advantages-2"
        style={{
          paddingBlock: 65,
          backgroundImage: `url(${FunFactImage})`,
          backgroundSize: "cover",
        }}
      >
        <Flex vertical justify="center" align="center" gap={12}>
          <h4 style={{ margin: 0 }}>
            Định hướng và Chuẩn hoá lộ trình học tập
          </h4>
          <h2 style={{ margin: 0 }}>Học Thật, Dự Án Thật, Mentor Tận Tâm</h2>
          <Flex style={{ marginTop: 12 }} justify="center" gap={12}>
            <ButtonLink className="uppercase" path="/course">
              Danh sách khóa học
            </ButtonLink>
            <ButtonLink className="uppercase" path="/">
              Tư vấn lộ trình
            </ButtonLink>
          </Flex>
        </Flex>
      </section>
      <section style={sectionBase}>
        <h1 style={h1Base}>Nhận được sự tin tưởng của các đối tác</h1>
        <ImageCarousel
          images={[
            DaiHocImage,
            DaiHoc2Image,
            DaiHoc3Image,
            DaiHoc4Image,
            DaiHoc5Image,
            DaiHoc6Image,
            DaiHoc7Image,
            DaiHoc8Image,
          ]}
        />
      </section>
    </div>
  );
}

function CourseCarousel({ courses }: { courses: CourseType[] }) {
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

  return (
    <div>
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
          <CardBase key={item.id} item={item} />
        ))}
      </Carousel>
      <div className="flex-cc">
        {Array(total)
          .fill(0)
          .map((_, index) => {
            const result = slideShow + slideShow * index - slide;
            const active = result <= slideShow && result > 0;

            return (
              <Button
                key={index}
                className="btn-carousel flex-cc"
                onClick={() => onCarousel(index)}
              >
                <span className={`rounded-full${active ? " active" : ""}`} />
              </Button>
            );
          })}
      </div>
    </div>
  );
}

function MentorCarousel({ mentors }: { mentors: MentorType[] }) {
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

  return (
    <div>
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
              className="card-base card-mentor"
              style={{ height: 550 }}
              cover={
                <Image
                  style={{ objectFit: "cover" }}
                  src={item.thumbnail}
                  preview={false}
                  height={300}
                  alt={item.name}
                />
              }
            >
              <Space direction="vertical">
                <Link to="/">
                  <h3
                    className="base-txt"
                    style={{
                      textAlign: "center",
                      marginTop: 20,
                      marginBottom: 5,
                    }}
                  >
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
      <div className="flex-cc">
        {Array(total)
          .fill(0)
          .map((_, index) => {
            const result = slideShow + slideShow * index - slide;
            const active = result <= slideShow && result > 0;

            return (
              <Button
                key={index}
                className="btn-carousel flex-cc"
                onClick={() => onCarousel(index)}
              >
                <span className={`rounded-full${active ? " active" : ""}`} />
              </Button>
            );
          })}
      </div>
    </div>
  );
}

function ImageCarousel({ images }: { images: string[] }) {
  const ref = useRef<CarouselRef | null>(null);
  const [slideShow, setSlideShow] = useState(4);
  const [slide, setSlide] = useState(0);
  const total = Math.ceil(images.length / slideShow);
  const screens = useBreakpoint();

  useEffect(() => {
    if (!screens.md) {
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
    <div>
      <Carousel
        ref={ref}
        className="antd-carousel"
        dots={false}
        autoplay
        slidesToShow={slideShow}
        afterChange={afterChange}
      >
        {images.map((item) => {
          return (
            <Image
              key={item}
              style={{ objectFit: "cover" }}
              src={item}
              height={100}
            />
          );
        })}
      </Carousel>
      <div className="flex-cc">
        {Array(total)
          .fill(0)
          .map((_, index) => {
            const result = slideShow + slideShow * index - slide;
            const active = result <= slideShow && result > 0;

            return (
              <Button key={index} className="btn-carousel flex-cc">
                <span className={`rounded-full${active ? " active" : ""}`} />
              </Button>
            );
          })}
      </div>
    </div>
  );
}
