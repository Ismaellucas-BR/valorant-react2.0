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

const functionImages: Record<AgentFunction, string> = {
  Controladora:
    "https://playvalorant.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleController.svg",
  Sentinela:
    "https://playvalorant.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleController.svg",
  Iniciador:
    "https://playvalorant.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleController.svg",
  Duelista:
    "https://playvalorant.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleController.svg",
};

const InternalAgents: React.FC = () => {
  const { agentId } = useParams<{ agentId: string }>();

  const agent = useMemo(
    () => DataAgents.find((a) => String(a.id) === agentId) as Agent | undefined,
    [agentId]
  );

  if (!agent)
    return <div className="text-white p-8">Agente não encontrado.</div>;

  return (
    <div className="text-white">
      {/* Banner */}
      <section>
        <div className="relative">
          <img
            src={agent.internalImage}
            alt={`Banner com o agente ${agent.name}`}
            className="w-full"
          />
          <div className="absolute inset-0 bg-azulmarinho/40"></div>
        </div>

        <div className="flex flex-col items-center bg-azulmarinho text-left py-8">
          <div className="flex flex-col w-[90%]">
            <h1 className="font-tungsten text-white text-[3.6rem] font-bold italic tracking-tight">
              {agent.name}
            </h1>
            <span className="text-white text-base font-DINNext font-normal mb-4">
              {agent.description}
            </span>
            <div className="flex flex-col items-center gap-3 border border-light-red p-4 max-w-max mb-6">
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
      <section className=" flex flex-col items-center p-8 bg-gray-900">
        <h2 className="text-3xl font-bold mb-6 uppercase font-tungsten text-[3.5rem] leading-12 text-center">
          Habilidades especiais
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Tabs
            defaultValue={String(agent.habilidade[0].id)}
            className="w-[400px]">
            <TabsList className="bg-transparent! [data-state=active]:bg-transparent!">
              {agent.habilidade.map((hab) => (
                <TabsTrigger key={hab.id} value={String(hab.id)}>
                  <img src={hab.icon} alt={hab.name} className="w-10 h-10" />
                </TabsTrigger>
              ))}
            </TabsList>

            {agent.habilidade.map((hab) => (
              <TabsContent value={String(hab.id)} key={hab.id}>
                <video
                  src={hab.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto"
                />
                <h2 className="text-xl font-bold mt-2">{hab.name}</h2>
                <span className="text-sm">{hab.description}</span>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default InternalAgents;
