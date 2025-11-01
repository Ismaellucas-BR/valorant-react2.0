import ButtonFullWidth from "../ButtonFullWidth";
import { useTranslation } from "react-i18next";
export default function Season2025() {
  const { t } = useTranslation(["home", "common"]);
  return (
    <section
      style={{
        backgroundImage:
          'url("https://cmsassets.rgpub.io/sanity/images/dsfx7636/news_live/f0001d0a770784d6462e8e127904b5e8dd1a280d-3440x1020.jpg?auto=format&fit=fill&q=80&h=1020")',
      }}
      className="flex flex-col items-center justify-center bg-[length:350%] bg-no-repeat bg-center w-full h-[27.5rem] md:bg-cover xl:h-[40rem] m-0!">
      <div className="flex flex-col gap-5 w-[90%] pt-7">
        <h1 className="font-tungsten text-[4rem] font-bold leading-16 xl:text-[7rem] xl:leading-28">
          {t("season")}
          <br></br> {t("2025")}
        </h1>
        <p className="text-base font-semibold font-inter w-[80%] md:w-2/5">
          {t("faceTheBeauty")}
        </p>
        <ButtonFullWidth
          color="bg-light-red md:w-1/3 xl:w-1/5"
          target="_blank"
          link="https://www.youtube.com/watch?v=6U7nx6p0P_M&ab_channel=VALORANT"
          content={t("watchNow")}
        />
      </div>
    </section>
  );
}
