import { SquareArrowOutUpRight } from "lucide-react";
import DataJSON from "../../data/News.json";
import { Link } from "react-router";

const Data: CardProps[] = DataJSON as CardProps[];

export interface CardContentTable {
  titles: {
    th1: string;
    th2: string;
    th3: string;
    th4: string;
  };
  content: {
    row1: { item1: string; item2: string; item3: string; item4: string };
    row2: { item1: string; item2: string; item3: string; item4: string };
    row3: { item1: string; item2: string; item3: string; item4: string };
    row4: { item1: string; item2: string; item3: string; item4: string };
  };
}

export interface CardContentList {
  dad?: string;
  content: string[];
}

export type CardContent =
  | {
      type:
        | "paragraph"
        | "subtitle"
        | "subtitleUppercase"
        | "subtitleH2"
        | "image"
        | "video";
      content: string;
    }
  | { type: "list"; content: string[] | CardContentList }
  | { type: "table"; content: CardContentTable };

export interface CardProps {
  id: number;
  image?: string;
  thumb?: string;
  category: string;
  date: string;
  title: string;
  subtitle: string;
  // Permite strings extras sem quebrar TS
  type?: "bgBlack" | "blur" | "video" | string;
  content?: CardContent[];
  blog: boolean;
}
export default function GrdiCardNews() {
  return (
    <div className="flex flex-col items-center justify-center gap-10 flex-shrink-0 px-4 bg-white py-5 xl:py-20 xl:px-10 w-full">
      <div className=" md:max-w-[100rem] w-[90%] md:w-[100%]">
        <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full gap-7">
          {Data.map((card) => {
            let linkTo = "#"; // fallback
            let isExternal = false;

            if (card.type === "video" && Array.isArray(card.content)) {
              // Type guard para encontrar o conteúdo de vídeo
              const videoItem = card.content.find(
                (c): c is { type: "video"; content: string } =>
                  c.type === "video" && typeof c.content === "string"
              );

              if (videoItem) {
                linkTo = videoItem.content; // TS agora reconhece como string
                isExternal = true;
              }
            } else if (card.type === "blur") {
              linkTo = `/news/blur/${card.id}`;
            } else if (card.type === "bgBlack") {
              linkTo = `/news/bgBlack/${card.id}`;
            }

            return isExternal ? (
              <a
                href={linkTo}
                target="_blank"
                rel="noopener noreferrer"
                className=" flex-shrink-0 w-full"
                key={card.id}>
                <div className="">
                  <div className="relative">
                    {card.thumb && <img src={card.thumb} className=" w-full" />}
                    <img
                      src="https://playvalorant.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/link-square.svg"
                      alt="icone de link"
                      className="absolute bottom-0 right-0 w-10"
                    />
                  </div>

                  <div className="flex gap-3 items-center font-DINNext font-bold mt-3">
                    <span className="text-light-red uppercase text-[0.875rem] font-inter">
                      {card.category}
                    </span>
                    <div className="w-[1px] h-4 bg-gray-400" />
                    <span className="text-azulmarinho text-[0.75rem] font-inter">
                      {card.date}
                    </span>
                  </div>

                  <div>
                    <h2 className="text-[1.125rem] text-azulmarinho font-bold font-inter">
                      {card.title}
                    </h2>
                    <span className="text-[0.75rem] text-azulmarinho font-normal font-inter">
                      {card.subtitle}
                    </span>
                  </div>
                </div>
              </a>
            ) : (
              <Link
                to={linkTo}
                className=" flex-shrink-0  w-full"
                key={card.id}>
                <div className="">
                  <div className="relative">
                    {card.thumb && <img src={card.thumb} className="w-full" />}
                    <img
                      src="https://playvalorant.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/link-square.svg"
                      alt="icone de link"
                      className="absolute bottom-0 right-0 w-10"
                    />
                  </div>

                  <div className="flex gap-3 items-center font-DINNext font-bold mt-3">
                    <span className="text-light-red uppercase text-[0.875rem] font-inter">
                      {card.category}
                    </span>
                    <div className="w-[1px] h-4 bg-gray-400" />
                    <span className="text-azulmarinho text-[0.75rem] font-inter">
                      {card.date}
                    </span>
                  </div>

                  <div>
                    <h2 className="text-[1.125rem] text-azulmarinho font-bold font-inter">
                      {card.title}
                    </h2>
                    <span className="text-[0.75rem] text-azulmarinho font-normal font-inter">
                      {card.subtitle}
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
