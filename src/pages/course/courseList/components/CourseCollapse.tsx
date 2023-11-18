import {
  Checkbox,
  Collapse,
  Flex,
  Form,
  Grid,
  Image,
  InputNumber,
  Space,
} from "antd";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { learnMethod, levels, sectors } from "~/demo";

const { useBreakpoint } = Grid;

const base = ["price", "learn", "level", "sector"];

export default function CourseCollapse() {
  const screen = useBreakpoint();
  const [actives, setActives] = useState<string[]>(structuredClone(base));
  const [collapsible, setCollapsible] = useState<"disabled" | undefined>(
    undefined
  );

  useEffect(() => {
    if (screen.md) {
      setCollapsible("disabled");
      setActives(structuredClone(base));
    } else {
      setCollapsible(undefined);
      setActives([]);
    }
  }, [screen.md]);

  function onActive(key: string | string[]) {
    if (typeof key == "string") {
      setActives([key]);
    } else setActives(key);
  }

  return (
    <div className="form-collapse">
      <Collapse
        activeKey={actives}
        collapsible={collapsible}
        ghost
        onChange={onActive}
        items={[
          {
            key: "price",
            label: "KHOẢNG GIÁ",
            children: (
              <Space
                className="w-full [&_span]:text-[#808080] [&_.ant-form-item]:mb-0"
                direction="vertical"
              >
                <span>Từ giá</span>
                <Form.Item name="fromPrice" initialValue={0}>
                  <InputNumber<number>
                    className="w-full"
                    formatter={(value) =>
                      `${value} VND`.replace(/\B(?=(\d{3})+(?!\d))/g, ".")
                    }
                    parser={(value) =>
                      Number.parseInt(
                        value?.replace(" VND", "").replaceAll(".", "") ?? "0"
                      ) ?? 0
                    }
                    onClick={(event) =>
                      event.currentTarget.setSelectionRange(
                        event.currentTarget.value.length - 4,
                        event.currentTarget.value.length - 4
                      )
                    }
                  />
                </Form.Item>
                <span>Đến giá</span>
                <Form.Item
                  className="!mb-6"
                  name="toPrice"
                  initialValue={10000000}
                >
                  <InputNumber<number>
                    className="w-full"
                    formatter={(value) =>
                      `${value} VND`.replace(/\B(?=(\d{3})+(?!\d))/g, ".")
                    }
                    parser={(value) =>
                      Number.parseInt(
                        value?.replace(" VND", "").replaceAll(".", "") ?? "0"
                      ) ?? 0
                    }
                    onClick={(event) =>
                      event.currentTarget.setSelectionRange(
                        event.currentTarget.value.length - 4,
                        event.currentTarget.value.length - 4
                      )
                    }
                  />
                </Form.Item>
              </Space>
            ),
          },
          {
            key: "learn",
            label: "HÌNH THỨC HỌC",
            children: (
              <Form.Item
                className="item-form"
                name="learnMethod"
                valuePropName="checked"
              >
                <Checkbox.Group
                  className="check-form"
                  options={learnMethod.map((item) => ({
                    label: item.name,
                    value: item.id,
                  }))}
                />
              </Form.Item>
            ),
          },
          {
            key: "level",
            label: "TRÌNH ĐỘ",
            children: (
              <Form.Item
                className="item-form"
                name="levels"
                valuePropName="checked"
              >
                <Checkbox.Group className="check-form">
                  {levels.map((item) => (
                    <Checkbox
                      className="[&>span:last-child]:w-full"
                      value={item.id}
                    >
                      <Flex justify="space-between" align="center">
                        <span>{item.name}</span>
                        <Image
                          className="object-cover"
                          src={item.thumbnail}
                          alt={item.name}
                          preview={false}
                          width={42}
                          height={42}
                        />
                      </Flex>
                    </Checkbox>
                  ))}
                </Checkbox.Group>
              </Form.Item>
            ),
          },
          {
            key: "sector",
            label: "LĨNH VỰC",
            children: <SectorForm />,
          },
        ]}
      />
    </div>
  );
}

function SectorForm() {
  const sectorPass: string | undefined = useLocation().state.sector;

  return (
    <Form.Item className="item-form" name="sectors" valuePropName="checked">
      <Checkbox.Group
        className="check-form"
        defaultValue={sectorPass ? [sectorPass] : undefined}
        options={sectors.map((item) => ({
          label: item.name,
          value: item.id,
        }))}
      />
    </Form.Item>
  );
}
