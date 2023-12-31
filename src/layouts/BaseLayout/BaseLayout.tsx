import { Layout, Space } from "antd";
import { Link, Outlet } from "react-router-dom";
import BaseFooter from "./components/BaseFooter";
import BaseHeader from "./components/baseHeader/BaseHeader";
import "./index.css";

type ListNavType = {
  key: string;
  path: string;
  name: string;
  value?: string;
  children?: ListNavType[];
};

export const listNav: ListNavType[] = [
  {
    key: "home",
    path: "/",
    name: "Trang Chủ",
  },
  {
    key: "about",
    path: "/about",
    name: "Về Chúng tôi",
    children: [
      {
        key: "about:1",
        path: "/about/founder",
        name: "Câu Chuyện Founder",
      },
      {
        key: "about:2",
        path: "/about/lms",
        name: "Nền Tảng LMS",
      },
    ],
  },
  {
    key: "stem",
    path: "/stem",
    name: "Khóa Học STEM",
  },
  {
    key: "course",
    path: "/course",
    name: "Khóa Học",
    children: [
      { key: "course:1", path: "/course", name: "Back-End", value: "backend" },
      {
        key: "course:2",
        path: "/course",
        name: "Front-End",
        value: "frontend",
      },
      { key: "course:3", path: "/course", name: "Database", value: "database" },
      { key: "course:4", path: "/course", name: "Cấp tốc", value: "fast" },
      { key: "course:5", path: "/course", name: "Other", value: "other" },
      { key: "course:6", path: "/course", name: "STEM", value: "stem" },
    ],
  },
  {
    key: "mentor",
    path: "/mentor",
    name: "Mentor",
  },
  {
    key: "blog",
    path: "/blog",
    name: "BLOG",
    children: [
      {
        key: "blog:1",
        path: "/blog/technology",
        name: "Công Nghệ",
      },
      {
        key: "blog:2",
        path: "/blog/discount",
        name: "Khuyến Mãi",
      },
      {
        key: "blog:3",
        path: "/blog/education",
        name: "Giáo dục",
      },
    ],
  },
];

export default function BaseLayout() {
  return (
    <Layout className="bg-white">
      <BaseHeader />
      <Outlet />
      <BaseFooter />
    </Layout>
  );
}

