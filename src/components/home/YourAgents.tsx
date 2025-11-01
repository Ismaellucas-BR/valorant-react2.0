import ButtonFullWidth from "../ButtonFullWidth";
import { useTranslation } from "react-i18next";
export default function YourAgents() {
  const { t } = useTranslation(["home", "common"]);
  return (
    <section
      style={{
        backgroundImage:
          "url('https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/b9f3efa9355803cc44e4c59d3f4437cab192bec3-5120x1616.png')",
      }}
      className="flex flex-col items-center pt-7 bg-cover bg-no-repeat bg-center">
      <div className="flex flex-col gap-7 w-[90%] xl:flex-row-reverse xl:py-10">
        <div className="flex flex-col gap-3 xl:w-1/2 xl:justify-center">
          <h2 className="font-tungsten text-[4rem] text-white leading-16 lg:text-[5rem] xl:text-[7rem]">
            {t("yourAgents")}
          </h2>
          <p className="text-white xl:mt-5 font-inter font-semibold">
            {t("creativityIsYourBestWeapon")}
          </p>
          <span className="text-white leading-6">
            {t("moreThanJustWeapons")}
          </span>
          <ButtonFullWidth
            color="bg-azulmarinho mt-3 md:w-2/4 xl:mt-10"
            link="/agents"
            target=""
            content={t("SeeAllAgents")}
          />
        </div>
        <div className="xl:w-1/2">
          <img
            loading="lazy"
            src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/1d62a3751be9d7abfce84da8ca89be7d79f07fed-1232x1232.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
