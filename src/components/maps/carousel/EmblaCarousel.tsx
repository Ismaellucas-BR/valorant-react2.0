import React, { useState, useEffect, useCallback } from "react";
import type { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { Thumb } from "./EmblaCarouselThumbsButton";

type PropType = {
  images: {
    id: number;
    urlDesktop: string;
    urlMain: string;
    urlMobile: string;
  }[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = ({ images, options }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options);
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
  });

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return;
      emblaMainApi.scrollTo(index);
    },
    [emblaMainApi, emblaThumbsApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;
    setSelectedIndex(emblaMainApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
  }, [emblaMainApi, emblaThumbsApi]);

  useEffect(() => {
    if (!emblaMainApi) return;
    onSelect();
    emblaMainApi.on("select", onSelect).on("reInit", onSelect);
  }, [emblaMainApi, onSelect]);

  return (
    <div className="emblaThumb flex flex-col items-center justify-center w-full xl:min-h-[53rem] ">
      {/* Imagens principais */}
      <div className="embla__viewportThumb" ref={emblaMainRef}>
        <div className="embla__containerThumb">
          {images.map((image, index) => (
            <div
              className={`embla__slideThumb flex justify-center xl:min-h-[53rem] bg-[rgb(188,185,180)]!`}
              key={image.id}>
              <img
                src={image.urlMain}
                alt={`Imagem ${image.id}`}
                className={`w-full h-[13.25rem] lg:h-[33.75rem] xl:h-auto object-cover ${
                  index === 0
                    ? "bg-gray-200 flex items-center justify-center lx:h-[53rem]! object-contain xl:w-[60%]"
                    : ""
                }`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Thumbs */}
      <div className="embla-thumbs  xl:w-[80%]  bg-white xl:mt-16">
        <div className="embla-thumbs__viewport" ref={emblaThumbsRef}>
          <div className="embla-thumbs__container">
            {images.map((image, index) => (
              <div
                className="embla-thumbs__slide   object-cover hover:cursor-pointer"
                key={image.id}>
                <Thumb
                  onClick={() => onThumbClick(index)}
                  selected={index === selectedIndex}
                  index={index}
                  imagesUrl={
                    <>
                      <img
                        src={image.urlMobile}
                        alt=""
                        className="block md:hidden w-full h-full object-cover"
                      />
                      <img
                        src={image.urlDesktop}
                        alt=""
                        className="hidden md:block w-full h-full object-cover"
                      />
                    </>
                  }
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
