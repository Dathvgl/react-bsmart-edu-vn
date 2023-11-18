import { Breadcrumb, Divider, Flex, Image, Rate } from "antd";
import { Link, useParams } from "react-router-dom";
import BannerImage from "~/assets/course/banner-2.webp";
import { CourseCarousel } from "~/components/Course";
import { courses, levels, mentors, sectors } from "~/demo";
import "../index.css";
import CourseDetailComment from "./components/CourseDetailComment";
import CourseDetailInfo from "./components/CourseDetailInfo";
import CourseDetailJourney from "./components/CourseDetailJourney";
import CourseDetailRate from "./components/CourseDetailRate";

export default function CourseDetailPage() {
  const { id } = useParams();

  if (!id) return <></>;
  const course = courses.find((item) => item.id == id);
  if (!course) return <></>;
  const mentor = mentors.find((item) => item.id == course.mentor);
  const level = levels.find((item) => item.id == course.level);
  const sector = sectors.find((item) => item.id == course.sector);
  if (!mentor || !level || !sector) return <></>;

  return (
    <div>
      <section
        className="banner-course before-layout flex-cc"
        style={{ backgroundImage: `url(${BannerImage})` }}
      >
        <Flex className="relative" vertical align="center">
          <h1 className="base-txt mb-[25px] text-[35px]">{course.name}</h1>
          <Breadcrumb
            separator=">"
            items={[
              { title: "Trang chủ", path: "/" },
              { title: "Khóa học", path: "/course" },
              { title: course.name },
            ]}
            itemRender={(route) => {
              if (!route.path) {
                return <span style={{ color: "white" }}>{route.title}</span>;
              } else {
                return (
                  <Link className="base-text !text-white" to={route.path}>
                    {route.title}
                  </Link>
                );
              }
            }}
          />
        </Flex>
      </section>
      <div className="max-lg:mx-[10%] lg:mx-[2%]">
        <section className="pt-[100px] pb-[70px]">
          <Flex className="max-[992px]:flex-col-reverse" gap={24}>
            <div className="flex-1">
              <Flex
                className="max-[992px]:flex-col"
                justify="space-between"
                align="center"
                gap={8}
              >
                <Flex justify="space-between" align="center" gap={8}>
                  <Image
                    className="object-cover rounded-full"
                    src={mentor.thumbnail}
                    preview={false}
                    alt={mentor.name}
                    width={35}
                    height={35}
                  />
                  <span className="text-[#999]">bởi</span>
                  <strong>Mentor {mentor.name}</strong>
                </Flex>
                <Flex justify="space-between" align="center" gap={8}>
                  <Rate
                    className="base-txt"
                    disabled
                    allowHalf
                    defaultValue={course.rate}
                  />
                  <span>(5 Đánh giá)</span>
                </Flex>
              </Flex>
              <Flex className="my-6" align="center" gap={24}>
                <Flex align="center" gap={6}>
                  <p>Lĩnh vực:</p>
                  <Link
                    className="px-1 py-0.5 rounded !text-[#999999] bg-[#F5F5F5] hover:!text-white hover:bg-[#ff630e]"
                    to="/course"
                    state={{ sector: sector.id }}
                  >
                    {sector.name}
                  </Link>
                </Flex>
                <Flex align="center" gap={6}>
                  <p>Cấp độ: {level.name}</p>
                  <Image
                    className="object-cover rounded-full"
                    src={level.thumbnail}
                    preview={false}
                    alt={level.name}
                    width={42}
                    height={42}
                  />
                </Flex>
              </Flex>
              <Flex
                className="max-[1200px]:flex-col"
                justify="space-between"
                gap={8}
              >
                <p className="text-[#FF630E]">
                  Số lượng học viên đăng ký {course.register}
                </p>
                <p className="text-[#FF630E]">Số lượng lớp đang mở: 0</p>
                <p className="text-[#FF630E]">
                  Ngày khai giảng lớp học mới: Hiện chưa có
                </p>
              </Flex>
              <Divider className="my-4 border-black/20" />
              <Flex vertical gap={16}>
                <section>
                  <Flex vertical gap={10}>
                    <h3 className="text-[20px]">Miêu tả khóa học</h3>
                    <p className="text-justify">{course.description}</p>
                  </Flex>
                </section>
                <CourseDetailJourney />
                <CourseDetailRate course={course} />
                <CourseDetailComment />
              </Flex>
            </div>
            <CourseDetailInfo course={course} />
          </Flex>
        </section>
        <section className="py-[50px]">
          <h1 className="text-[40px] px-5 max-md:text-[32px] mb-[30px]">
            Khoá học tiêu biểu
          </h1>
          <CourseCarousel
            courses={courses.filter((item) => item.sector != "fast")}
          />
        </section>
      </div>
    </div>
  );
}
