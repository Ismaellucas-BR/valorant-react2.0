import ButtonFullWidth from "../ButtonFullWidth";

export default function WeAreValorant() {
  return (
    <section
      style={{
        backgroundImage:
          "url('https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/c8157d71a4776dd821d05ed6b82d5d875ca03386-5120x1644.png?auto=format&fit=fill&q=80&h=1644')",
      }}
      className="flex flex-col items-center py-7 bg-cover bg-no-repeat bg-center xl:py-14">
      <div className="flex flex-col gap-7 w-[90%] xl:flex-row">
        <div className="flex flex-col gap-3 xl:w-1/2 xl:pr-20">
          <h2 className="font-tungsten text-[4rem] text-azulmarinho leading-16 lg:text-[5rem] xl:text-[7rem] xl:leading-28 xl:w-[90%]">
            NÓS SOMOS VALORANT
          </h2>
          <p className="text-azulmarinho">DESAFIE SEUS LIMITES</p>
          <span className="text-azulmarinho leading-6">
            Misture o seu estilo e experiência em um cenário global e
            competitivo. Você terá 13 rodadas para atacar e defender com
            disparos certeiros e habilidades táticas. Com apenas uma vida por
            rodada, você deve pensar mais rápido que o oponente se quiser
            sobreviver. Encare inimigos nos modos Competitivo e Sem Ranque, além
            da Disputa da Spike e do Mata-Mata!
          </span>
          <ButtonFullWidth
            color="bg-light-red mt-3 md:w-1/2"
            link="#"
            content="Conheça o Jogo"
          />
        </div>
        <div className="xl:flex xl:flex-col xl:items-center xl:justify-center xl:w-1/2">
          <video
            data-testid="featured-media"
            draggable={false}
            autoPlay
            className="sc-f3d622cf-0 eOxAvt sc-d237f54f-0 etyZmg fit-undefined crop-undefined"
            muted
            loop
            playsInline>
            <source
              data-testid="source-video/mp4"
              src="https://cmsassets.rgpub.io/sanity/files/dsfx7636/news/f6ccf20dfe3f6a24ea9216bb8afaaa66740c715d.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </section>
  );
}
