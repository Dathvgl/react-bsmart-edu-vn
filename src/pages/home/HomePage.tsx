import { Col, Flex, Image, Row, Space } from "antd";
import AboutImage from "~/assets/home/background.webp";
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
import { CourseCarousel } from "~/components/Course";
import { courses, mentors } from "~/demo";
import HomeAdvantage from "./components/HomeAdvantage";
import { ImageCarousel, MentorCarousel } from "./components/HomeCarousel";
import "./index.css";

export default function HomePage() {
  return (
    <div>
      <section
        className="banner before-layout"
        style={{ backgroundImage: `url(${BannerImage})` }}
      >
        <Flex vertical gap={12} align="center">
          <h4 className="base-txt text-[20px]">KHỞI ĐẦU SỰ NGHIỆP CỦA BẠN</h4>
          <h2>Trở thành lập trình viên chuyên nghiệp tại BSMART</h2>
          <p className="leading-6">
            Với đội ngũ Mentor có nhiều năm kinh nghiệm giảng dạy cùng các khóa
            học chất lượng. BSMART sẽ giúp các bạn có định hướng về nghề nghiệp
            và phát triển bản thân trên con đường trở thành lập trình viên
            chuyên nghiệp
          </p>
          <ButtonLink className="uppercase w-fit mt-16" path="/course">
            Xem khóa học
          </ButtonLink>
        </Flex>
      </section>
      <section
        className="aboutus before-layout"
        style={{
          backgroundImage: `url(${AboutImage})`,
        }}
      >
        <h1 className="text-center text-[40px] max-md:text-[32px] mb-[30px] max-md:mb-[5px]">
          Về chúng tôi
        </h1>
        <Row align="top">
          <Col lg={12}>
            <Space className="flex-1 p-3" size="middle" direction="vertical">
              <p className="text-[18px] font-medium leading-[30px] max-[992px]:leading-[23px] max-md:leading-[26px] max-md:text-[15px] text-justify">
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
              <Flex className="pb-3" justify="center" gap={12}>
                <ButtonLink className="uppercase" path="/course">
                  Xem khóa học
                </ButtonLink>
                <ButtonLink className="uppercase" path="/">
                  Hỗ trợ tư vấn
                </ButtonLink>
              </Flex>
            </Space>
          </Col>
          <Col className="px-3" lg={12}>
            <Image
              className="flex-1 rounded-lg"
              style={{ boxShadow: "0 0 15px #000" }}
              src={Banner2Image}
              preview={false}
            />
          </Col>
        </Row>
      </section>
      <HomeAdvantage />
      <section className="learning-path">
        <Row>
          <Col xs={24} lg={12}>
            <div
              className="rounded-lg bg-cover before-layout"
              style={{ backgroundImage: `url(${Banner3Image})` }}
            >
              <div className="absolute-cc">
                <h2>TRÁI NGÀNH</h2>
                <p>From Zero to Hero</p>
              </div>
            </div>
          </Col>
          <Col xs={24} lg={12}>
            <div
              className="rounded-lg bg-cover before-layout"
              style={{ backgroundImage: `url(${Banner4Image})` }}
            >
              <div className="absolute-cc">
                <h2>ĐÃ BIẾT LẬP TRÌNH</h2>
                <p>Đã có kiến thức tư duy lập trình và OOP</p>
              </div>
            </div>
          </Col>
        </Row>
      </section>
      <section className="py-[50px]">
        <h1 className="text-center text-[40px] max-md:text-[32px] mb-[30px]">
          Khoá học tiêu biểu
        </h1>
        <CourseCarousel
          courses={courses.filter((item) => item.sector != "fast")}
        />
      </section>
      <section className="py-[50px]">
        <h1 className="text-center text-[40px] max-md:text-[32px] mb-[30px]">
          Khoá học cấp tốc
        </h1>
        <CourseCarousel
          courses={courses.filter((item) => item.sector == "fast")}
        />
      </section>
      <section className="py-[50px]">
        <h1 className="text-center text-[40px] max-md:text-[32px] mb-[30px]">
          Mentor tiêu biểu
        </h1>
        <MentorCarousel mentors={mentors} />
      </section>
      <section
        className="advantages-2 before-layout"
        style={{ backgroundImage: `url(${FunFactImage})` }}
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
      <section className="py-[50px] bg-[#f5f7fc]">
        <h1 className="text-center text-[35px] py-[50px] px-[30px]">
          Nhận được sự tin tưởng của các đối tác
        </h1>
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
