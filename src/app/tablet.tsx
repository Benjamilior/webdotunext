"use client";
import React from "react";
import { ContainerScroll } from "../components/ui/container-scroll-animation";
import Component from "./forMacbook";
import Image from "next/image";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden bg-gradient-to-br h-[1800px]  from-purple-700 to-indigo-900 dark:bg-[#0B0B0F] bg-white w-full">
      <ContainerScroll 
        titleComponent={
          <Component ></Component>
        }
      >
        <Image
          src={`/linear.webp`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
