import {
  Breadcrumb,
  Button,
  Checkbox,
  Col,
  Flex,
  Form,
  InputNumber,
  List,
  Pagination,
  Row,
  Select,
  Space,
} from "antd";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BannerImage from "~/assets/course/banner-2.webp";
import { CardBase } from "~/components/Card";
import { CourseType, courses, learnMethod, levels, sectors } from "~/demo";
import "./index.css";

type FormMind = {
  fromPrice: number;
  toPrice: number;
  learnMethod?: string[];
  levels?: string[];
  sectors?: string[];
};

const sectionBase: React.CSSProperties = { paddingBlock: 50 };

export default function CourseListPage() {
  const pageSize = 6;
  const [form] = Form.useForm();
  const [select, setSelect] = useState<string>("course");
  const [page, setPage] = useState<number>(1);
  const [data, setData] = useState<CourseType[]>(structuredClone(courses));

  useEffect(() => {
    onSort(data);
  }, [select]);

  function onFinish(event: FormMind) {
    console.log(event);

    const list = courses.filter((item) => {
      const lvCheck = event.levels
        ? event.levels.length == 0
          ? true
          : event.levels.includes(item.level)
        : true;

      const stCheck = event.sectors
        ? event.sectors.length == 0
          ? true
          : event.sectors.includes(item.sector)
        : true;

      const prCheck =
        item.price >= event.fromPrice && item.price <= event.toPrice;

      return lvCheck && stCheck && prCheck;
    });

    onSort(list);
  }

  function onSort(list: CourseType[]) {
    switch (select) {
      case "register":
        setData(list.sort((a, b) => b.register - a.register));
        break;
      case "az":
        setData(list.sort((a, b) => a.name.localeCompare(b.name)));
        break;
      case "za":
        setData(list.sort((a, b) => b.name.localeCompare(a.name)));
        break;
      case "lastest":
      case "soon":
      case "course":
      default:
        setData(list.sort((a, b) => b.lesson - a.lesson));
    }

    setPage(1);
  }

  return (
    <div>
      <section
        className="banner-course flex-cc"
        style={{
          backgroundImage: `url(${BannerImage})`,
          backgroundSize: "cover",
          padding: "110px 0 100px",
        }}
      >
        <Flex style={{ position: "relative" }} vertical align="center">
          <h1
            className="base-txt"
            style={{ fontSize: 45, marginTop: 0, marginBottom: 25 }}
          >
            Danh sách khoá học
          </h1>
          <Breadcrumb
            separator=">"
            items={[{ title: "Trang chủ", path: "/" }, { title: "Khóa học" }]}
            itemRender={(route) => {
              if (!route.path) {
                return <span style={{ color: "white" }}>{route.title}</span>;
              } else {
                return (
                  <Link
                    className="base-text"
                    style={{ color: "white" }}
                    to={route.path}
                  >
                    {route.title}
                  </Link>
                );
              }
            }}
          />
        </Flex>
      </section>
      <section style={sectionBase}>
        <Row style={{ width: "100%" }}>
          <Col xs={24} sm={24} md={6}>
            <Form
              form={form}
              className="antd-form"
              style={{ paddingInline: 20 }}
              layout="vertical"
              onFinish={onFinish}
              autoComplete="off"
            >
              <Space style={{ width: "100%" }} direction="vertical">
                <p>KHOẢNG GIÁ</p>
                <span>Từ giá</span>
                <Form.Item
                  className="item-form"
                  name="fromPrice"
                  initialValue={0}
                >
                  <InputNumber<number>
                    style={{ width: "100%" }}
                    formatter={(value) =>
                      `${value} VND`.replace(/\B(?=(\d{3})+(?!\d))/g, ".")
                    }
                    parser={(value) =>
                      Number.parseInt(
                        value?.replace(" VND", "").replaceAll(".", "") ?? "0"
                      ) ?? 0
                    }
                    onClick={(event) =>
                      event.currentTarget.setSelectionRange(
                        event.currentTarget.value.length - 4,
                        event.currentTarget.value.length - 4
                      )
                    }
                  />
                </Form.Item>
                <span>Đến giá</span>
                <Form.Item
                  className="item-form"
                  name="toPrice"
                  initialValue={10000000}
                >
                  <InputNumber<number>
                    style={{ width: "100%" }}
                    formatter={(value) =>
                      `${value} VND`.replace(/\B(?=(\d{3})+(?!\d))/g, ".")
                    }
                    parser={(value) =>
                      Number.parseInt(
                        value?.replace(" VND", "").replaceAll(".", "") ?? "0"
                      ) ?? 0
                    }
                    onClick={(event) =>
                      event.currentTarget.setSelectionRange(
                        event.currentTarget.value.length - 4,
                        event.currentTarget.value.length - 4
                      )
                    }
                  />
                </Form.Item>
              </Space>
              <p>HÌNH THỨC HỌC</p>
              <Form.Item
                className="item-form"
                name="learnMethod"
                valuePropName="checked"
              >
                <Checkbox.Group
                  className="check-form"
                  options={learnMethod.map((item) => ({
                    label: item.name,
                    value: item.id,
                  }))}
                />
              </Form.Item>
              <p>TRÌNH ĐỘ</p>
              <Form.Item
                className="item-form"
                name="levels"
                valuePropName="checked"
              >
                <Checkbox.Group
                  className="check-form"
                  options={levels.map((item) => ({
                    label: item.name,
                    value: item.id,
                  }))}
                />
              </Form.Item>
              <p>LĨNH VỰC</p>
              <Form.Item
                className="item-form"
                name="sectors"
                valuePropName="checked"
              >
                <Checkbox.Group
                  className="check-form"
                  options={sectors.map((item) => ({
                    label: item.name,
                    value: item.id,
                  }))}
                />
              </Form.Item>
              <Form.Item>
                <Button
                  style={{ width: "100%", marginTop: 20 }}
                  type="primary"
                  htmlType="submit"
                >
                  Tìm kiếm
                </Button>
              </Form.Item>
            </Form>
          </Col>
          <Col md={18}>
            <Space size="middle" style={{ width: "100%" }} direction="vertical">
              <Flex
                style={{ paddingRight: 25 }}
                justify="space-between"
                align="center"
                gap={12}
              >
                <h5 style={{ margin: 0, fontSize: 18 }}>
                  {data.length} Khóa học
                </h5>
                <Select
                  value={select}
                  style={{ width: 235, height: 38 }}
                  onChange={setSelect}
                  options={[
                    { value: "course", label: "Sắp xếp khóa học" },
                    { value: "lastest", label: "Khóa học mới nhất" },
                    { value: "register", label: "Khóa học nhiều người học" },
                    { value: "soon", label: "Khóa học sắp bắt đầu" },
                    { value: "az", label: "A - Z" },
                    { value: "za", label: "Z - A" },
                  ]}
                />
              </Flex>
              <List
                style={{ width: "100%" }}
                grid={{ gutter: 25, xxl: 3, xl: 3, lg: 2, sm: 1, xs: 1 }}
                dataSource={data.slice((page - 1) * pageSize, page * pageSize)}
                renderItem={(item) => (
                  <List.Item>
                    <CardBase item={item} />
                  </List.Item>
                )}
              />
              <Pagination
                current={page}
                onChange={setPage}
                pageSize={pageSize}
                total={data.length}
              />
            </Space>
          </Col>
        </Row>
      </section>
    </div>
  );
}
