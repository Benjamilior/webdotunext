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
        <div>
          <h1>Testimonios</h1>
            <ImageGallery items={images}
            showPlayButton={false}
            showFullscreenButton={false}
            showThumbnails={false}
            showBullets={false}
            autoPlay={false}
             />
           
        </div>
    );
}
