import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Flex, Progress, Rate } from "antd";
import { CourseType } from "~/demo";

export default function CourseDetailRate({ course }: { course: CourseType }) {
  return (
    <section>
      <Flex vertical gap={10}>
        <h3 className="text-[20px]">Đánh giá khóa học</h3>
        <Flex
          className="p-[50px] max-md:flex-col border border-solid border-black/20 rounded-lg"
          gap={32}
        >
          <Flex className="max-md:items-center" vertical gap={20}>
            <h2 className="text-[#0E0A38] text-[65px]">{course.rate}</h2>
            <Rate
              className="base-txt"
              disabled
              allowHalf
              defaultValue={course.rate}
            />
            <span className="text-[#999999]">5 Đánh giá</span>
          </Flex>
          <div className="flex-1 [&_span]:text-[14px]">
            <Flex justify="space-between" align="center" gap={16}>
              <Flex align="center" gap={8}>
                <FontAwesomeIcon className="base-txt" icon={faStar} />
                <span>5</span>
              </Flex>
              <Progress
                className="flex-1"
                status="normal"
                strokeColor="#f4c150"
                percent={100}
                format={() => "5 Đánh giá"}
              />
            </Flex>
            <Flex align="center" gap={16}>
              <Flex align="center" gap={8}>
                <FontAwesomeIcon className="base-txt" icon={faStar} />
                <span>4</span>
              </Flex>
              <Progress
                className="flex-1"
                status="normal"
                strokeColor="#f4c150"
                percent={0}
                format={() => "0 Đánh giá"}
              />
            </Flex>
            <Flex align="center" gap={16}>
              <Flex align="center" gap={8}>
                <FontAwesomeIcon className="base-txt" icon={faStar} />
                <span>3</span>
              </Flex>
              <Progress
                className="flex-1"
                status="normal"
                strokeColor="#f4c150"
                percent={0}
                format={() => "0 Đánh giá"}
              />
            </Flex>
            <Flex align="center" gap={16}>
              <Flex align="center" gap={8}>
                <FontAwesomeIcon className="base-txt" icon={faStar} />
                <span>2</span>
              </Flex>
              <Progress
                className="flex-1"
                status="normal"
                strokeColor="#f4c150"
                percent={0}
                format={() => "0 Đánh giá"}
              />
            </Flex>
            <Flex align="center" gap={16}>
              <Flex align="center" gap={8}>
                <FontAwesomeIcon className="base-txt" icon={faStar} />
                <span>1</span>
              </Flex>
              <Progress
                className="flex-1"
                status="normal"
                strokeColor="#f4c150"
                percent={0}
                format={() => "0 Đánh giá"}
              />
            </Flex>
          </div>
        </Flex>
      </Flex>
    </section>
  );
}
