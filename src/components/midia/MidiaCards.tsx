import DataMidia from "../../data/Midias.json";
import { useTranslation } from "react-i18next";
interface MidiaProps {
  id: number;
  url: string;
  image: string;
  date: string;
  title: string;
}
export default function MidiaCards() {
  const { t } = useTranslation("Media");
  return (
    <div className="bg-[rgb(236,232,225)] py-14">
      <div className="grid grid-cols-1 relative gap-8 w-[90%] mx-auto md:grid-cols-2 xl:grid-cols-3">
        {DataMidia.map((midia: MidiaProps) => (
          <a
            href={midia.url}
            target="_blank"
            className="flex-shrink-0 w-full  cursor-pointer"
            key={midia.id}>
            <div className="">
              <div className="relative">
                <img src={midia.image} className="w-full h-auto" />
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
  );
}
