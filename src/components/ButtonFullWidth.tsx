import { Link } from "react-router";
interface PropsButton {
  link: string;
  color: string;
  content: string;
}
export default function ButtonFullWidth(props: PropsButton) {
  return (
    <Link
      to={props.link}
      className={`uppercase p-5 ${props.color} w-full font-inter font-semibold text-base text-center`}>
      {props.content}
    </Link>
  );
}
