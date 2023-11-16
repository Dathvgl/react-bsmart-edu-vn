import databasef from "~/assets/course/DB_captoc.webp";
import javawebf from "~/assets/course/PRJ301.webp";
import cfun from "~/assets/course/download.png";
import databasefun from "~/assets/course/ezgif-1-1b0fae0dff.webp";
import javascript from "~/assets/course/java-script-SEO.jpg";
import oopf from "~/assets/course/object-oriented-programming-oop.png";
import reactf from "~/assets/course/reactjs-nhung-dieu-ban-can-phai-biet-3.webp";
import software from "~/assets/course/software-requirement-specification-1-638.webp";
import softwareb from "~/assets/course/software-requirements-document-header@2x.png";
import netcore from "~/assets/course/t-com_netcore_770px.png";
import testing from "~/assets/course/testing foundation.jpg";
import javaweb from "~/assets/course/web-java.jpg";
import easy from "~/assets/level/ant-icon-01.webp";
import normal from "~/assets/level/ant-icon-02.webp";
import hard from "~/assets/level/ant-icon-03.webp";
import expert from "~/assets/level/ant-icon-04.webp";
import chaune from "~/assets/mentor/bbb.webp";
import tanpnse from "~/assets/mentor/c8b543a9e0773c296566.webp";
import tranhoahiep from "~/assets/mentor/ezgif-1-860162a749.webp";
import minhne from "~/assets/mentor/ezgif-1-95638d4605.webp";
import nhanne from "~/assets/mentor/ezgif-1-9a0071b969.webp";
import tramy from "~/assets/mentor/my.webp";
import quanne from "~/assets/mentor/qqq.webp";

export const sectors = [
  { id: "backend", name: "Back-End" },
  { id: "frontend", name: "Front-End" },
  { id: "database", name: "Database" },
  { id: "fast", name: "Cấp tốc" },
  { id: "other", name: "Other" },
  { id: "stem", name: "STEM" },
];

export const levels = [
  { id: "easy", name: "Dễ", thumbnail: easy },
  { id: "normal", name: "Trung bình", thumbnail: normal },
  { id: "hard", name: "Khó", thumbnail: hard },
  { id: "expert", name: "Cực khó", thumbnail: expert },
];

export const learnMethod = [
  { id: "online", name: "Online" },
  { id: "offline", name: "Offline" },
];

export type MentorType = {
  id: string;
  name: string;
  thumbnail: string;
  introduce: string;
};

