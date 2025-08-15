import { Link } from "react-router";
import DataAgents from "../../data/Agents.json";

export default function CardAgent() {
  return DataAgents.map((agent) => {
    return (
      <Link
        to={`/agents/${agent.id}`}
        key={agent.id}
        className=" group overflow-hidden relative hover:cursor-pointer">
        <img
          src={agent.imageCard}
          alt={agent.altcard}
          loading="lazy"
          className="w-full md:h-[26rem] lg:h-[39rem] xl:h-[26rem] transition-transform duration-300 group-hover:scale-110 relative z-10"
        />
        <div className="bg-white text-azulmarinho p-3 group-hover:bg-gray-300 transition-colors relative z-20">
          <span className="font-tungsten text-[1.75rem] font-semibold uppercase">
            {agent.name}
          </span>
        </div>
      </Link>
    );
  });
}
