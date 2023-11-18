import { SearchOutlined } from "@ant-design/icons";
import { Col, Form, Image, Input, Row, Space } from "antd";
import { Header } from "antd/es/layout/layout";
import { Link } from "react-router-dom";
import GmailLogo from "~/assets/icon-gmail.webp";
import PhoneLogo from "~/assets/icon-phone.webp";
import { SocialIconLink } from "~/layouts/BaseLayout/BaseLayout";

export default function HeaderTop() {
  return (
    <Header className="antd-header">
      <Row
        className="h-[38px]"
        justify="space-between"
        align="middle"
        gutter={20}
      >
        <Col>
          <SocialIconLink fill="white" />
        </Col>
        <Col>
          <Space size="middle">
            <div>
              <Image src={GmailLogo} preview={false} width={32} />
              admin@bsmart.edu.vn
            </div>
            <div>
              <Image src={PhoneLogo} preview={false} width={32} />
              028 9999 79 39
            </div>
          </Space>
        </Col>
        <Col lg={0} xxl={24} flex="auto">
          <Form className="flex-cc">
            <Input
              className="antd-input"
              placeholder="Tìm kiếm khóa học"
              suffix={
                <SearchOutlined className="base-text text-[20px] text-[rgb(255,255,255)]/[.50]" />
              }
            />
          </Form>
        </Col>
        <Col>
          <Space size="small">
            <Link className="base-text" to="/">
              Đăng nhập
            </Link>
            <span>|</span>
            <Link className="base-text" to="/">
              Đăng ký
            </Link>
          </Space>
        </Col>
      </Row>
    </Header>
  );
}
