import { CloseOutlined, MenuOutlined, SearchOutlined } from "@ant-design/icons";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Badge,
  Col,
  Collapse,
  Drawer,
  Flex,
  Form,
  Image,
  Input,
  Menu,
  Row,
  Space,
} from "antd";
import { Header } from "antd/es/layout/layout";
import { createRef, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import GmailLogo from "~/assets/icon-gmail.webp";
import HomeMobileLogo from "~/assets/icon-logo-mobile.webp";
import HomeLogo from "~/assets/icon-logo.webp";
import PhoneLogo from "~/assets/icon-phone.webp";
import CartLogo from "~/assets/icon-shopping-cart.webp";
import { SocialIconLink, listNav } from "../BaseLayout";

export default function BaseHeader() {
  return (
    <>
      <HeaderTop />
      <HeaderBottom />
    </>
  );
}

function HeaderCart() {
  return (
    <Link to="/">
      <Badge count={0} showZero offset={[-15, 15]}>
        <Image src={CartLogo} preview={false} height={62} />
      </Badge>
    </Link>
  );
}

function HeaderTop() {
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

function HeaderBottom() {
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
                      <Link key={item.key} to={item.path}>
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

function HeaderSider() {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <MenuOutlined className="base-text text-[25px]" onClick={showDrawer} />
      <Drawer placement="right" closeIcon={null} onClose={onClose} open={open}>
        <Flex vertical gap={20}>
          <Flex justify="space-between" align="center">
            <Link to="/">
              <Image
                className="object-cover"
                src={HomeMobileLogo}
                preview={false}
                width={100}
                height={75}
              />
            </Link>
            <CloseOutlined onClick={onClose} />
          </Flex>
          <HeaderCart />
          <DrawerCollapse callback={onClose} />
          <Form>
            <Input
              className="text-[20px]"
              placeholder="Tìm kiếm khóa học"
              suffix={<SearchOutlined className="base-text text-[20px]" />}
            />
          </Form>
          <Space direction="vertical">
            <div className="flex-sc text-[20px]">
              <Image src={GmailLogo} preview={false} width={40} />
              admin@bsmart.edu.vn
            </div>
            <div className="flex-sc text-[20px]">
              <Image src={PhoneLogo} preview={false} width={40} />
              <span className="cursor-pointer text-blue-500">
                028 9999 79 39
              </span>
            </div>
          </Space>
          <SocialIconLink fill="black" />
          <Space size="small">
            <Link className="base-text" to="/">
              Đăng nhập
            </Link>
            <span>|</span>
            <Link className="base-text" to="/">
              Đăng ký
            </Link>
          </Space>
        </Flex>
      </Drawer>
    </>
  );
}

function DrawerCollapse({ callback }: { callback: () => void }) {
  const navigate = useNavigate();
  const [actives, setActives] = useState<string[]>([]);
  const refs = Array.from({ length: listNav.length }, () =>
    createRef<HTMLDivElement>()
  );

  useEffect(() => {
    const { length } = refs;
    for (let index = 0; index < length; index++) {
      const ref = refs[index];
      const nav = listNav[index];

      if (ref.current) {
        const span: HTMLSpanElement = ref.current.children[0]
          .children[1] as HTMLSpanElement;
        span.onclick = () => {
          callback();
          navigate(nav.path);
        };
      }
    }
  }, []);

  function onActive(key: string | string[]) {
    if (typeof key == "string") {
      setActives([key]);
    } else setActives(key);
  }

  return (
    <div className="drawer-collapse">
      <Collapse
        activeKey={actives}
        collapsible="icon"
        ghost
        expandIcon={({ isActive, ...rest }) => {
          const panel = rest as any;
          const children: React.ReactNode | undefined = panel.children;
          if (!children) return <></>;
          return <FontAwesomeIcon icon={isActive ? faMinus : faPlus} />;
        }}
        expandIconPosition="end"
        onChange={onActive}
        items={listNav.map((item, index) => ({
          ref: refs[index],
          key: item.key,
          label: item.name,
          children: item.children ? (
            <Flex vertical gap={8}>
              {item.children.map((item) => (
                <Link key={item.key} to={item.path}>
                  {item.name}
                </Link>
              ))}
            </Flex>
          ) : undefined,
        }))}
      />
    </div>
  );
}
