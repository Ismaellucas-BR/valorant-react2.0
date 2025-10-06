import MenuMobile from "./MenuMobile";
import { Link } from "react-router";
export default function Header() {
  return (
    <header className=" flex justify-center bg-[#111] w-full h-[5rem]">
      <div className="flex justify-between py-3 w-[90%]">
        <div className="flex gap-7 items-center">
          <Link to="/">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              height="35"
              viewBox="0 0 100 100"
              width="35">
              <path
                d="M99.25 48.66V10.28c0-.59-.75-.86-1.12-.39l-41.92 52.4a.627.627 0 00.49 1.02h30.29c.82 0 1.59-.37 2.1-1.01l9.57-11.96c.38-.48.59-1.07.59-1.68zM1.17 50.34L32.66 89.7c.51.64 1.28 1.01 2.1 1.01h30.29c.53 0 .82-.61.49-1.02L1.7 9.89c-.37-.46-1.12-.2-1.12.39v38.38c0 .61.21 1.2.59 1.68z"
                className="fill-white dark:fill-white"></path>
            </svg>
          </Link>
          <nav className="hidden xl:flex">
            <ul className="flex justify-center items-center gap-4 font-inter uppercase cursor-pointer text-xl">
              <li className="nav-effect">
                <Link className="span-effect" to={"/agents"}>
                  Agentes
                </Link>
              </li>
              <li className="nav-effect">
                <Link className="span-effect" to={"/maps"}>
                  Mapas
                </Link>
              </li>
              <li className="nav-effect">
                <Link className="span-effect" to={"/arsenal"}>
                  Arsenal
                </Link>
              </li>
              <li className="nav-effect">
                <Link className="span-effect" to={"/midia"}>
                  Mídia
                </Link>
              </li>
              <li className="nav-effect">
                <Link className="span-effect" to={"/news"}>
                  Notícia
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex items-center justify-center md:hidden">
          <MenuMobile />
        </div>
      </div>
    </header>
  );
}
