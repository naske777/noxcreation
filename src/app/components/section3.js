import Image from "next/image";

const Section3 = () => {
  return (
    <section id="Pasos" className="relative px-4 mt-[200px]">
      <h1 className="text-center  text-3xl md:text-[50px] font-bold leading-tight mb-4">
        ¿Cómo trabajamos?
      </h1>
      <p className="text-center text-md md:text-[18px] mb-10 mx-auto md:max-w-[700px]">
        Le ayudamos a desarrollar cualquier tipo de solución. Debe seguir los
        siguientes pasos para podernos comunicar y conocer sus necesidades.
      </p>

      <div className="flex md:mx-[100px] justify-center">
        <div className="flex-1 hidden md:block text-center p-4">
          <Image
            src={"/section3/women.png"}
            width={504}
            height={457}
            alt="woman"
          />
        </div>
        <div className="flex flex-col flex-1 p-4 text-center md:text-start">
          <div className="my-auto flex flex-col">
            <h2 className="text-2xl md:text-4xl  font-semibold  mb-5">Contáctenos</h2>
            <p className="mb-4 text-center md:text-start">
              Lo primero que necesita hacer es contactarnos para poder
              planificar una reunión y poder conocer sus proyecciones y la
              magnitud de sus necesidades
            </p>
            <button className="px-4 py-2 mx-auto md:mx-0 bg-[#0AC05E] rounded-2xl text-white">
              Contactar
            </button>
          </div>
        </div>
      </div>

      <div className="flex md:mx-[100px] justify-center">
        <div className="flex flex-col flex-1 p-4">
          <div className="my-auto flex flex-col text-center md:text-start">
            <h2 className="text-2xl md:text-4xl font-semibold  mb-5">Obtener Propuesta</h2>
            <p className="mb-4 ">
              Teniendo una idea de su proyecto, procedemos a crearle una
              propuesta que incluyen requisitos que debe cumplir el sistema y
              una estimación de tiempo y costo
            </p>
            <button className="px-4 py-2 mx-auto md:mx-0 bg-[#0AC05E] rounded-2xl text-white">
              Conocer más
            </button>
          </div>
        </div>
        <div className="flex-1 hidden md:block ms-auto p-4">
          <Image src={"/section3/man.png"} width={504} height={457} alt="man" />
        </div>
      </div>
    </section>
  );
};

export default Section3;