export const mentors = [
  {
    id: "tranhoahiep",
    name: "Trần Hòa Hiệp",
    thumbnail: tranhoahiep,
    introduce:
      "Tôi là Trần Hòa Hiệp, một full stack developer với 5 năm kinh nghiệm về công nghệ .NET có kiến ​​thức tốt về Thiết kế cơ sở dữ liệu, Design Pattern, Phân tích và thiết kế hướng đối tượng. 2 năm trong việc đào tạo học viên là người đi làm, và sinh viên sắp ra trường.",
  },
  {
    id: "nhanne",
    name: "Tô Lý Hữu Nhân",
    thumbnail: nhanne,
    introduce:
      "Tôi là Hữu Nhân, hiện tại là một Business Analyst với hơn 3 năm kinh nghiệm và 2 năm với vị trí Tester/QC. Tôi đã tham gia các dự án product tới outsource. Và từ những kinh nghiệm trầy da tróc vảy khi tham gia các dự án, tôi tin rằng tôi có thể chia sẻ các kinh nghiệm về quản lý dự án, quy trình làm phầm mềm, kiểm thử phần mềm và những kinh nghiệm xử lý vấn đề.",
  },
  {
    id: "tramy",
    name: "Nguyễn Thị Trà My",
    thumbnail: tramy,
    introduce:
      "Xin chào, tôi là Nguyễn Thị Trà My. Với kinh nghiệm làm mentor cũng như giảng dạy về các môn lập trình trong ngành công nghệ thông tin, tôi sẽ giúp các bạn hiểu rõ hơn về các môn học cũng như những kinh nghiệm thực hành. Tôi sẽ đồng hành cùng các bạn trong suốt quá trình học và định hướng nghề nghiệp trong tương lai.",
  },
  {
    id: "quanne",
    name: "Đỗ Minh Quân",
    thumbnail: quanne,
    introduce:
      "Tôi tên là Đỗ Minh Quân, tốt nghiệp ngành công nghệ thông tin, chuyên ngành công nghệ phần mềm. Tôi là một lập trình viên Front-end có hơn 3 năm kinh nghiệm trong việc phát triển giao diện cho các trang web và ứng dụng di động. Tôi đã từng tham gia các dự án với công nghệ HTML, CSS, JavaScript, React ... và từ đó tích lũy được nhiều kiến thức, kinh nghiệm trong lĩnh vực này. Tôi muốn chia sẻ kiến thức của mình cho những người mới bắt đầu, giúp họ có thể nhanh chóng tiếp cận và đạt được thành công trong lĩnh vực lập trình Front-end.",
  },
  {
    id: "minhne",
    name: "Hồ Hồng Minh",
    thumbnail: minhne,
    introduce:
      "Xin chào, tôi là Hồ Hồng Minh. Tôi có hơn 3 năm kinh nghiệm trong việc giảng dạy và mentor cho các học sinh, sinh viên về chuyên ngành kĩ thuật phần mềm. Tôi đã hướng dẫn nhiều dự án và có thể giúp đỡ học sinh và sinh viên thành công trong việc đạt được các mục tiêu học tập và nghề nghiệp của họ. Ngoài ra, tôi cũng đam mê nghiên cứu và đăng ký các bài báo khoa học để chia sẻ các phát hiện và kiến thức mới với cộng đồng. Tôi tin rằng giáo dục là một công cụ mạnh mẽ để đẩy mạnh sự phát triển của cá nhân, cộng đồng, và tôi mong muốn hỗ trợ các học sinh và sinh viên trong việc đạt được sự thành công trong cuộc sống và nghề nghiệp của họ.",
  },
  {
    id: "tanpnse",
    name: "Phan Nhật Tân",
    thumbnail: tanpnse,
    introduce:
      "Nhật Tân, với kinh nghiệm giảng dạy và chia sẻ cho nhiều học viên, tôi đã xây dựng được niềm tin rất lớn đối với cộng đồng. Hy vọng tôi sẽ đem đến cho các bạn những trải nghiệm đáng quý trong quá trình học tập cùng tôi.",
  },
  {
    id: "chaune",
    name: "Đoàn Ngọc Trân Châu",
    thumbnail: chaune,
    introduce:
      "Tôi là Châu. Với mong muốn chia sẻ kiến thức của mình đến với những bạn yêu thích lập trình, tôi đã và đang hướng dẫn cho nhiều lớp học sinh và sinh viên. Với khả năng truyền đạt kiến thức một cách xúc tích và dễ hiểu nhất, tôi tin rằng tình yêu lập trình của các bạn sẽ ngày càng được nung nóng và ngày càng mãnh liệt hơn.",
  },
];

export type CourseType = {
  id: string;
  name: string;
  sector: string;
  level: string;
  mentor: string;
  thumbnail: string;
  description: string;
  register: number;
  price: number;
  lesson: number;
  rate: number;
};

