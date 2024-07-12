import Image from "next/image";

const Section1 = () => {
  return (
    <section className="relative">
      <Image
        className="mx-auto animate-bounce"
        src="section1/ornament1.svg"
        width={499}
        height={133}
        alt="Ornament1"
      />
      <h1 className="text-center text-3xl md:text-[50px] font-bold leading-tight mb-4">
        ¿Quieres automatizar tu negocio y no <br />
        sabes a quién acudir?
      </h1>
      <p className="text-center max-w-[984px] mx-auto text-md md:text-[18px]">
        Somos la solución a tus necesidades. Tenemos las habilidades, el
        compromiso y la creatividad para llevar tus idea y tu negocio a otro
        nivel ofertándote la posibilidad de crear un sistema que se adapte a tus
        necesidades. Con Nox no existen barreras contáctenos para poderle
        ayudar.
      </p>
      <div className="flex justify-center gap-4 mt-8">
        <button className="px-5 py-3 bg-[#0AC05E] rounded-3xl text-white">
          Contactar
        </button>
        <button className="px-5 py-3 border border-[#0AC05E] rounded-3xl">
          Conocer más
        </button>
        <div></div>
        <Image
          className="absolute -bottom-[380px] md:-bottom-[180px] -z-9 left-10 animate-bounce"
          src="section1/ornament2.svg"
          width={265}
          height={296}
          alt="Ornament2"
        />
        <Image
          className="absolute -bottom-[430px] md:-bottom-[200px] -z-10 right-0 animate-bounce-inverse"
          src="section1/ornament3.svg"
          width={418}
          height={461}
          alt="Ornament3"
        />
        <Image
          className="absolute top-0 -z-10 left-5 md:left-20 animate-bounce-inverse"
          src="section1/points1.svg"
          width={139}
          height={118}
          alt="points"
        />
        <Image
          className="absolute top-0 -z-10 right-5 md:right-20 animate-bounce-inverse"
          src="section1/points2.svg"
          width={126}
          height={197}
          alt="points"
        />
      </div>
    </section>
  );
};

export default Section1;
