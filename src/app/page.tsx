import Image from "next/image";
import { NavbarDemo } from "@/app/Navbar";
import { MacbookScrollDemo } from "@/app/MacbookScrollDemo";
import { InfiniteMovingCardsDemo } from "@/app/InfiniteMovingCards";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <NavbarDemo/>
      <MacbookScrollDemo/>
      <InfiniteMovingCardsDemo/>
    </main>
  );
}
