import { Col, Divider, Image, Row, Space } from "antd";
import { Footer } from "antd/es/layout/layout";
import { Link } from "react-router-dom";
import GmailLogo from "~/assets/icon-gmail.webp";
import LocationLogo from "~/assets/icon-location.webp";
import HomeFooterLogo from "~/assets/icon-logo-footer.webp";
import PhoneLogo from "~/assets/icon-phone.webp";
import { SocialIconLink, listNav } from "../BaseLayout";

export default function BaseFooter() {
  return (
    <Footer className="text-white font-normal bg-black pt-12">
      <Row gutter={40}>
        <Col md={12} lg={7}>
          <Space size="middle" direction="vertical">
            <Link to="/">
              <Image src={HomeFooterLogo} preview={false} height={75} />
            </Link>
            <section className="text-justify">
              Chúng tôi cung cấp các khoá học chất lượng cao để cải thiện các kỹ
              năng lập trình của bạn. Tất cả các mentor của chúng tôi đều có
              nhiều kinh nghiệm trong thực tế và giảng dạy.
            </section>
            <section>
              <h4 className="mb-2">Theo dõi chúng tôi tại:</h4>
              <SocialIconLink fill="white" />
            </section>
          </Space>
        </Col>
        <Col className="max-md:pt-12" xs={24} sm={24} md={12} lg={4}>
          <Space direction="vertical">
            <h3 className="base-txt mb-2">Menu</h3>
            <Space size="middle" direction="vertical">
              {listNav.map((item) => (
                <Link key={item.key} to={item.path}>
                  {item.name}
                </Link>
              ))}
            </Space>
          </Space>
        </Col>
        <Col className="max-[991px]:pt-12" xs={24} sm={24} md={12} lg={5}>
          <Space size="large" direction="vertical">
            <Space direction="vertical">
              <h3 className="base-txt mb-2">Điều khoản</h3>
              <Link to="/">Chính sách bảo mật</Link>
              <Link to="/">Điều khoản dịch vụ</Link>
            </Space>
            <Space direction="vertical">
              <h3 className="base-txt mb-2">Cộng tác viên</h3>
              <Link to="/">Đăng ký Cộng tác viên</Link>
              <Link to="/">Đăng ký Mentor</Link>
            </Space>
          </Space>
        </Col>
        <Col className="max-[991px]:pt-12 text-[15px]" md={12} lg={8}>
          <Space direction="vertical">
            <h3 className="base-txt mb-2">Liên hệ với chúng tôi</h3>
            <div>
              <Image
                className="object-cover"
                src={LocationLogo}
                preview={false}
                width={40}
                height={60}
                alt="Liên hệ với BSmart thông qua địa điểm"
              />
              Tòa S9.02A, Vinhomes Grand Park, TP.Thủ Đức
            </div>
            <div>
              <Image
                src={GmailLogo}
                preview={false}
                width={40}
                alt="Liên hệ với BSmart thông qua Gmail"
              />
              admin@bsmart.edu.vn
            </div>
            <div>
              <Image
                src={PhoneLogo}
                preview={false}
                width={40}
                alt="Liên hệ với BSmart thông qua số điện thoại"
              />
              028 9999 79 39
            </div>
          </Space>
        </Col>
      </Row>
      <Divider dashed />
      <p className="flex-cc">
        <span className="text-[13px]">
          © Bản quyền BSmart 2023 - Empowered by{" "}
          <Link style={{ color: "blue" }} to="/">
            BSmart
          </Link>{" "}
          - version 1.1.13
        </span>
      </p>
    </Footer>
  );
}
