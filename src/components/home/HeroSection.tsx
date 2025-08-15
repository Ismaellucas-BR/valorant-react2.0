export default function HeroSection() {
  return (
    <section className="w-full">
      <div className="relative ">
        <video
          data-testid="backdrop-background"
          autoPlay
          muted
          loop
          playsInline
          className="w-full object-cover z-0  h-[80vh]"
          style={{ display: "flex" }}>
          <source
            data-testid="source-video/mp4"
            src="https://cmsassets.rgpub.io/sanity/files/dsfx7636/news/409ab2fc369ba5e1fe50bac10c6676d7d1365a9f.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-azulmarinho/70 z-10"></div>
        <div className="bg-[linear-gradient(to top, rgb(15, 25, 35) 0%, transparent 100%) center bottom / 100% 100% no-repeat] z-20"></div>
        <div className="absolute flex flex-col items-center justify-center text-center w-full top-1/2 -translate-y-1/2 z-30 gap-5">
          <img
            src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/7b76209193f1bfe190d3ae6ef8728328870be9c3-736x138.png?auto=format&fit=fill&q=80&w=476"
            alt="Logo escrito 'Valorant'"
            className="w-[15rem] h-[2.9rem] md:w-[21.25rem] md:h-[4rem]"
          />
          <h1 className="text-[1.6rem] font-tungsten uppercase leading-7 w-[90%] md:w-full">
            VALORANT – Jogo de tiro tático 5x5 estrelando Agentes com
            habilidades únicas
          </h1>
          <button
            className="bg-[#ff4655] text-[#ece8e1] uppercase text-sm font-normal 
               px-8 py-5 h-16 leading-6 font-sans 
               outline outline-1 outline-[#ece8e1] outline-offset-3 
               transition-colors duration-300 ease-in-out md:mt-5">
            JOGUE GRÁTIS
          </button>
        </div>
      </div>
    </section>
  );
}
