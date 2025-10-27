import WeaponCard from "../components/arsenal/WeaponCard";
import { useTranslation } from "react-i18next";
export default function Arsenal() {
  const { t } = useTranslation("common");
  return (
    <section className="bg-[rgb(236,232,225)]! w-full flex flex-col items-center py-20">
      <div className="bgArsenal flex flex-col items-center bg-cover bg-center bg-no-repeat w-full xl:items-start xl:pl-20">
        <h1 className=" text-azulmarinho font-tungsten text-[3.5rem] uppercase xl:text-[6rem]">
          {t("chooseYourWeapon")}
        </h1>
      </div>
      <div className="flex flex-col items-center  w-[90%] gap-10 py-10 xl:py-32 xl:gap-16 text-azulmarinho bg-[rgb(236,232,225)]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-[90%] xl:grid-cols-3">
          <WeaponCard />
        </div>
      </div>
    </section>
  );
}
