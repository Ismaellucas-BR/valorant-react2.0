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
import { useTranslation } from "react-i18next";
export default function MenuMobile() {
  const { t, i18n } = useTranslation("common");
  return (
    <Sheet>
      <SheetTrigger>
        <AlignJustify className="stroke-white dark:stroke-white" size={32} />
      </SheetTrigger>
      <SheetContent className="bg-[#111]">
        <SheetHeader>
          <SheetTitle className="text-white">
            {t("questionMobileMenu")}
          </SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <nav className=" text-white">
          <ul className="flex flex-col justify-start items-start font-inter uppercase cursor-pointer text-xl pl-2">
            <li className="nav-effect">
              <Link className="span-effect text-white" to={"/agents"}>
                {t("Agents")}
              </Link>
            </li>
            <li className="nav-effect">
              <Link className="span-effect" to={"/maps"}>
                {t("Maps")}
              </Link>
            </li>
            <li className="nav-effect">
              <Link className="span-effect" to={"/arsenal"}>
                {t("Arsenal")}
              </Link>
            </li>
            <li className="nav-effect">
              <Link className="span-effect" to={"/midia"}>
                {t("Media")}
              </Link>
            </li>
            <li className="nav-effect">
              <Link className="span-effect" to={"/news"}>
                {t("News")}
              </Link>
            </li>
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
