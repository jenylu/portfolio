import { useEffect } from 'react';
import {initLightboxJS, SlideshowLightbox} from 'lightbox.js-react'

const images = [
  // characters
  { src: './images/scribbles/cool_girl.jpg' },
  { src: './images/scribbles/Pink_Girls.jpg' },
  { src: './images/scribbles/wednesday.jpg' },
  
  { src: './images/scribbles/Boy.jpg' },
  { src: './images/scribbles/Old_Dude.jpg' },
  { src: './images/scribbles/Wk_3_HW.jpg' },
  { src: './images/scribbles/Final_Lineup.jpg' },

  // food
  { src: './images/scribbles/italy_food_zine.jpg' },
  { src: './images/scribbles/italy_aperol.jpg' },
  { src: './images/scribbles/Kimchi_Recipe.jpg' },
  { src: './images/scribbles/Lemony_Hummus_Recipe.jpg' },
  
  // { src: './images/scribbles/Fireplace.jpg' },
  { src: './images/scribbles/Fall.jpg'},
  // { src: './images/scribbles/frog_sketch.JPG' },
  { src: './images/scribbles/frog.JPG' },

  // cards
  // { src: './images/scribbles/thankyou_flowerfield.jpg' },
  { src: './images/scribbles/Holiday_Robin_Card.jpg' },
  // { src: './images/scribbles/Christmas_Carol.jpg' },
  { src: './images/scribbles/Coit_Tower.jpg' },
  { src: './images/scribbles/Golden_Gate_Bridge.jpg' },
];

function Sketchbook() {
  useEffect(() => {
    initLightboxJS("Insert your License Key here", "individual");
  }, []);

  useEffect(() => {
    document.title = 'Jennifer Lu | Sketchbook';
  }, []);

  return (
    <div className="content innerContent">
      <SlideshowLightbox className="" lightboxIdentifier="lightbox1" theme="lightbox">
        {images.map((image) => (
            <img
              className="lightboxGrid"
              src={image.src}
              data-lightboxjs="lightbox1"
              quality={80}
            />
        ))}
      </SlideshowLightbox>
    </div>);
}

export default Sketchbook;