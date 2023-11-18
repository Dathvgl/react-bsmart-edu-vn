import { ConfigProvider } from "antd";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import BaseLayout from "./layouts/BaseLayout/BaseLayout";
import CourseDetailPage from "./pages/course/courseDetail/CourseDetailPage";
import CourseListPage from "./pages/course/courseList/CourseListPage";
import HomePage from "./pages/home/HomePage";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#ff630e",
          fontSize: 16,
          screenXLMax: 1280,
          screenXXL: 1280,
          screenXXLMin: 1280,
          fontFamily: "Roboto, sans-serif",
        },
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BaseLayout />}>
            <Route index element={<HomePage />} />
            <Route path="course">
              <Route index element={<CourseListPage />} />
              <Route path=":id" element={<CourseDetailPage />} />
            </Route>
          </Route>
          {/* <Route path="*" element={<ErrorPage />} /> */}
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  </React.StrictMode>
);
