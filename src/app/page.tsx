// app/page.tsx
import "./globals.css";
import { HeroScrollDemo } from "@/app/tablet";
import { InfiniteMovingCardsDemo } from "@/app/infinitemovingcard";
import Component from "./ScrolljackingLayout";
import ComponentData from "@/app/data";
import Testimonios from "./Testimonios";
import Form from "./form";
import Head from "next/head";

export default function Home() {
  return (
      <>
    <Head>
      <title>Hola</title>
      <meta></meta>
    </Head>
    <main className="relative flex min-h-screen flex-col items-center justify-between pb-0">
      <HeroScrollDemo />
      <InfiniteMovingCardsDemo />
      <Component />
      <ComponentData />
      <Testimonios />
      <Form />
    </main>
      </>
  );
}
