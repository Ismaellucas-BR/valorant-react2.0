import { Link } from "react-router";
interface PropsButton {
  link: string;
  color: string;
  content: string;
  target: string;
}
export default function ButtonFullWidth(props: PropsButton) {
  return (
    <Link
      to={props.link}
      target={props.target === "_blank" ? "_blank" : ""}
      className={`uppercase p-5 ${props.color} w-full font-inter font-semibold text-base text-center`}>
      {props.content}
    </Link>
  );
}
