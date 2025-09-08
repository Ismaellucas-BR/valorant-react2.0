export default function FirstSection() {
  return (
    <section className="bgMidia bg-center bg-cover bg-no-repeat flex flex-col items-center w-full xl:py-32 text-white py-7">
      <div className=" flex flex-col gap-14 w-[90%]  xl:flex-row">
        <div className="w-full xl:w-1/2">
          <h1 className="font-tungsten text-[4rem] xl:text-[7rem]">MÍDIA</h1>
          <div className="flex flex-col gap-3">
            <span className="font-inter text-sm xl:text-xl">
              Nosso trabalho, sua diversão. Não importa se você é jornalista,
              criador de conteúdo ou uma mistura dos dois – tudo aqui é de uso
              livre. Fique à vontade para pegar e usar o que quiser!
            </span>
            <span className="font-inter text-sm xl:text-xl">
              Não se esqueça: se você criar algum conteúdo com esses arquivos,
              marque @VALORANT e @VALORANTBrasil nas redes sociais. Queremos ver
              o que você criou, mas lembre de seguir nosso{" "}
              <span className="text-black underline">Lenga-lenga Jurídico</span>
              !
            </span>
          </div>
        </div>
        <div className="w-full xl:w-1/2">
          <video
            src="https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/82ab63d9255f9fbbea7c13e00cd46b09ff90d25b.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
