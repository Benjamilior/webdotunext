// MyGallery.tsx
//Se Usa https://www.npmjs.com/package/react-image-gallery
"use client";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export function Testimonios() {
    const images = [
      {
        original: "/testimonios/Agustin.jpg",
        
      },
      {
        original: "/testimonios/lol.jpg",
       
      }
    ];
    return (
      <div className="w-full flex flex-col items-center justify-center border-b border-primarydotu">
         <h1 className="mt-[150px] text-4xl sm:text-5xl font-extrabold tracking-tight text-center mb-8">
          <span className="block text-primarydotu">Testimonios</span>
          <span className="block text-3xl text-primarydotu">que dicen nuestros clientes sobre nosotros</span>
        </h1>
        <div className="  w-full -mx-16 sm:w-1/2">

        <ImageGallery 
        
        items={images}
        showPlayButton={false}
        showFullscreenButton={false}
        showThumbnails={false}
        showBullets={false}
        autoPlay={false}
      />
        </div>
</div>

    );
}
