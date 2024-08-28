import Image from "next/image";
import Navbar from "@/app/navbar";
import { MacbookScrollDemo } from "@/app/MacbookScrollDemo";
import { StickyScrollRevealDemo } from "@/app/StickyScrollReveal";
import  HoverBorderGradientDemo  from "@/app/HoverBorderGradient";
import { Footer } from "./footer";
import Form from "./form";
import { HeroScrollDemo} from "@/app/tablet";
import { Testimonios } from "../components/ui/Testimonios";
import "./globals.css";
import  Component  from "../components/ui/ScrolljackingLayout";
import {InfiniteMovingCardsDemo} from "../app/infinitemovingcard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between  pb-0">
      <Navbar/>
      <HeroScrollDemo/>
      <InfiniteMovingCardsDemo/>
      <Component></Component>
      <Testimonios/>
      <Form/>
      <Footer/>
    </main>
  );
}
