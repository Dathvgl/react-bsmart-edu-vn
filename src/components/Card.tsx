import { CalendarOutlined } from "@ant-design/icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, Divider, Image, Rate, Space } from "antd";
import { Link } from "react-router-dom";
import { CourseType, levels, mentors } from "~/demo";
import { ButtonLink } from "./Button";

type CardBaseProps = {
  item: CourseType;
  coverLink?: boolean;
  levelCourseClassName?: string;
  btnLinkDivider?: boolean;
  btnLinkDividerClassName?: string;
  btnLinkClassName?: string;
};

export function CardBase({
  item,
  coverLink,
  levelCourseClassName,
  btnLinkDivider,
  btnLinkDividerClassName,
  btnLinkClassName,
}: CardBaseProps) {
  const mentor = mentors.find((x) => x.id == item.mentor);
  const level = levels.find((x) => x.id == item.level);

  const coverCard = (
    <Image
      className="object-cover"
      src={item.thumbnail}
      preview={false}
      height={200}
      alt={item.name}
    />
  );

  return (
    <Card
      key={item.id}
      className="card-base"
      cover={
        coverLink ? (
          <Link className="h-[200px] [&_*]:w-full" to={`/course/${item.id}`}>
            {coverCard}
          </Link>
        ) : (
          coverCard
        )
      }
    >
      <Image
        className="logo-course object-cover"
        src={mentor?.thumbnail}
        alt={mentor?.name}
        preview={false}
        width={72}
        height={72}
      />
      <div className={levelCourseClassName}>
        <Image
          className="level-course object-cover"
          src={level?.thumbnail}
          alt={level?.name}
          preview={false}
          width={50}
          height={50}
        />
      </div>
      <Space size="small" direction="vertical">
        <h5 className="line-clamp-2 h-[75px]">{item.name}</h5>
        <Link to="/" className="flex-sc gap-2 font-bold">
          <p className="text-[#999]">Mentor</p>
          <p className="base-txt">{mentor?.name}</p>
        </Link>
        <span>
          <FontAwesomeIcon icon={faUser} />
          <i className="ml-[5px] font-bold">{item.register} Học viên</i>
        </span>
        <p className="line-clamp-3 h-[75px]">{item.description}</p>
        <Rate
          className="base-txt"
          disabled
          allowHalf
          defaultValue={item.rate}
        />
        <Space size="small">
          <span className="text-[firebrick] font-bold text-[18px]">
            {item.price.toLocaleString()} VND
          </span>
          <span>
            <CalendarOutlined />
            <i className="ml-[5px] font-bold">{item.lesson} Buổi học</i>
          </span>
        </Space>
        {btnLinkDivider && <Divider className={btnLinkDividerClassName} />}
        <ButtonLink
          className={
            btnLinkClassName ??
            "w-full block text-center !py-[5px] text-[20px] hover:!bg-[#ff630e] hover:!text-white hover:opacity-80 !font-normal"
          }
          path={`/course/${item.id}`}
        >
          XEM CHI TIẾT
        </ButtonLink>
      </Space>
    </Card>
  );
}
