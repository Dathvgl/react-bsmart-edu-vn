import { Badge, Image } from "antd";
import { Link } from "react-router-dom";
import CartLogo from "~/assets/icon-shopping-cart.webp";
import HeaderBottom from "./components/HeaderBottom";
import HeaderTop from "./components/HeaderTop";

export default function BaseHeader() {
  return (
    <>
      <HeaderTop />
      <HeaderBottom />
    </>
  );
}

export function HeaderCart() {
  return (
    <Link to="/">
      <Badge count={0} showZero offset={[-15, 15]}>
        <Image src={CartLogo} preview={false} height={62} />
      </Badge>
    </Link>
  );
}
