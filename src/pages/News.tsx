import NewCardBlog from "../components/home/NewCardBlog";
import GrdiCardNews from "../components/news/GridCardNews";

export default function News() {
  return (
    <div className="flex flex-col items-center justify-content-center gap-5 mt-10 xl:mt-20 ">
      <h1 className="text-white font-tungsten text-[3.5rem] uppercase  lg:text-[6rem] mt-10 w-[90%]">
        Notícias
      </h1>
      <div className="w-full">
        <GrdiCardNews />
      </div>
    </div>
  );
}
