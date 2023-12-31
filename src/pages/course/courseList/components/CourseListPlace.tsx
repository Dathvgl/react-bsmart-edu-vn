import {
  Button,
  Col,
  Flex,
  Form,
  List,
  Pagination,
  Row,
  Select,
  Space,
} from "antd";
import { useEffect, useState } from "react";
import { CardBase } from "~/components/Card";
import CourseCollapse from "./CourseCollapse";
import { CourseType, courses } from "~/demo";
import { useLocation } from "react-router-dom";

type FormMind = {
  fromPrice: number;
  toPrice: number;
  learnMethod?: string[];
  levels?: string[];
  sectors?: string[];
};

export default function CourseList() {
  const pageSize = 6;
  const sectorPass: string | undefined = useLocation().state?.sector;

  const [form] = Form.useForm();
  const [select, setSelect] = useState<string>("course");
  const [page, setPage] = useState<number>(1);
  const [data, setData] = useState<CourseType[]>(structuredClone(courses));

  useEffect(() => {
    onSort(data);

    if (sectorPass) {
      form.setFieldValue("sectors", [sectorPass]);
      form.submit();
    }
  }, [select, sectorPass]);

  function onFinish(event: FormMind) {
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
    <section className="py-[50px]">
      <Row className="w-full">
        <Col xs={24} sm={24} md={12} lg={6}>
          <Form
            form={form}
            className="antd-form px-5"
            layout="vertical"
            onFinish={onFinish}
            autoComplete="off"
          >
            <CourseCollapse />
            <Form.Item>
              <Button
                className="w-full mt-5 p-3 h-fit font-bold"
                type="primary"
                htmlType="submit"
              >
                Tìm kiếm
              </Button>
            </Form.Item>
          </Form>
        </Col>
        <Col className="md:mb-[50px]" md={12} lg={18}>
          <Space size="middle" className="w-full" direction="vertical">
            <Flex
              className="pr-[25px] max-sm:px-4 max-sm:flex-col max-sm:items-start"
              justify="space-between"
              align="center"
              gap={12}
            >
              <h5 className="text-[18px]">{data.length} Khóa học</h5>
              <Select
                className="w-[235px] h-[38px]"
                value={select}
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
              className="w-full max-md:[&_.ant-row]:!mx-0 max-md:[&_.ant-col]:!px-4"
              grid={{ gutter: 25, xxl: 3, xl: 3, lg: 2, sm: 1, xs: 1 }}
              dataSource={data.slice((page - 1) * pageSize, page * pageSize)}
              renderItem={(item) => (
                <List.Item>
                  <CardBase
                    item={item}
                    coverLink
                    levelCourseClassName="[&>div]:!top-[30%]"
                    btnLinkDivider
                    btnLinkDividerClassName="mt-2 mb-2 border-black/20"
                    btnLinkClassName="w-full block text-center !p-4 text-[16px] mb-8 !font-bold"
                  />
                </List.Item>
              )}
            />
            <Pagination
              className="antd-pagination flex-cc"
              current={page}
              onChange={setPage}
              pageSize={pageSize}
              total={data.length}
            />
          </Space>
        </Col>
      </Row>
    </section>
  );
}
