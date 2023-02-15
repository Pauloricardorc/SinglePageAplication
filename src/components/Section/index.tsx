import { ReactNode } from "react";
import "./styles.css";

type PropsSection = {
  id: string;
  title: string;
  description: string;
  img: string;
};

export function CustomSection(props: PropsSection) {
  return (
    <div className="section" id={props.id}>
      <img src={props.img} alt="" />
      <div className="info">
        <p>{props.title}</p>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
