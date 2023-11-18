import {
  faCheckCircle,
  faCogs,
  faFire,
  faQrcode,
  faTrophy,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Flex, Row } from "antd";

export default function HomeAdvantage() {
  return (
    <section className="advantages">
      <h1 className="text-center text-[40px] max-md:text-[32px] mb-[30px]">
        Điểm ưu việt tại BSmart
      </h1>
      <Row className="w-full px-5 !ml-0 !mr-0" gutter={30}>
        {[
          {
            icon: faCheckCircle,
            title: "Học theo lộ trình, có định hướng",
            content:
              "BSmart sẽ định hướng và đưa ra các lộ trình học lập trình nhằm phát triển năng lực và niềm đam mê lập trình của bạn để có việc ngay sau khi học.",
          },
          {
            icon: faCogs,
            title: "Nền tảng cốt lõi trong lập trình",
            content:
              "BSmart cung cấp những nền tảng, giá trị tư duy cốt lõi nhất trong lập trình. Bạn sẽ tự tin trước sự thay đổi của công nghệ và môi trường làm việc.",
          },
          {
            icon: faFire,
            title: "Mài giũa bạn qua thực tế",
            content:
              'Đội ngũ Mentor là những người dày dặn kinh nghiệm qua các dự án thực tế tại các công ty lớn sẽ truyền đạt những kinh nghiệm "máu lửa" cho bạn.',
          },
          {
            icon: faUsers,
            title: "Mentor tận tâm",
            content:
              "Bạn sẽ được giao dự án và Teamwork ngay từ ngày đầu tiên. Đóng vai trò một thành viên trong quy trình Scrum, Agile. Được Mentor hỗ trợ tận tâm, nhiệt tình.",
          },
          {
            icon: faQrcode,
            title: "Công nghệ mới, thực tế",
            content:
              "Bạn được học và trải nghiệm các công nghệ lập trình mới nhất, chuyên sâu, bám sát nhu cầu tuyển dụng thực tế từ doanh nghiệp.",
          },
          {
            icon: faTrophy,
            title: "Trao tay chìa khóa thành công",
            content:
              "Hướng dẫn viết CV, phỏng vấn. Kết nối, gặp gỡ, phỏng vấn cùng doanh nghiệp ngay sau khi tốt nghiệp.",
          },
        ].map((item) => (
          <Col key={item.title} lg={8}>
            <Flex align="center" gap={12}>
              <FontAwesomeIcon
                className="text-[30px] hover:opacity-80"
                color="#ff630e"
                icon={item.icon}
              />
              <h4 className="base-txt text-[22px] my-[10px]">{item.title}</h4>
            </Flex>
            <p className="text-justify leading-[30px] text-[20px] font-medium mb-4">
              {item.content}
            </p>
          </Col>
        ))}
      </Row>
    </section>
  );
}
