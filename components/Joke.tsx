import { playAudio, resetAudio } from "../lib/audio";

const Joke = ({ action = () => {} }) => {
  const playCarino = () => {
    resetAudio("applause");
    resetAudio("tame");
    resetAudio("laugh");
    playAudio("carino");
    action();
  };
  return (
    <div id="joke" className="h-screen flex flex-col justify-between">
      <div className="space-y-10">
        <p className="text-center text-gray-700 text-3xl font-semibold pt-10">
          ¡Picaste! 😆
        </p>
        <p className=" text-gray-700">Se veía venir la típica gracia, lo sé.</p>
        <p className=" text-gray-700">
          Ahora bien, este año, es diferente, entras en una{" "}
          <span className="font-semibold">nueva década 👵</span>, de muchos
          cambios, muchos positivos.
        </p>
        <p className=" text-gray-700">Muchas cosas buenas están por venir.</p>
        <p className=" text-gray-700">
          Algunos momentos te gustarán mas que otros, pero todo pasa por una
          razón.
        </p>
        <p className="text-gray-700">
          Por si se te olvidaron algunas cosas,{" "}
          <span className="font-semibold">¡aquí tienes un breve resumen!</span>
        </p>
      </div>
      <div className="flex justify-center py-5">
        <a
          href="#gallery"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={playCarino}
        >
          Resumen
        </a>
      </div>
    </div>
  );
};

export default Joke;
