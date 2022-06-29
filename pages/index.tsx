import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Iphone from "../components/Iphone";
import Joke from "../components/Joke";
import Resume from "../components/Resume";
import paris from "../public/paris.jpg";
import ti from "../public/ti.png";

const Home: NextPage = () => {
  const [showIphone, setShowIphone] = useState(false);
  const [showPresent, setPresent] = useState(false);
  const [showJoke, setJoke] = useState(false);
  const [showResume, setResume] = useState(false);

  return (
    <div>
      <Head>
        <title>Feliz Cumpleaños</title>
        <meta name="description" content="Feliz Cumpleaños" />
      </Head>
      <audio id="applause" src="/audio/applause.mp3"></audio>
      <audio id="laugh" src="/audio/laugh.mp3"></audio>
      <audio id="tame" src="/audio/TI.mp3"></audio>
      <audio id="carino" src="/audio/carino.mp3" />

      <main className="w-full max-w-xl mx-auto px-5 space-y-10">
        <Hero action={() => setShowIphone(true)} />
        {showIphone && <Iphone action={() => setJoke(true)} />}
        {showJoke && <Joke action={() => setResume(true)} />}
        {showResume && <Resume action={() => setPresent(true)} />}
        {showPresent && (
          <div id="present" className="space-y-20">
            <p className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-gray-900 text-center">
              ¿Lista para ver a...
            </p>
            <div className="">
              <Image src={ti} alt="TI" />
            </div>
            <p className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-gray-900 text-center">
              en...
            </p>
            <div>
              <Image src={paris} alt="Paris" />
            </div>

            <div className="space-y-5">
              <p className="text-xl text-center text-gray-700">
                El 27 de agosto de 2022
              </p>
              <p className="text-xl text-center font-semibold text-gray-700">
                ¡Nos vamos!
              </p>
            </div>
            <div className="space-y-5">
              <p className=" text-gray-700 text-3xl text-center font-semibold">
                ¡Feliz cumpleaños!
              </p>
              <p className=" text-gray-700 text-3xl text-center font-semibold">
                💜💜💜 
              </p>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Home;
