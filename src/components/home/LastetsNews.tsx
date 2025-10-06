import { SquareArrowOutUpRight } from "lucide-react";
import CardBlog from "../CardBlog";
export default function LastetsNews() {
  return (
    <section className="flex flex-col items-center justify-center py-3 gap-3 lg:py-20 pb-10 max-w-[100rem] xl:w-full xl:py-6 xl:px-12 bg-white">
      <div className="flex justify-between items-center xl:w-full py-3 w-[90%]">
        <div className="">
          <h2 className="text-azulmarinho font-tungsten text-[3rem] uppercase  leading-12 w-1/2 md:w-full">
            Últimas Notícias
          </h2>
        </div>
        <div className="flex justify-end items-center gap-3">
          <span className="font-DINNext text-black text-center font-normal text-[0.9rem] w-[60%] md:w-full">
            IR PARA A PÁGINA DE NOTÍCIAS
          </span>
          <SquareArrowOutUpRight className="stroke-light-red " size={20} />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-5 w-[90%] xl:w-full overflow-hidden">
        <CardBlog />
      </div>
    </section>
  );
}
