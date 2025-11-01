import React, { useMemo, type ComponentType, type SVGProps } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router";
import DataAgents from "../data/Agents.json";
import SvgController from "../assets/svg/Controle";
import SvgDuelista from "../assets/svg/Duelista";
import SvgSentinela from "../assets/svg/Sentinela";
import SvgIniciador from "../assets/svg/Iniciador";
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
  RedIcon: string | ComponentType<SVGProps<SVGSVGElement>>;
  BackgroundIcon: string;
}

const functionImages: Record<AgentFunction, FunctioAssets> = {
  Controladora: {
    RedIcon: SvgController,
    BackgroundIcon:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/8fb7c5a6d20b0ff6dbe9e95064ee5b773652d4a2-529x529.png?auto=format&fit=fill&q=80&w=529",
  },
  Sentinela: {
    RedIcon: SvgSentinela,
    BackgroundIcon:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/93f7f1c8fea3f34f55b095c0b001940054642468-529x529.png?auto=format&fit=fill&q=80&w=529",
  },
  Iniciador: {
    RedIcon: SvgIniciador,
    BackgroundIcon:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/4262d9f490bcbaff9c6b763a5212e4e832c08bc7-529x529.png?auto=format&fit=fill&q=80&w=529",
  },
  Duelista: {
    RedIcon: SvgDuelista,
    BackgroundIcon:
      "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/70d1d136b5bf68814fa916ceab5e3c8ecced3239-529x529.png?auto=format&fit=fill&q=80&w=529",
  },
};

const InternalAgents: React.FC = () => {
  const { t, i18n } = useTranslation(["internalAgents", "common"]);
  const { agentId } = useParams<{ agentId: string }>();

  const agent = useMemo(
    () => DataAgents.find((a) => String(a.id) === agentId) as Agent | undefined,
    [agentId]
  );

  if (!agent)
    return <div className="text-white p-8">Agente não encontrado.</div>;
  const assets = functionImages[agent.function as AgentFunction];
  const Icon = assets.RedIcon;
  console.log(i18n.t("questionMobileMenu"));

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
            <h1 className="font-tungsten text-white text-[3.6rem] font-bold italic tracking-tight xl:text-[8rem] uppercase">
              {agent.name}
            </h1>
            <span className="text-white text-xl font-DINNext font-normal mb-4">
              {t(`${agent.name}.description`)}
            </span>
            <div className="flex flex-col items-center gap-3 outline-1 outline-light-red outline-offset-10 p-4  mb-6 bg-[rgb(15,25,35)]! h-[8rem] w-[8rem]">
              <Icon className="fill-light-red text-light-red stroke-light-red" />
              <div className="flex flex-col items-center uppercase text-[0.6rem] gap-3">
                <p className="font-inter">{t(`Function`, { ns: "common" })}</p>
                <p className="font-inter text-light-red">
                  {t(`${agent.name}.function`)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Habilidades */}
      <section className=" flex flex-col items-center  bg-gray-900 p-5 xl:p-15 xl:flex-row">
        <div></div>
        <div className="flex justify-between gap-6 w-full">
          <Tabs
            defaultValue={String(agent.habilidade[0].id)}
            className="w-full bg-contain bg-center bg-no-repeat pb-5 xl:flex! xl:justify-center xl:flex-row "
            style={{ backgroundImage: `url(${assets.BackgroundIcon})` }}>
            <div className="xl:w-1/2 xl:flex xl:flex-col xl:justify-center xl:gap-15 xl:items-center">
              <div className="flex flex-col items-center xl:w-4/5">
                <h2 className="text-3xl font-bold mb-6 uppercase font-tungsten text-[3.5rem] leading-16 text-center xl:text-[8rem] xl:leading-32">
                  {t(`specialSkills`, { ns: "common" })}
                </h2>
                <TabsList className="bg-transparent! [data-state=active]:bg-transparent! w-full mb-8">
                  {agent.habilidade.map((hab) => (
                    <TabsTrigger
                      key={hab.id}
                      value={String(hab.id)}
                      className="h-auto data-['active']:scroll-m-0! hover:cursor-pointer active:shadow-none!">
                      <img
                        src={hab.icon}
                        alt={hab.name}
                        className="w-12 h-12 xl:w-[4rem] xl:h-[4rem]"
                      />
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
            </div>

            {agent.habilidade.map((hab) => (
              <TabsContent
                value={String(hab.id)}
                key={hab.id}
                className="flex flex-col items-center gap-5 xl:w-1/2">
                <div className="w-full aspect-video bg-black">
                  <video
                    src={hab.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col items-center gap-3 xl:gap-5">
                  <h2 className="text-xl font-bold mt-2 font-tungsten text-[1.75rem] xl:text-[2.25rem]">
                    {t(`${agent.name}.habilidade.${hab.id}.name`)}
                  </h2>
                  <span className="font-DINNext text-sm leading-7 xl:w-2/3 text-center xl:text-xl font-normal">
                    {t(`${agent.name}.habilidade.${hab.id}.description`)}
                  </span>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default InternalAgents;
