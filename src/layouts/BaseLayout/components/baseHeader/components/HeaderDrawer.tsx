import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Collapse, Flex } from "antd";
import React, { createRef, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { listNav } from "~/layouts/BaseLayout/BaseLayout";

export default function HeaderDrawer({ callback }: { callback: () => void }) {
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
