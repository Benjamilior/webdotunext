"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  
  return (
    <div className="w-full h-auto mt-8">
      {/* Maneja la altura del componente principal */}
    <div className=" w-full h-[150px] rounded-md flex flex-col antialiased  dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="normal"
        
      />
    </div>
    
    <div className="flex items-center justify-center mt-[20px]">
      <div className="h-[1px] bg-primarydotu w-[50px] sm:w-[100px] rounded-full"></div>
      <h2 className="text-[16px] font-bold text-primary mx-4 text-primarydotu whitespace-nowrap ">Confían en nosotros</h2>
      <div className="h-[1px] bg-primarydotu w-[50px] sm:w-[100px] rounded-full "></div>
    </div>

  </div>
  );
}

const testimonials = [
  { imageUrl: "/logos/pawal2.svg", width:220 , height:150 },
  { imageUrl: "/logos/ferresurhoy.svg", width:250 , height:150},
  { imageUrl: "/logos/petvetshoy.svg", width:220 , height:150 },
  { imageUrl: "/logos/uai.svg", width:220 , height:150},
  { imageUrl: "/logos/tejamañana.svg", width:200 , height:150 },
  { imageUrl: "/logos/santo-tomas.png", width:220 , height:150 },
  { imageUrl: "/logos/gruproshoy.svg", width:220 , height:150 },
  { imageUrl: "/logos/rc.svg", width:250 , height:150 },
 ]

