import Image from "next/image";
import HeroCaraousel from "./components/HeroCaraousel";
import Hero1 from "./components/Hero1";
import Card1 from "./components/Card1";

export default function Home() {
  return (
    <main className="flex w-lvw max-h-full flex-col items-center justify-between">
    <HeroCaraousel />
    <div className="divider divider-start divider-success">Newly Launched</div>
    <Hero1 />
    <div className="divider divider-start divider-success">Featured</div>
    <Card1 />
    <div className="divider divider-start divider-success"></div>

    </main>
 
  );
}
