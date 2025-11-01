import DataMidia from "../../data/Midias.json";
import { useTranslation } from "react-i18next";
import { SquareArrowOutUpRight } from "lucide-react";
import { Link } from "react-router";

interface MidiaProps {
  id: number;
  url: string;
  image: string;
  date: string;
  title: string;
}
interface MidiaCardsProps {
  limit?: number;
}
export default function MediaCardsSection({ limit }: MidiaCardsProps) {
  const { t } = useTranslation(["Media", "common"]);

  const displayedMidias = limit ? DataMidia.slice(0, limit) : DataMidia;
  return (
    <div className="flex flex-col items-center justify-center gap-10 flex-shrink-0 px-4 bg-white py-5 xl:py-20 xl:px-10 w-full">
      <div className="flex flex-col items-center justify-center gap-7">
        <div className="flex flex-column md:flex-row md:justify-between relative gap-8 w-[90%] mx-auto">
          <h2 className="text-azulmarinho font-tungsten text-[3rem] uppercase  leading-12 w-1/3 md:w-2/3">
            {t("Media", { ns: "common" })}
          </h2>
          <Link
            to="/midia"
            className="flex justify-end items-center gap-3 w-2/3 md:w-[15%] lg:w-[10%] xl:w-[8%]">
            <span className="font-DINNext text-black text-center font-normal text-[0.9rem] md:w-full">
              {t("SeeMore", { ns: "common" })}
            </span>
            <SquareArrowOutUpRight className="stroke-light-red " size={20} />
          </Link>
        </div>
        <div className="grid grid-cols-1 relative gap-8 w-[90%] mx-auto md:grid-cols-2 xl:grid-cols-3">
          {displayedMidias.map((midia: MidiaProps) => (
            <a
              href={midia.url}
              target="_blank"
              className="flex-shrink-0 w-full cursor-pointer"
              key={midia.id}>
              <div>
                <div className="relative">
                  <img
                    src={midia.image}
                    className="w-full h-auto"
                    alt={midia.title}
                  />
                  <img
                    src="https://playvalorant.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/download-square.svg"
                    alt="icone de link"
                    className="absolute bottom-0 right-0 w-10"
                  />
                </div>

                <div className="flex gap-3 items-center font-DINNext font-bold mt-3">
                  <div className="w-[1px] h-4 bg-gray-400" />
                  <span className="text-azulmarinho text-[0.75rem]">
                    {midia.date}
                  </span>
                </div>

                <div>
                  <h2 className="text-[1.125rem] text-azulmarinho font-bold">
                    {t(`${midia.id}`)}
                  </h2>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
