import { HTMLAttributes, ReactNode } from "react";
import "./styles.css";

interface PropsSection extends HTMLAttributes<HTMLDivElement> {
  id: string;
  children: ReactNode;
  color: string;
  backgroundColor: string;
}

export function CustomSection({
  id,
  children,
  color,
  backgroundColor,
  ...props
}: PropsSection) {
  return (
    <div
      className="section"
      id={id}
      style={{ backgroundColor: backgroundColor, color: color }}
      {...props}
    >
      {children}
    </div>
  );
}
