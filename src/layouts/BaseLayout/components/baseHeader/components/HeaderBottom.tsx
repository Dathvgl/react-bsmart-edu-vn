import { Col, Image, Menu, Row } from "antd";
import { Link, useLocation } from "react-router-dom";
import HomeLogo from "~/assets/icon-logo.webp";
import { listNav } from "~/layouts/BaseLayout/BaseLayout";
import { HeaderCart } from "../BaseHeader";
import HeaderSider from "./HeaderSider";

export default function HeaderBottom() {
  const { pathname } = useLocation();
  const short = pathname.split("/")[1];

  return (
    <Row className="layout-header" justify="space-between" align="middle">
      <Col>
        <Link to="/">
          <Image src={HomeLogo} preview={false} height={75} />
        </Link>
      </Col>
      <Col className="antd-menu" xs={0} sm={0} lg={24} flex="auto">
        <div id="header-menu-nav-land" className="absolute-cc w-full">
          <Menu
            mode="horizontal"
            selectedKeys={[short == "" ? "home" : short]}
            items={listNav.map((item) => {
              return {
                key: item.key,
                label: (
                  <Link key={item.key} to={item.path}>
                    {item.name}
                  </Link>
                ),
                children: item.children?.map((item) => {
                  return {
                    key: item.key,
                    label: (
                      <Link
                        key={item.key}
                        to={item.path}
                        state={{ sector: item.value }}
                      >
                        {item.name}
                      </Link>
                    ),
                  };
                }),
              };
            })}
          />
        </div>
      </Col>
      <Col xs={0} sm={0} lg={2} flex="auto">
        <HeaderCart />
      </Col>
      <Col lg={0} pull={2}>
        <HeaderSider />
      </Col>
    </Row>
  );
}
