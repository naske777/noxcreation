import Image from "next/image";

const Section6 = () => {
  return (
    <section id="Comentarios" className="relative mt-[50px] md:mt-[100px] py-[50px] md:py-[100px] bg-[#F8F8F8]">
      <div className="mx-12">
        <h1 className="text-center  text-3xl md:text-[50px] font-bold leading-tight mb-4">
          Nuestros Clientes Hablan
        </h1>
        <p className="text-center text-md md:text-[18px] mb-10">
          Hemos pedido a alguno de nuestros clientes que emitan su valoración y
          estos son sus comentarios
        </p>
        <Image
          className="mx-auto mb-5"
          src={"section6/quote.svg"}
          width={32}
          height={26}
          alt="quote"
        />

        <div className="flex items-center  justify-between">
          <Image
            className="hidden md:block"
            src={"section6/leftArrow.svg"}
            width={56}
            height={56}
            alt="leftArrow"
          />

          <p className="text-center text-lg md:text-[24px] md:w-[60%] ">
            Estamos muy satisfechos con el trabajo realizado por el equipo de
            nox. Desde un inicio se evidencia un equipo muy profesional y
            comprometidos con lo que hacen.
          </p>

          <Image
            className="rotate-180 hidden md:block"
            src={"section6/leftArrow.svg"}
            width={56}
            height={56}
            alt="rightArrow"
          />
        </div>

        <div className=" flex justify-center gap-8 mt-6 md:hidden">
          <Image
            src={"section6/leftArrow.svg"}
            width={40}
            height={40}
            alt="leftArrow"
          />

          <Image
            className="rotate-180"
            src={"section6/leftArrow.svg"}
            width={40}
            height={40}
            alt="rightArrow"
          />
        </div>
      </div>
    </section>
  );
};

export default Section6;
