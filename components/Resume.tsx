import { playAudio, resetAudio } from "../lib/audio";
import Gallery from "./Gallery";

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
      <div>
        <h2 className="text-xl font-semibold text-center">
          Algunas historias graciosas, igual otras no tanto
        </h2>
        <Gallery />
      </div>

      <div className="space-y-5 flex flex-col items-center">
        <p className=" text-gray-700 text-3xl text-center font-semibold">
          ¡Feliz cumpleaños!
        </p>

        <p className=" text-gray-700">
          Quiero que recuerdes este año de alguna manera especial, y que entrar
          en los treinta sea un gran recuerdo para ti.
        </p>
        <p className=" text-gray-700">
          Desgraciadamente ya sabes la sorpresa, así que sígueme el rollo y
          hazte la sorprendida.
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