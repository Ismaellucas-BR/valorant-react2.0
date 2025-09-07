import WeaponsData from "../../data/Weapons.json";
export default function WeaponCard() {
  return WeaponsData.map((weapon) => {
    return (
      <div key={weapon.id} className="flex flex-col gap-1">
        <img src={weapon.image} alt="" className="mb-3" />
        <h2 className="font-DINNext font-bold text-base xl:text-[1.375rem]">
          {weapon.name}
        </h2>
        <span className="font-DINNext font-bold text-[0.7rem] xl:text-[0.875rem]">
          {weapon.types}
        </span>
        <span className="font-Inter font-normal text-[0.875rem]">
          {weapon.description}
        </span>
      </div>
    );
  });
}
