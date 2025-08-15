import ButtonFullWidth from "../ButtonFullWidth";

export default function Season2025() {
  return (
    <section
      style={{
        backgroundImage:
          'url("https://cmsassets.rgpub.io/sanity/images/dsfx7636/news_live/f0001d0a770784d6462e8e127904b5e8dd1a280d-3440x1020.jpg?auto=format&fit=fill&q=80&h=1020")',
      }}
      className="flex flex-col items-center justify-center bg-[length:350%] bg-no-repeat bg-center w-full h-[27.5rem] md:bg-cover xl:h-[40rem]">
      <div className="flex flex-col gap-5 w-[90%] pt-7">
        <h1 className="font-tungsten text-[4rem] font-bold leading-16 xl:text-[7rem] xl:leading-28">
          TEMPORADA<br></br> 2025 // ATO IV
        </h1>
        <p className="text-base font-semibold font-inter w-[80%] md:w-2/5">
          Enfrente a beleza rústica do Corrode. Novo terreno, a energia de
          sempre.
        </p>
        <ButtonFullWidth
          color="bg-light-red md:w-1/3 xl:w-1/5"
          link="#"
          content="Assista agora"
        />
      </div>
    </section>
  );
}
