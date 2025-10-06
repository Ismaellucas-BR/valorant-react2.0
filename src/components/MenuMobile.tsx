import { Link } from "react-router";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { AlignJustify } from "lucide-react";
export default function MenuMobile() {
  return (
    <Sheet>
      <SheetTrigger>
        <AlignJustify className="stroke-white dark:stroke-white" size={32} />
      </SheetTrigger>
      <SheetContent className="bg-[#111]">
        <SheetHeader>
          <SheetTitle className="text-white">
            O que você está procurando?
          </SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <nav className=" text-white">
          <ul className="flex flex-col justify-start items-start font-inter uppercase cursor-pointer text-xl pl-2">
            <li className="nav-effect">
              <Link className="span-effect text-white" to={"/agents"}>
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
      </SheetContent>
    </Sheet>
  );
}
