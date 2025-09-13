import { useParams } from "react-router";
import DataJSON from "../data/News.json";
import type { CardProps } from "../components/carousel/EmblaCarousel"; // ajuste o path conforme seu projeto

const Data: CardProps[] = DataJSON as CardProps[];

const NewsBlurPage = () => {
  const { id } = useParams<{ id: string }>();
  const newsItem = Data.find(
    (item) => item.id === Number(id) && item.type === "blur"
  );

  if (!newsItem) return <div>Notícia não encontrada</div>;

  return (
    <div className="news-page">
      {/* SEÇÃO HERO COM FUNDO BORRADO */}
      <section className="relative flex flex-col items-center w-full  xl:h-[41.625rem]">
        {/* Fundo borrado */}

        <div className="absolute inset-0 overflow-hidden">
          <div
            className="hidden absolute inset-0 bg-center bg-cover bg-no-repeat filter blur-xl xl:block "
            style={{ backgroundImage: `url(${newsItem.image})` }}
          />
        </div>

        {/* Conteúdo por cima */}
        <div className="relative z-10 flex justify-center items-end w-full xl:translate-y-10">
          <img
            src={newsItem.image}
            alt=""
            className="max-w-full w-full h-auto 
                       xl:w-[80%] xl:h-[41.625rem] xl:translate-y-10" // desloca a imagem para baixo no desktop
          />
        </div>
        <div className="flex flex-col items-center relative xl:mt-[6rem]">
          <div className="relative z-10 flex flex-col items-center gap-3 text-center w-[80%] mt-5">
            <h1 className="font-tungsten text-4xl xl:text-[4rem] text-azulmarinho uppercase">
              {newsItem.title}
            </h1>
            <h2 className="font-inter text-sm text-azulmarinho">
              {newsItem.subtitle}
            </h2>
          </div>

          {/* Linha divisória */}
          <div className="relative z-10 w-full h-1 border-t-2 border-b-4 border-[rgb(188,185,180)] mt-5"></div>

          {/* Categoria e Data */}
          <span className="relative z-10 flex text-[rgb(188,185,180)] mt-3">
            <p className="font-inter text-[0.7rem] text-light-red">
              {newsItem.category}
            </p>
            <p className="font-inter text-[0.7rem] text-azulmarinho before:content-['|'] before:px-2 before:text-[#BCB9B4]">
              {newsItem.date}
            </p>
          </span>
        </div>
        <div className="relative flex flex-col items-center">
          <div className="flex flex-col gap-5 w-[85%] my-10 xl:w-[60%]">
            {newsItem.content?.map((c, index) => {
              if (c.type === "paragraph")
                return (
                  <p
                    className="font-inter text-base text-azulmarinho"
                    key={index}>
                    {c.content}
                  </p>
                );

              if (c.type === "image")
                return <img key={index} src={c.content} alt="" />;

              if (c.type === "subtitle")
                return (
                  <h2
                    key={index}
                    className="text-azulmarinho font-inter font-semibold text-lg ">
                    {c.content}
                  </h2>
                );

              if (c.type === "video") {
                const url = c.content;
                if (url.includes("youtube.com") || url.includes("youtu.be")) {
                  let videoId = "";
                  if (url.includes("v=")) {
                    videoId = url.split("v=")[1].split("&")[0];
                  } else if (url.includes("youtu.be")) {
                    videoId = url.split("youtu.be/")[1].split("?")[0];
                  } else if (url.includes("shorts/")) {
                    videoId = url.split("shorts/")[1].split("?")[0];
                  }
                  const embedUrl = `https://www.youtube.com/embed/${videoId}`;
                  return (
                    <iframe
                      key={index}
                      src={embedUrl}
                      title={`YouTube video ${index}`}
                      className="w-full aspect-video"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen></iframe>
                  );
                }
                return (
                  <a
                    key={index}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline">
                    Assista ao vídeo
                  </a>
                );
              }

              if (c.type === "list") {
                if (Array.isArray(c.content)) {
                  return (
                    <ul
                      key={index}
                      className="flex flex-col gap-3 list-disc pl-6">
                      {c.content.map((li, i) => (
                        <li
                          className="text-azulmarinho font-inter text-sm"
                          key={i}>
                          {li}
                        </li>
                      ))}
                    </ul>
                  );
                }
                if (c.content.dad && Array.isArray(c.content.content)) {
                  return (
                    <ul
                      key={index}
                      className="list-disc pl-6 flex flex-col gap-5">
                      <li>
                        {c.content.dad}
                        <ul className=" list-disc pl-6">
                          {c.content.content.map((subItem, j) => (
                            <li key={j}>{subItem}</li>
                          ))}
                        </ul>
                      </li>
                    </ul>
                  );
                }
              }

              if (c.type === "table") {
                const { titles, content } = c.content;
                return (
                  <div key={index} className="overflow-x-auto">
                    <table className="min-w-full border border-gray-300 text-sm mt-8">
                      <thead>
                        <tr className="bg-gray-100">
                          {Object.values(titles).map((title, i) => (
                            <th
                              key={i}
                              className="border border-gray-300 px-4 py-2 text-azulmarinho font-inter font-semibold text-[0.7rem] xl:px-4 xl:py-4 xl:text-base ">
                              {title}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {Object.values(content).map((row, i) => (
                          <tr key={i} className="odd:bg-white even:bg-gray-50">
                            {Object.values(row).map((cell, j) => (
                              <td
                                key={j}
                                className="border border-gray-300 px-4 text-center text-azulmarinho font-inter text-[0.7rem] p-3 xl:py-5 xl:text-sm">
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                );
              }

              if (c.type === "subtitleUppercase")
                return (
                  <h2
                    key={index}
                    className="text-azulmarinho font-inter font-bold text-lg uppercase">
                    {c.content}
                  </h2>
                );

              return null;
            })}
          </div>
        </div>
        {/* Título e subtítulo */}
      </section>

      {/* CONTEÚDO INTERNO */}
    </div>
  );
};

export default NewsBlurPage;
