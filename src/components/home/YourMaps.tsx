import ButtonFullWidth from "../ButtonFullWidth";

export default function YourMaps() {
  return (
    <section
      style={{
        backgroundImage:
          "url('https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/3828b05489971b4715f673bc0e2db81f6c7afac7-5120x1616.png?auto=format&fit=fill&q=80&h=1616')",
      }}
      className="flex flex-col items-center  pt-7 bg-cover bg-no-repeat bg-center w-full">
      <div className="flex flex-col gap-7 w-[90%] xl:flex-row">
        <div className="flex flex-col gap-3 xl:justify-center xl:pr-20 xl:w-1/2">
          <h2 className="font-tungsten text-[4rem] text-azulmarinho leading-16 lg:text-[5rem] xl:text-[7rem]">
            SEUS MAPAS
          </h2>
          <p className="text-azulmarinho xl:mt-5">BATALHE AO REDOR DO MUNDO</p>
          <span className="text-azulmarinho leading-6">
            Cada mapa serve como um palco para mostrar sua criatividade. Os
            mapas são feitos sob medida para estratégias de equipe, jogadas
            espetaculares e momentos eletrizantes. Faça as jogadas que todo
            mundo vai tentar imitar no futuro!
          </span>
          <ButtonFullWidth
            color="bg-light-red mt-3 md:w-1/3 xl:w-1/2"
            link="#"
            content="VER TODOS OS MAPAS"
          />
        </div>
        <div className="xl:w-1/2 scroll-smooth">
          <img
            loading="lazy"
            src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/65c45804e00ee97977b6eef06da370543968d161-1232x1232.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
