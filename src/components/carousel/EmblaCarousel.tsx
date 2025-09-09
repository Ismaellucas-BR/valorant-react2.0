import React, { useCallback, useEffect, useState } from "react";
import type { EmblaCarouselType, EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";

// Tipando o JSON
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

type PropType = {
  slides: CardProps[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = ({ options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [scrollProgress, setScrollProgress] = useState(0);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const onScroll = useCallback((emblaApi: EmblaCarouselType) => {
    const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
    setScrollProgress(progress * 100);
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onScroll(emblaApi);
    emblaApi
      .on("reInit", onScroll)
      .on("scroll", onScroll)
      .on("slideFocus", onScroll);
  }, [emblaApi, onScroll]);

  return (
    <div className="embla m-auto md:m-0">
      <div
        className="embla__viewport md:max-w-[100vw] w-[90vw] md:w-[100%]"
        ref={emblaRef}>
        <div className="embla__container relative w-full">
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
                className="embla__slide flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-[1rem]"
                key={card.id}>
                <div className="embla__slide__content">
                  <div className="relative">
                    {card.thumb && <img src={card.thumb} className="w-full" />}
                    <img
                      src="https://playvalorant.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/link-square.svg"
                      alt="icone de link"
                      className="absolute bottom-0 right-0 w-10"
                    />
                  </div>

                  <div className="flex gap-3 items-center font-DINNext font-bold mt-3">
                    <span className="text-light-red uppercase text-[0.875rem]">
                      {card.category}
                    </span>
                    <div className="w-[1px] h-4 bg-gray-400" />
                    <span className="text-azulmarinho text-[0.75rem]">
                      {card.date}
                    </span>
                  </div>

                  <div>
                    <h2 className="text-[1.125rem] text-azulmarinho font-bold">
                      {card.title}
                    </h2>
                    <span className="text-[0.75rem] text-azulmarinho font-normal">
                      {card.subtitle}
                    </span>
                  </div>
                </div>
              </a>
            ) : (
              <Link
                to={linkTo}
                className="embla__slide flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-[1rem]"
                key={card.id}>
                <div className="embla__slide__content">
                  <div className="relative">
                    {card.thumb && <img src={card.thumb} className="w-full" />}
                    <img
                      src="https://playvalorant.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/link-square.svg"
                      alt="icone de link"
                      className="absolute bottom-0 right-0 w-10"
                    />
                  </div>

                  <div className="flex gap-3 items-center font-DINNext font-bold mt-3">
                    <span className="text-light-red uppercase text-[0.875rem]">
                      {card.category}
                    </span>
                    <div className="w-[1px] h-4 bg-gray-400" />
                    <span className="text-azulmarinho text-[0.75rem]">
                      {card.date}
                    </span>
                  </div>

                  <div>
                    <h2 className="text-[1.125rem] text-azulmarinho font-bold">
                      {card.title}
                    </h2>
                    <span className="text-[0.75rem] text-azulmarinho font-normal">
                      {card.subtitle}
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="embla__controls grid md:flex md:w-full lg:hidden!">
        <div className="embla__progress w-2/3 md:w-full!">
          <div
            className="embla__progress__bar bg-light-red"
            style={{ transform: `translate3d(${scrollProgress}%,0px,0px)` }}
          />
        </div>
        <div className="embla__buttons text-light-red md:w-1/3">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
