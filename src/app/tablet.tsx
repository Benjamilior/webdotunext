"use client";
import React from "react";
import { ContainerScroll } from "../components/ui/container-scroll-animation";
import Component from "./forMacbook";
import Image from "next/image";
import PricingSheet from "./principal";
import RetailDashboard from "./principal2";
import OnlineComponent from "./onlinestock"

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden h-[1900px] bg-gradient-to-br  from-purple-700 to-indigo-900 dark:bg-[#0B0B0F] bg-white w-full">
      <ContainerScroll 
        titleComponent={
          <Component ></Component>
        }
      >
       <RetailDashboard></RetailDashboard>
      </ContainerScroll>
       
    </div>
  );
}
