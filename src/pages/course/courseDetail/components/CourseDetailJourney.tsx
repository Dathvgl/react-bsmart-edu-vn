import { Flex } from "antd";
import Numbering from "~/components/Numbering";

export default function CourseDetailJourney() {
  return (
    <section>
      <Flex className="course-detail-journey" vertical gap={10}>
        <h3 className="text-[20px]">Lộ trình khóa học</h3>
        <Numbering
          items={[
            {
              label: "h2",
              labels: ["strong", "em"],
              prefix: "Module",
              suffix: ":",
              title: "Giới thiệu về Web API",
              children: [
                {
                  label: "p",
                  suffix: ".",
                  title: "Cài đặt môi trường",
                },
                {
                  label: "p",
                  suffix: ".",
                  title: "Hướng dẫn sử dụng Visual Studio",
                },
                {
                  label: "p",
                  suffix: ".",
                  title: "Hướng dẫn sử dụng Postman, Swagger",
                },
              ],
            },
            {
              label: "h2",
              labels: ["strong", "em"],
              prefix: "Module",
              suffix: ":",
              title: "Xây dựng ứng dụng Asp.Net Core API đầu tiên",
            },
            {
              label: "h2",
              labels: ["strong", "em"],
              prefix: "Module",
              suffix: ":",
              title: "Làm việc với Relational Data sử dụng EF Core 7",
            },
            {
              label: "h2",
              labels: ["strong", "em"],
              prefix: "Module",
              suffix: ":",
              title: "Xây dựng Project hoàn thiện",
            },
            {
              label: "h2",
              labels: ["strong", "em"],
              prefix: "Module",
              suffix: ":",
              title:
                "Chia sẻ kinh nghiệm thực tiễn và kinh nghiệm phỏng vấn xin việc",
            },
          ]}
        />
      </Flex>
    </section>
  );
}
