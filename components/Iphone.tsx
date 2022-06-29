import Image from "next/image";
import { playAudio, resetAudio } from "../lib/audio";
import iphone from "../public/iphone.png";

const Iphone = ({ action = () => {} }) => {
  const laugh = () => {
    resetAudio("applause");
    resetAudio("carino");
    resetAudio("tame");
    playAudio("laugh");
    action();
  };
  return (
    <div id="iphone" className="h-screen flex flex-col justify-around">
      <div>
        <div className="space-y-2">
          <p className="text-center text-gray-700 text-3xl font-semibold pt-10">
            ¡Aquí lo tienes!
          </p>
          <p className="text-center text-gray-700">Un fabuloso iPhone 13!</p>
        </div>

        <div className=" relative h-96 sm:h-[34rem] w-full">
          <Image src={iphone} alt="iPhone" layout="fill" objectFit="cover" />
        </div>
        <p className="text-gray-700 py-5">
          Ya casi lo tienes, en breves momentos llegará el repartidor de Amazon
          para entregártelo. Recuerda darle propina.
        </p>
        <div className="flex justify-center py-10">
          <a
            href="#joke"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            onClick={laugh}
          >
            Dar propina
          </a>
        </div>
      </div>
    </div>
  );
};

export default Iphone;
