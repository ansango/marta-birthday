import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import iphone from "../public/iphone.png";

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
      "Fisioterapia por la mañana, diseñadora de interiores en pandemia.",
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
    description: "Pero siempre disfrutando a cada momento.",
  },
  {
    src: six,
    alt: "6",
    description: "Nunca pierdes la ocasión de celebrarlo.",
  },
  {
    src: seven,
    alt: "7",
    description: "¿Café con leche?",
  },
  {
    src: eight,
    alt: "8",
    description: "¿Café con leche? 2",
  },
  {
    src: nine,
    alt: "9",
    description: "Y con la mente en otro sitio",
  },
  {
    src: ten,
    alt: "10",
    description: "Hemos llegado hasta aquí. Aunque nos hayan timado en Sintra.",
  },
  {
    src: eleven,
    alt: "11",
    description: "En el campo o en la playa, lista para la foto.",
  },
  {
    src: twelve,
    alt: "12",
    description: "La mejor tía del mundo...",
  },
  {
    src: thirteen,
    alt: "13",
    description: "Y también el mejor cojín.",
  },
  {
    src: fourteen,
    alt: "14",
    description: "Comiendo hasta el amanecer.",
  },
  {
    src: fifteen,
    alt: "15",
    description: "Siendo la mejor versión de los Sims.",
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
    description: "Muchas veces un poco de diabetes.",
  },
  {
    src: twenty,
    alt: "20",
    description: "Y siempre...",
  },
  {
    src: twentyone,
    alt: "21",
    description: "Disfrutando a cada momento...",
  },
  {
    src: twentytwo,
    alt: "22",
    description: "En cualquier lugar.",
  },
  {
    src: twentythree,
    alt: "23",
    description: "Y aunque a veces estés triste...",
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

const Home: NextPage = () => {
  const [showIphone, setShowIphone] = useState(false);
  const [showPresent, setPresent] = useState(false);
  const play = () => {
    setPresent(true);
    const audio = document.getElementById("a1") as HTMLAudioElement;
    audio.play();
  };
  return (
    <div>
      <Head>
        <title>Feliz Cumpleaños</title>
        <meta name="description" content="Feliz Cumpleaños" />
      </Head>
      <audio id="a1" src="/audio/TI.mp3"></audio>
      <main className="w-full max-w-xl mx-auto px-5 space-y-10">
        <div className="h-screen flex flex-col justify-between py-20">
          <div className="space-y-10">
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-gray-900 text-center">
              ¡Este es tu 30 cumpleaños!
            </h1>
            <h2 className="text-center text-5xl">👵🎉</h2>
            <p className="text-center text-gray-700 text-lg">
              ¿Esperabas un <span className="font-semibold">mega regalo?</span>
            </p>
          </div>
          <div className="flex justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
              onClick={() => setShowIphone(true)}
            >
              Ver regalo
            </button>
          </div>
        </div>
        {showIphone && (
          <>
            <div>
              <p className="text-center text-gray-700 text-3xl font-semibold py-5">
                ¡Aquí lo tienes!
              </p>
              <p className="text-center text-gray-700">
                Un fabuloso iPhone 13!
              </p>
              <div className="flex justify-center">
                {showIphone && <Image src={iphone} alt="iPhone" />}
              </div>

              <p className="text-center text-gray-700 text-3xl font-semibold py-20">
                ¡Picaste! 😆
              </p>
            </div>
            <div className="space-y-5">
              <p className=" text-gray-700">
                Se veía venir la típica gracia, lo sé.
              </p>
              <p className=" text-gray-700">
                Ahora bien, este año, es diferente, entras en una{" "}
                <span className="font-semibold">nueva década 👵</span>, de
                muchos cambios, muchos positivos.
              </p>
              <p className=" text-gray-700">
                Muchas cosas buenas están por venir.
              </p>
              <p className=" text-gray-700">
                Algunos momentos te gustarán mas que otros, pero todo pasa por
                una razón.
              </p>
              <p className="text-gray-700">
                Por si se te olvidaron algunas cosas,{" "}
                <span className="font-semibold">
                  ¡aquí tienes un breve resumen!
                </span>
              </p>
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
            </div>
            <div className="space-y-5">
              <p className=" text-gray-700">
                Quiero que recuerdes este año de alguna manera especial, y que
                entrar en los treinta sea un gran recuerdo para ti.
              </p>
              <p className=" text-gray-700">
                Desgraciadamente ya sabes la sorpresa, así que sígueme el rollo
                y hazte la sorprendida.
              </p>
            </div>
            <div className="space-y-5 flex flex-col items-center">
              <p className=" text-gray-700 text-3xl text-center font-semibold">
                ¡Feliz cumpleaños!
              </p>
              <div>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                  onClick={play}
                >
                  Ver regalo de verdad
                </button>
              </div>
            </div>
          </>
        )}
        {showIphone && showPresent && (
          <div className="space-y-5 flex flex-col items-center"></div>
        )}
      </main>
      <footer className="w-full max-w-6xl mx-auto text-center py-10">
        <p>
          Hecho con
          <span className="ml-2s">💜</span>
        </p>
      </footer>
    </div>
  );
};

export default Home;
