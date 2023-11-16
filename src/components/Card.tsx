import { CalendarOutlined, UserOutlined } from "@ant-design/icons";
import { Card, Image, Rate, Space } from "antd";
import { Link } from "react-router-dom";
import { CourseType, levels, mentors } from "~/demo";
import { ButtonLink } from "./Button";

export function CardBase({ item }: { item: CourseType }) {
  const mentor = mentors.find((x) => x.id == item.mentor);
  const level = levels.find((x) => x.id == item.level);

  return (
    <Card
      key={item.id}
      className="card-base"
      cover={
        <Image
          style={{ objectFit: "cover" }}
          src={item.thumbnail}
          preview={false}
          height={200}
          alt={item.name}
        />
      }
    >
      <Image
        className="logo-course"
        style={{ objectFit: "cover" }}
        src={mentor?.thumbnail}
        alt={mentor?.name}
        preview={false}
        width={72}
        height={72}
      />
      <Image
        className="level-course"
        style={{ objectFit: "cover" }}
        src={level?.thumbnail}
        alt={level?.name}
        preview={false}
        width={50}
        height={50}
      />
      <Space size="small" direction="vertical">
        <h5 className="line-clamp-2" style={{ height: 75 }}>
          {item.name}
        </h5>
        <Link to="/" className="flex-sc" style={{ gap: 12 }}>
          <p style={{ color: "#999" }}>Mentor</p>
          <p className="base-txt">{mentor?.name}</p>
        </Link>
        <span>
          <UserOutlined className="base-text" />
          <i style={{ marginLeft: 5 }}>{item.register} Học viên</i>
        </span>
        <p className="line-clamp-3" style={{ height: 75 }}>
          {item.description}
        </p>
        <Rate
          disabled
          allowHalf
          defaultValue={item.rate}
          style={{ color: "#ff630e" }}
        />
        <Space size="small">
          <span
            style={{ color: "firebrick", fontWeight: "bold", fontSize: 18 }}
          >
            {item.price.toLocaleString()} VND
          </span>
          <span>
            <CalendarOutlined />
            <i style={{ marginLeft: 5 }}>{item.lesson} Buổi học</i>
          </span>
        </Space>
        <ButtonLink
          style={{
            width: "100%",
            display: "block",
            textAlign: "center",
          }}
          path={`/course/${item.id}`}
        >
          XEM CHI TIẾT
        </ButtonLink>
      </Space>
    </Card>
  );
}
