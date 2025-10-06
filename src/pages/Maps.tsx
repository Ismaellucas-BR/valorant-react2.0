import EmblaCarousel from "../components/maps/carousel/EmblaCarousel";
import type { EmblaOptionsType } from "embla-carousel";
import MapsJson from "../data/Maps.json";

export default function Maps() {
  const OPTIONS: EmblaOptionsType = {};

  return (
    <div className="flex flex-col gap-16 w-[90%] py-32 text-azulmarinho bg-white max-w-[120rem] xl:px-[15rem]">
      <h1 className="font-tungsten text-[6rem]  uppercase">Mapas</h1>
      {MapsJson.map((map) => (
        <div key={map.id} className="map-section">
          {/* Nome e descrição do mapa */}
          <h2 className="text-2xl font-bold mb-2 font-tungsten text-[3rem]">
            {map.name}
          </h2>
          <p className=" mb-4">{map.description}</p>

          {/* Carrossel só das imagens desse mapa */}
          <EmblaCarousel images={map.images} options={OPTIONS} />
        </div>
      ))}
    </div>
  );
}
