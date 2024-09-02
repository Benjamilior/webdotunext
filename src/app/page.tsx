import "./globals.css";
import Image from "next/image";
import Navbar from "@/app/navbar";
import { HeroScrollDemo} from "@/app/tablet";
import {InfiniteMovingCardsDemo} from "../app/infinitemovingcard";
import  Component  from "./ScrolljackingLayout";
import  ComponentData from "../app/data";
import  Testimonios  from "./Testimonios";
import Form from "./form";
import { Footer } from "./footer";


export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between  pb-0">
      <Navbar />
      <HeroScrollDemo/>
      <InfiniteMovingCardsDemo/>
      <Component></Component>
      <ComponentData></ComponentData>
      <Testimonios/>
      <Form/>
      <Footer/>
    </main>
  );
}
