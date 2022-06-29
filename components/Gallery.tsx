import one from "../public/rem/1.jpg";
import two from "../public/rem/2.jpg";
import three from "../public/rem/3.jpg";
import four from "../public/rem/4.jpg";
import five from "../public/rem/5.jpg";
import six from "../public/rem/6.jpg";
import seven from "../public/rem/7.jpg";
import eight from "../public/rem/8.jpg";
import nine from "../public/rem/9.jpg";
import ten from "../public/rem/10.jpg";
import eleven from "../public/rem/11.jpg";
import twelve from "../public/rem/12.jpg";
import thirteen from "../public/rem/13.jpg";
import fourteen from "../public/rem/14.jpg";
import fifteen from "../public/rem/15.jpg";
import sixteen from "../public/rem/16.jpg";
import seventeen from "../public/rem/17.jpg";
import eighteen from "../public/rem/18.jpg";
import nineteen from "../public/rem/19.jpg";
import twenty from "../public/rem/20.jpg";
import twentyone from "../public/rem/21.jpg";
import twentytwo from "../public/rem/22.jpg";
import twentythree from "../public/rem/23.jpg";
import twentyfour from "../public/rem/24.jpg";
import twentyfive from "../public/rem/25.jpg";
import twentysix from "../public/rem/26.jpg";
import Image from "next/image";

const images = [
  {
    src: one,
    alt: "1",
    description:
      "No hay mucho que decir, ¿qué haciamos en el suelo a las 7 de la mañana?",
  },
  {
    src: two,
    alt: "2",
    description:
      "Fisioterapia en la normalidad, diseñadora de interiores en pandemia.",
  },
  {
    src: three,
    alt: "3",
    description: "A veces senderista...",
  },
  {
    src: four,
    alt: "4",
    description: "Otras un poco jipi.",
  },
  {
    src: five,
    alt: "5",
    description: "Pero siempre disfrutona.",
  },
  {
    src: six,
    alt: "6",
    description: "Nunca pierdes la ocasión de celebrar.",
  },
  {
    src: seven,
    alt: "7",
    description: "¿Café con leche?",
  },
  {
    src: eight,
    alt: "8",
    description: "¿Café con leche? Segunda parte.",
  },
  {
    src: nine,
    alt: "9",
    description: "La mente viajando...",
  },
  {
    src: ten,
    alt: "10",
    description:
      "y hemos llegado hasta aquí, aunque nos hayan timado en Sintra.",
  },
  {
    src: eleven,
    alt: "11",
    description: "En el campo o en la playa, siempre ready para la foto.",
  },
  {
    src: twelve,
    alt: "12",
    description: "La mejor tita del mundo...",
  },
  {
    src: thirteen,
    alt: "13",
    description: "Y también el mejor cojín.",
  },
  {
    src: fourteen,
    alt: "14",
    description: "Comiendo hasta el amanecer...",
  },
  {
    src: fifteen,
    alt: "15",
    description: "y siendo la mejor versión de los Sims.",
  },
  {
    src: sixteen,
    alt: "16",
    description: "No perdemos el tiempo si hay que beber...",
  },
  {
    src: seventeen,
    alt: "17",
    description: "antes...",
  },
  {
    src: eighteen,
    alt: "18",
    description: "y después.",
  },
  {
    src: nineteen,
    alt: "19",
    description: "A veces diabetes...",
  },
  {
    src: twenty,
    alt: "20",
    description: "influencer",
  },

  {
    src: twentytwo,
    alt: "22",
    description: "o mas influencer",
  },
  {
    src: twentythree,
    alt: "23",
    description: "Y aunque estés mailita...",
  },
  {
    src: twentyfour,
    alt: "24",
    description: "siempre sacas una sonrisa.",
  },
  {
    src: twentyfive,
    alt: "25",
    description: "💜💜💜",
  },
  {
    src: twentysix,
    alt: "26",
    description: "¡Ya casi eres funcionaria!",
  },
];

const Gallery = () => {
  return (
    <div className="py-20 space-y-16">
      {images.map((image) => (
        <div key={image.alt}>
          <div className="relative h-96 w-full">
            <Image
              src={image.src}
              alt={image.alt}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <p className="text-gray-700 pt-8">{image.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
