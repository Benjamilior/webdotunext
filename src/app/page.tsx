import Image from "next/image";
import { NavbarDemo } from "@/app/Navbar";
import { MacbookScrollDemo } from "@/app/MacbookScrollDemo";
import { InfiniteMovingCardsDemo } from "@/app/InfiniteMovingCards";
import { StickyScrollRevealDemo } from "@/app/StickyScrollReveal";
import { HoverBorderGradientDemo } from "@/app/HoverBorderGradient";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <NavbarDemo/>
      <MacbookScrollDemo/>
      <InfiniteMovingCardsDemo/>
      <StickyScrollRevealDemo/>
      <HoverBorderGradientDemo/>
        
    </main>
  );
}