export const courses: CourseType[] = [
  {
    id: "net-core-api-230530010720",
    name: ".NET Core API",
    sector: "backend",
    level: "hard",
    mentor: "tranhoahiep",
    thumbnail: netcore,
    description:
      ".NET Core API là một framework được tạo ra bởi Microsoft để xây dựng các ứng dụng web API và microservices. Nó được thiết kế để hỗ trợ việc phát triển ứng dụng đa nền tảng, cho phép các nhà phát triển xây dựng ứng dụng trên nhiều nền tảng như Windows, macOS và Linux. Ứng dụng được phát triển bằng .NET Core API có thể hoạt động trên các nền tảng khác nhau một cách dễ dàng và không cần phải thực hiện các thủ tục phức tạp để chỉnh sửa mã nguồn.",
    register: 148,
    price: 3000000,
    lesson: 15,
    rate: 5,
  },
  {
    id: "nhap-mon-kiem-thu-phan-mem-230616095137",
    name: "Nhập Môn Kiểm Thử Phần Mềm",
    sector: "other",
    level: "normal",
    mentor: "nhanne",
    thumbnail: testing,
    description:
      "Nhập Môn Kiểm Thử Phần Mềm sẽ cung cấp cho bạn kiến thức có thể áp dụng vào công việc kiểm thử. Như viết test case, system test hay hiểu rõ quy trình thực hiện kiểm thử một phần mềm nào đó. Khóa học sẽ hướng đến Manual Testing đồng thời cung cấp khái niệm về Automation Testing.",
    register: 22,
    price: 2500000,
    lesson: 12,
    rate: 4.8,
  },
  {
    id: "java-web-230517100835",
    name: "Java Web",
    sector: "backend",
    level: "normal",
    mentor: "tramy",
    thumbnail: javaweb,
    description:
      "Java là một ngôn ngữ dùng trong lập trình. Trong khi đó, web là từ viết tắt của website mà một website thì lại có thể chứa các trang web khác. Như vậy, Java Web được hiểu đơn giản là dùng ngôn ngữ lập trình Java, kết hợp với một số công nghệ khác như HTML, Javascript, CSS… nhằm tạo ra các website hoặc ứng dụng web.",
    register: 15,
    price: 3000000,
    lesson: 18,
    rate: 5,
  },
  {
    id: "javascript-230428103307",
    name: "JavaScript",
    sector: "frontend",
    level: "normal",
    mentor: "quanne",
    thumbnail: javascript,
    description: `JavaScript là ngôn ngữ lập trình phổ biến nhất trên thế giới trong suốt 20 năm qua. Nó cũng là một trong số 3 ngôn ngữ chính của lập trình web.

      JavaScript có thể học nhanh và dễ dàng áp dụng cho nhiều mục đích khác nhau, từ việc cải thiện tính năng của website đến việc chạy game và tạo phần mềm nền web. Hơn nữa, có hàng ngàn mẫu template JavaScript và ứng dụng ngoài kia, nhờ vào sự cống hiến của cộng đồng, đặc biệt là Github.`,
    register: 18,
    price: 2500000,
    lesson: 18,
    rate: 5,
  },
  {
    id: "software-requirement-230612075449",
    name: "Software Requirement",
    sector: "other",
    level: "normal",
    mentor: "nhanne",
    thumbnail: software,
    description:
      "Môn software requirement là môn học trong lĩnh vực kỹ thuật phần mềm, đề cập đến quá trình tìm hiểu, phân tích, đánh giá và xác định yêu cầu của phần mềm để phát triển sản phẩm phần mềm hiệu quả. Môn học này cung cấp kiến thức và kỹ năng về phân tích yêu cầu của khách hàng, tạo ra thiết kế và đánh giá sự dễ sử dụng của sản phẩm phần mềm. Nó cũng giúp sinh viên hiểu sâu hơn về quy trình phát triển phần mềm, các phương pháp phân tích yêu cầu và công cụ phát triển phần mềm.",
    register: 13,
    price: 2700000,
    lesson: 15,
    rate: 5,
  },
  {
    id: "software-requirement-for-beginner-230428103459",
    name: "Software Requirement for Beginner",
    sector: "other",
    level: "easy",
    mentor: "minhne",
    thumbnail: softwareb,
    description:
      "Môn Software Requirement là môn học trong lĩnh vực kỹ thuật phần mềm, đề cập đến quá trình tìm hiểu, phân tích, đánh giá và xác định yêu cầu của phần mềm để phát triển sản phẩm phần mềm hiệu quả. Môn học này cung cấp kiến thức và kỹ năng về phân tích yêu cầu của khách hàng, tạo ra thiết kế và đánh giá sự dễ sử dụng của sản phẩm phần mềm. Nó cũng giúp sinh viên hiểu sâu hơn về quy trình phát triển phần mềm, các phương pháp phân tích yêu cầu và công cụ phát triển phần mềm.",
    register: 13,
    price: 2500000,
    lesson: 18,
    rate: 4.8,
  },
  {
    id: "c-fundamental-230509053424",
    name: "C Fundamental",
    sector: "backend",
    level: "normal",
    mentor: "tanpnse",
    thumbnail: cfun,
    description:
      "Môn học C++ là một môn học trong lĩnh vực Khoa học máy tính và Lập trình, trong đó sinh viên sẽ học cách sử dụng ngôn ngữ lập trình C++ để tạo ra các chương trình ứng dụng và phần mềm.",
    register: 17,
    price: 2000000,
    lesson: 18,
    rate: 5,
  },
  {
    id: "database-fundamental-230623122618",
    name: "Database Fundamental",
    sector: "database",
    level: "normal",
    mentor: "chaune",
    thumbnail: databasefun,
    description: `Cơ sở dữ liệu (Database) là một hệ thống tổ chức và lưu trữ dữ liệu, cho phép người dùng truy cập và quản lý thông tin một cách hiệu quả. Môn học cơ sở dữ liệu (Database) được xem là một trong những môn học quan trọng trong lĩnh vực Công nghệ thông tin.

      Môn học Cơ sở dữ liệu cung cấp cho sinh viên kiến thức về các khái niệm cơ bản của cơ sở dữ liệu, các kiểu dữ liệu và thuật toán lưu trữ, truy xuất, xử lý, cập nhật dữ liệu trong cơ sở dữ liệu. Ngoài ra, sinh viên cũng được học cách thiết kế cơ sở dữ liệu cho các ứng dụng thực tế, bảo vệ dữ liệu cũng như quản lý dữ liệu.`,
    register: 17,
    price: 2500000,
    lesson: 15,
    rate: 5,
  },
  {
    id: "java-web-application-cap-toc-230511113427",
    name: "Java Web Application_Cấp Tốc",
    sector: "fast",
    level: "normal",
    mentor: "tanpnse",
    thumbnail: javawebf,
    description: "Khóa này sẽ giúp các bạn vượt qua kì thi một cách dễ dàng!",
    register: 22,
    price: 500000,
    lesson: 3,
    rate: 5,
  },
  {
    id: "database-cap-toc-230626111514",
    name: "Database_Cấp Tốc",
    sector: "fast",
    level: "normal",
    mentor: "chaune",
    thumbnail: databasef,
    description: "Giúp các bạn vượt qua kì thi môn Database một cách dễ dàng!",
    register: 16,
    price: 500000,
    lesson: 2,
    rate: 5,
  },
  {
    id: "oop-cap-toc-230505081738",
    name: "OOP_Cấp Tốc",
    sector: "fast",
    level: "normal",
    mentor: "tanpnse",
    thumbnail: oopf,
    description: "Tự tin bước vào kì thi thực hành chỉ với 2 buổi học !",
    register: 18,
    price: 500000,
    lesson: 2,
    rate: 5,
  },
  {
    id: "reactjs-cap-toc-230511104431",
    name: "ReactJS_Cấp Tốc",
    sector: "fast",
    level: "normal",
    mentor: "quanne",
    thumbnail: reactf,
    description: "Tự tin lấy điểm cao thực hành chỉ với 2 buổi học cấp tốc ",
    register: 19,
    price: 500000,
    lesson: 2,
    rate: 5,
  },
];
