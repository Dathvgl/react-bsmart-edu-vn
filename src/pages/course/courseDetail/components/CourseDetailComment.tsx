import { Button, Flex, Image, List, Rate } from "antd";
import { useEffect, useState } from "react";
import AvatarImage from "~/assets/avatar-default.webp";

type CommentType = {
  name: string;
  class: string;
  rate: number;
  content: string;
  thumbnail: string;
};

const comment: CommentType = {
  name: "Minh Tú",
  class: "NE626",
  rate: 5,
  content:
    "Khóa học này thực sự đáng giá mọi đồng tiền của tôi. Nó đã giúp tôi xây dựng một ứng dụng .NET Core API thực tế từ đầu đến cuối",
  thumbnail: AvatarImage,
};

const count = 3;
const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export default function CourseDetailComment() {
  const [initLoading, setInitLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<CommentType[]>([]);
  const [list, setList] = useState<CommentType[]>([]);

  useEffect(() => {
    init();
  }, []);

  async function init() {
    await delay(2);
    setInitLoading(false);
    setData([comment, comment, comment]);
    setList([comment, comment, comment]);
  }

  async function onLoadMore() {
    setLoading(true);
    setList(data.concat([...new Array(count)].map(() => comment)));

    await delay(2);
    const newData = data.concat([comment, comment, comment]);
    setData(newData);
    setList(newData);
    setLoading(false);
    window.dispatchEvent(new Event("resize"));
  }

  const loadMore = !initLoading && !loading && (
    <Button className="btn-link h-fit mt-8" onClick={onLoadMore}>
      Xem thêm
    </Button>
  );

  return (
    <section>
      <Flex vertical gap={10}>
        <h3 className="text-[20px]">Nhận xét</h3>
        <List
          className="course-detail-comment-list"
          dataSource={list}
          loading={initLoading}
          loadMore={loadMore}
          renderItem={(item, index) => (
            <List.Item key={index} className={index == 0 ? undefined : "mt-4"}>
              <Flex className="mb-4" vertical gap={20}>
                <Flex align="center" gap={8}>
                  <Image
                    className="rounded-full object-cover"
                    src={item?.thumbnail}
                    alt={item?.name}
                    preview={false}
                    width={50}
                    height={50}
                  />
                  <Flex vertical gap={8}>
                    <p className="text-[#212529] font-bold">
                      {item.name} (Lớp: {item.class})
                    </p>
                    <Rate
                      className="base-txt"
                      disabled
                      allowHalf
                      defaultValue={item.rate}
                    />
                  </Flex>
                </Flex>
                <p className="text-[#999]">{item.content}</p>
              </Flex>
            </List.Item>
          )}
        />
      </Flex>
    </section>
  );
}
