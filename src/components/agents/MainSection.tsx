import CardAgent from "./CardAgents";
export default function MainSection() {
  return (
    <div className="flex flex-col gap-10 xl:gap-20">
      <h1 className="text-white font-tungsten text-[3.5rem]  uppercase  leading-12 w-1/2 md:w-full lg:text-[6rem]">
        Agentes
      </h1>
      <div className="grid grid-cols-2 gap-5  xl:grid-cols-4 lg:gap-8">
        <CardAgent />
      </div>
    </div>
  );
}
