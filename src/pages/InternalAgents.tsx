import React, { useMemo } from "react";
import { useParams } from "react-router";
import DataAgents from "../data/Agents.json";
import SvgController from "../assets/svg/Controle";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "..//components/ui/tabs";
type AgentFunction = "Controladora" | "Duelista" | "Iniciador" | "Sentinela";

interface Habilidade {
  id: number;
  name: string;
  description: string;
  video: string;
  icon: string;
}

interface Agent {
  id: number;
  name: string;
  imageCard: string;
  altcard: string;
  internalImage: string;
  description: string;
  function: AgentFunction;
  habilidade: Habilidade[];
}
interface FunctioAssets {
  RedIcon: string;
  BackgroundIcon: string;
}

const functionImages: Record<AgentFunction, FunctioAssets> = {
  Controladora: {
    RedIcon:
      "https://playvalorant.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleController.svg",
    BackgroundIcon:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/8fb7c5a6d20b0ff6dbe9e95064ee5b773652d4a2-529x529.png?auto=format&fit=fill&q=80&w=529",
  },
  Sentinela: {
    RedIcon:
      "https://playvalorant.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleController.svg",
    BackgroundIcon:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/8fb7c5a6d20b0ff6dbe9e95064ee5b773652d4a2-529x529.png?auto=format&fit=fill&q=80&w=529",
  },
  Iniciador: {
    RedIcon:
      "https://playvalorant.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleController.svg",
    BackgroundIcon:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/8fb7c5a6d20b0ff6dbe9e95064ee5b773652d4a2-529x529.png?auto=format&fit=fill&q=80&w=529",
  },
  Duelista: {
    RedIcon:
      "https://playvalorant.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleController.svg",
    BackgroundIcon:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/8fb7c5a6d20b0ff6dbe9e95064ee5b773652d4a2-529x529.png?auto=format&fit=fill&q=80&w=529",
  },
};
const InternalAgents: React.FC = () => {
  const { agentId } = useParams<{ agentId: string }>();

  const agent = useMemo(
    () => DataAgents.find((a) => String(a.id) === agentId) as Agent | undefined,
    [agentId]
  );

  if (!agent)
    return <div className="text-white p-8">Agente não encontrado.</div>;
  const assets = functionImages[agent.function as AgentFunction];
  return (
    <div className="text-white">
      {/* Banner */}
      <section className="xl:flex xl:flex-col xl:items-center">
        <div className="relative w-full">
          <img
            src={agent.internalImage}
            alt={`Banner com o agente ${agent.name}`}
            className="w-full xl:h-[150vh] object-cover z-20"
          />
          <div className="absolute inset-0 bg-azulmarinho/40"></div>
          <div className="absolute top-0 left-0 bg-gradient-to-r from-black/80 to-transparent w-1/2 h-full"></div>
        </div>

        <div className="flex flex-col items-center bg-azulmarinho text-left py-8 xl:absolute xl:top-[40%] xl:bg-transparent xl:items-start xl:w-[90%]">
          <div className="flex flex-col w-[90%] xl:w-1/2 xl:gap-5">
            <h1 className="font-tungsten text-white text-[3.6rem] font-bold italic tracking-tight xl:text-[6rem]">
              {agent.name}
            </h1>
            <span className="text-white text-base font-DINNext font-normal mb-4">
              {agent.description}
            </span>
            <div className="flex flex-col items-center gap-3 outline-1 outline-light-red outline-offset-7 p-4 max-w-max mb-6 bg-[rgb(15,25,35)]">
              <SvgController />
              <div className="flex flex-col items-center uppercase text-[0.6rem]">
                <p className="font-inter">função</p>
                <p className="font-inter text-light-red">{agent.function}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Habilidades */}
      <section className=" flex flex-col items-center p-8 bg-gray-900 xl:flex-row">
        <div></div>
        <div className="flex justify-between gap-6 w-full">
          <Tabs
            defaultValue={String(agent.habilidade[0].id)}
            className="w-full bg-contain bg-center bg-no-repeat pb-5 xl:flex! xl:justify-center xl:flex-row "
            style={{ backgroundImage: `url(${assets.BackgroundIcon})` }}>
            <div className="xl:w-1/2 xl:flex xl:flex-col xl:justify-center xl:gap-15">
              <h2 className="text-3xl font-bold mb-6 uppercase font-tungsten text-[3.5rem] leading-12 text-center xl:text-[6rem]">
                Habilidades especiais
              </h2>
              <TabsList className="bg-transparent! [data-state=active]:bg-transparent! w-full mb-8">
                {agent.habilidade.map((hab) => (
                  <TabsTrigger
                    key={hab.id}
                    value={String(hab.id)}
                    className="h-auto">
                    <img
                      src={hab.icon}
                      alt={hab.name}
                      className="w-12 h-12 xl:w-[4rem] xl:h-[4rem]"
                    />
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {agent.habilidade.map((hab) => (
              <TabsContent
                value={String(hab.id)}
                key={hab.id}
                className="flex flex-col items-center gap-5 xl:w-1/2">
                <video
                  src={hab.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto"
                />
                <h2 className="text-xl font-bold mt-2 font-tungsten text-[1.75rem] ">
                  {hab.name}
                </h2>
                <span className="font-DINNext text-base leading-7">
                  {hab.description}
                </span>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default InternalAgents;
