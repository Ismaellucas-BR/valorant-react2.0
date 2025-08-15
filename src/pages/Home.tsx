import HeroSection from "../components/home/HeroSection";
import LastetsNews from "../components/home/LastetsNews";
import Season2025 from "../components/home/Season2025";
import WeAreValorant from "../components/home/WeAreValorant";
import YourAgents from "../components/home/YourAgents";
import YourMaps from "../components/home/YourMaps";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <HeroSection />
      <LastetsNews />
      <Season2025 />
      <WeAreValorant />
      <YourAgents />
      <YourMaps />
    </div>
  );
}
