import Image from "next/image";
import { NavbarDemo } from "@/app/navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-3xl font-bold">dotu-landing-next</h1>
      <NavbarDemo></NavbarDemo>
    </main>
  );
}