export function SocialIconLink({ fill }: { fill: string }) {
  return (
    <Space size="small">
      <Link to="/">
        <svg
          className="base-icons8"
          fill={fill}
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="18"
          height="18"
          viewBox="0 0 50 50"
        >
          <path d="M32,11h5c0.552,0,1-0.448,1-1V3.263c0-0.524-0.403-0.96-0.925-0.997C35.484,2.153,32.376,2,30.141,2C24,2,20,5.68,20,12.368 V19h-7c-0.552,0-1,0.448-1,1v7c0,0.552,0.448,1,1,1h7v19c0,0.552,0.448,1,1,1h7c0.552,0,1-0.448,1-1V28h7.222 c0.51,0,0.938-0.383,0.994-0.89l0.778-7C38.06,19.518,37.596,19,37,19h-8v-5C29,12.343,30.343,11,32,11z"></path>
        </svg>
      </Link>
      <Link to="/">
        <svg
          className="base-icons8"
          fill={fill}
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="20"
          height="20"
          viewBox="0 0 30 30"
        >
          <path d="M9,25H4V10h5V25z M6.501,8C5.118,8,4,6.879,4,5.499S5.12,3,6.501,3C7.879,3,9,4.121,9,5.499C9,6.879,7.879,8,6.501,8z M27,25h-4.807v-7.3c0-1.741-0.033-3.98-2.499-3.98c-2.503,0-2.888,1.896-2.888,3.854V25H12V9.989h4.614v2.051h0.065 c0.642-1.18,2.211-2.424,4.551-2.424c4.87,0,5.77,3.109,5.77,7.151C27,16.767,27,25,27,25z"></path>
        </svg>
      </Link>
      <Link to="/">
        <svg
          className="base-icons8"
          fill={fill}
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="20"
          height="20"
          viewBox="0 0 50 50"
        >
          <path
            fillRule="evenodd"
            d="M 13 5 L 16 14 L 16 20 L 18 20 L 18 14 L 21 5 L 19 5 L 17 11 L 15 5 Z M 24 9 C 22.933594 9 22.410156 9.167969 21.757813 9.703125 C 21.132813 10.230469 20.960938 10.636719 21 12 L 21 17 C 21 17.996094 21.164063 18.652344 21.765625 19.234375 C 22.390625 19.816406 22.980469 20 24 20 C 25.066406 20 25.648438 19.816406 26.25 19.234375 C 26.875 18.675781 27 17.996094 27 17 L 27 12 C 27 11.117188 26.84375 10.28125 26.238281 9.722656 C 25.613281 9.148438 24.96875 9 24 9 Z M 29 9 L 29 18 C 29 18.972656 29.980469 20 31 20 C 32.019531 20 32.558594 19.488281 33 19 L 33 20 L 35 20 L 35 9 L 33 9 L 33 17 C 32.988281 17.683594 32.183594 18 32 18 C 31.792969 18 31 17.957031 31 17 L 31 9 Z M 24 11 C 24.300781 11 25 10.996094 25 12 L 25 17 C 25 17.96875 24.324219 18 24 18 C 23.699219 18 23 17.988281 23 17 L 23 12 C 23 11.183594 23.433594 11 24 11 Z M 10 22 C 6.40625 22 4 24.382813 4 28 L 4 37.5 C 4 41.117188 6.40625 44 10 44 L 40 44 C 43.59375 44 46 41.617188 46 38 L 46 28 C 46 24.382813 43.59375 22 40 22 Z M 12 26 L 18 26 L 18 28 L 16 28 L 16 40 L 14 40 L 14 28 L 12 28 Z M 26 26 L 28 26 L 28 30 C 28.230469 29.640625 28.574219 29.355469 28.902344 29.195313 C 29.222656 29.03125 29.546875 28.9375 29.875 28.9375 C 30.523438 28.9375 31.03125 29.171875 31.378906 29.609375 C 31.726563 30.050781 32 30.636719 32 31.5 L 32 37.5 C 32 38.242188 31.75 38.703125 31.421875 39.097656 C 31.101563 39.492188 30.621094 39.992188 30 40 C 28.949219 40.011719 28.386719 39.449219 28 39 L 28 40 L 26 40 Z M 18 29 L 20 29 L 20 37 C 20 37.230469 20.269531 38.007813 21 38 C 21.8125 37.992188 21.820313 37.234375 22 37 L 22 29 L 24 29 L 24 40 L 22 40 L 22 39 C 21.628906 39.4375 21.4375 39.574219 21.019531 39.78125 C 20.605469 40.015625 20.183594 40 19.792969 40 C 19.308594 40 18.757813 39.5625 18.5 39.234375 C 18.269531 38.933594 18 38.625 18 38 Z M 36.199219 29 C 37.148438 29 37.816406 29.203125 38.320313 29.734375 C 38.835938 30.265625 39 30.886719 39 31.886719 L 39 35 L 35 35 L 35 36.546875 C 35 37.105469 35.074219 37.460938 35.21875 37.671875 C 35.355469 37.902344 35.632813 38.003906 36 38 C 36.40625 37.996094 36.664063 37.914063 36.800781 37.730469 C 36.941406 37.566406 37 37.101563 37 36.5 L 37 36 L 39 36 L 39 36.59375 C 39 37.683594 38.914063 38.496094 38.375 39.027344 C 37.867188 39.585938 37.074219 39.84375 36.035156 39.84375 C 35.085938 39.84375 34.34375 39.5625 33.8125 38.984375 C 33.28125 38.40625 33.003906 37.613281 33.003906 36.59375 L 33.003906 31.886719 C 33.003906 30.980469 33.320313 30.308594 33.902344 29.710938 C 34.371094 29.230469 35.25 29 36.199219 29 Z M 29 30.5 C 28.449219 30.5 28.007813 30.996094 28 31.5 L 28 37.5 C 28.007813 37.789063 28.449219 38 29 38 C 29.550781 38 30 37.574219 30 37.023438 L 30 32 C 30 31 29.550781 30.5 29 30.5 Z M 36 31 C 35.449219 31 35.007813 31.464844 35 32 L 35 33 L 37 33 L 37 32 C 37 31.386719 36.550781 31 36 31 Z"
          ></path>
        </svg>
      </Link>
    </Space>
  );
}
