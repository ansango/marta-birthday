import Image from "next/image";
import { playAudio, resetAudio } from "../lib/audio";
import Gallery from "./Gallery";
import lisa from "../public/lisa.jpg";
const Resume = ({ action = () => {} }) => {
  const play = () => {
    resetAudio("carino");
    resetAudio("applause");
    resetAudio("laugh");
    playAudio("tame");
    action();
  };
  return (
    <>
      <div id="gallery">
        <h2 className="text-xl text-gray-700 font-semibold text-center pt-14">
          Algunas historias graciosas, igual otras no tanto
        </h2>
        <Gallery />
      </div>

      <div className="space-y-5 flex flex-col items-center">
        <div className="relative h-[32rem] w-full mb-10">
          <Image src={lisa} alt="meme" layout="fill" objectFit="cover" />
        </div>
        <p className=" text-gray-700 text-3xl text-center font-semibold pb-5">
          ¡Te deseamos un Feliz cumpleaños!
        </p>
        
        <p className=" text-gray-700">
          Espero que hayas recordado muchos de los buenos momentos que te han
          traído estos 30 años.
        </p>
        <p className=" text-gray-700">
          Me gustaría que recordaras este año de alguna manera especial; y que
          entrar en los treinta sea un gran recuerdo para ti.
        </p>
        <p className=" text-gray-700">
          Desgraciadamente ya sabes la sorpresa, así que hazte la sorprendida.
        </p>

        <div className="py-20">
          <a
            href="#present"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            onClick={play}
          >
            El regalito
          </a>
        </div>
      </div>
    </>
  );
};

export default Resume;
