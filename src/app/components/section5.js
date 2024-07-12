import Image from "next/image";

const works = [
  "App development",
  "Web Design",
  "Ilustraciones",
  "Trabajos en PVC",
];

const Section5 = () => {
  return (
    <section id="Trabajos" className="relative mt-[100px] md:mt-[200px] mx-12">
      <h1 className="text-center  text-3xl md:text-[50px] font-bold leading-tight mb-4">
      Selección de trabajos
      </h1>
      <p className="text-center text-md md:text-[18px] mb-10">
        Estos son algunos trabajos que hemos trabajado
      </p>
      <div className="mb-10 flex flex-wrap items-center justify-center gap-8">
        <button className="bg-[#0AC05E] px-4 py-2 rounded-2xl text-white">
          Web development
        </button>
        {works.map((work, index) => (
          <button key={index}>{work}</button>
        ))}
      </div>

      <Image
      className="mx-auto"
        src={"/section5/works.jpg"}
        width={1216}
        height={722}
        alt="works"
      />
    </section>
  );
};

export default Section5;
