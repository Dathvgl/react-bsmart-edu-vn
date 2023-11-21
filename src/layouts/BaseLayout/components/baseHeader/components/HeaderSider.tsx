import { MenuOutlined, SearchOutlined } from "@ant-design/icons";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Drawer, Flex, Form, Image, Input, Space } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import GmailLogo from "~/assets/icon-gmail.webp";
import HomeMobileLogo from "~/assets/icon-logo-mobile.webp";
import PhoneLogo from "~/assets/icon-phone.webp";
import { SocialIconLink } from "~/layouts/BaseLayout/BaseLayout";
import { HeaderCart } from "../BaseHeader";
import HeaderDrawer from "./HeaderDrawer";

export default function HeaderSider() {
  const [open, setOpen] = useState(false);

  function showDrawer() {
    setOpen(true);
  }

  function onClose() {
    setOpen(false);
  }

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
            <FontAwesomeIcon
              className="base-text"
              icon={faClose}
              onClick={onClose}
            />
          </Flex>
          <HeaderCart />
          <HeaderDrawer callback={onClose} />
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
