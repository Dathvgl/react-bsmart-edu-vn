import { Link } from "react-router-dom";

type ButtonLinkProps = {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  path: string;
};

export function ButtonLink(props: ButtonLinkProps) {
  const { children, className, style, path } = props;

  return (
    <Link
      className={`btn-link rounded${className ? ` ${className}` : ""}`}
      style={style}
      to={path}
    >
      {children}
    </Link>
  );
}
