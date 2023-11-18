import { Breadcrumb, Flex } from "antd";
import { Link } from "react-router-dom";
import BannerImage from "~/assets/course/banner-2.webp";
import "../index.css";
import CourseListPlace from "./components/CourseListPlace";

export default function CourseListPage() {
  return (
    <div>
      <section
        className="banner-course before-layout flex-cc"
        style={{ backgroundImage: `url(${BannerImage})` }}
      >
        <Flex className="relative" vertical align="center">
          <h1 className="base-txt mb-[25px] text-[45px]">Danh sách khoá học</h1>
          <Breadcrumb
            separator=">"
            items={[{ title: "Trang chủ", path: "/" }, { title: "Khóa học" }]}
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
      <CourseListPlace />
    </div>
  );
}
