import GrdiCardNews from "../components/news/GridCardNews";
import { useTranslation } from "react-i18next";
export default function News() {
  const { t } = useTranslation("common");
  return (
    <div className="flex flex-col items-center justify-content-center gap-5 mt-10 xl:mt-20 ">
      <h1 className="text-white font-tungsten text-[3.5rem] uppercase  lg:text-[6rem] mt-10 w-[90%]">
        {t("News")}
      </h1>
      <div className="w-full">
        <GrdiCardNews />
      </div>
    </div>
  );
}
