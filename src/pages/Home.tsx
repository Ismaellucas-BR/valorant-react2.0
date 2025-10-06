import HeroSection from "../components/home/HeroSection";
import Season2025 from "../components/home/Season2025";
import WeAreValorant from "../components/home/WeAreValorant";
import YourAgents from "../components/home/YourAgents";
import YourMaps from "../components/home/YourMaps";
import NewCardBlog from "../components/home/NewCardBlog";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center max-w-[100rem] ">
      <HeroSection />
      <NewCardBlog />
      <Season2025 />
      <WeAreValorant />
      <YourAgents />
      <YourMaps />
    </div>
  );
}
