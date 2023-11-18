import { createElement } from "react";

type NumberingProps = {
  items: NumberingItemProps[];
};

type NumberingItemProps = {
  prefix?: string;
  suffix?: string;
  title?: string;
  label: keyof HTMLElementTagNameMap;
  labels?: (keyof HTMLElementTagNameMap)[];
  props?: React.Attributes;
  children?: NumberingItemProps[];
};

export default function Numbering({ items }: NumberingProps) {
  return <NumberingItem items={items} />;
}

function NumberingItem({ items }: { items: NumberingItemProps[] }) {
  return (
    <>
      {items.map((item, index) => {
        const children = `${item.prefix ? `${item.prefix} ` : ""}${index + 1}${
          item.suffix ?? ""
        } ${item.title}`;

        return (
          <div key={`${index}-${item.title}`}>
            {createElement(
              item.label,
              item.props,
              item.labels ? (
                <RecursiveElement labels={item.labels}>
                  {children}
                </RecursiveElement>
              ) : (
                children
              )
            )}
            {item.children && <NumberingItem items={item.children} />}
          </div>
        );
      })}
    </>
  );
}

type RecursiveElementProps = {
  labels: (keyof HTMLElementTagNameMap)[];
  children?: React.ReactNode;
};

function RecursiveElement({ labels, children }: RecursiveElementProps) {
  function handle() {
    const { length } = labels;
    let element = children;

    for (let index = length - 1; index >= 0; index--) {
      element = createElement(labels[index], {}, element);
    }

    return element;
  }

  return <>{handle()}</>;
}
