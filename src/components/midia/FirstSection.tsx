import { useTranslation } from "react-i18next";
export default function FirstSection() {
  const { t } = useTranslation(["common", "Media"]);
  return (
    <section className="bgMidia bg-center bg-cover bg-no-repeat flex flex-col items-center w-full xl:py-32 text-white py-7">
      <div className=" flex flex-col gap-14 w-[90%]  xl:flex-row">
        <div className="w-full xl:w-1/2">
          <h1 className="font-tungsten text-[4rem] xl:text-[7rem]">
            {t("Media")}
          </h1>
          <div className="flex flex-col gap-3">
            <span className="font-inter text-sm xl:text-xl">
              {t("ourWork1", { ns: "Media" })}
            </span>
            <span className="font-inter text-sm xl:text-xl">
              {t("ourWork2", { ns: "Media" })}{" "}
              <span className="text-black underline">
                {t("ourWork3", { ns: "Media" })}
              </span>
              {t("ourWork4", { ns: "Media" })}
            </span>
          </div>
        </div>
        <div className="w-full xl:w-1/2">
          <video
            src="https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/82ab63d9255f9fbbea7c13e00cd46b09ff90d25b.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
