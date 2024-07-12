import Image from "next/image";

const teamMembers = [
  { image: "/section4/josue.png", title: "Ing. Josué Carballo", text: "Desarrollador" },
  { image: "/section4/bertha.png", title: "Lic. Bertha Andrianis", text: "Diseñadora / Ilustradora" },
  { image: "/section4/lazaro.png", title: "Ing. Lázaro Jesús", text: "Desarrollador" },
  { image: "/section4/leo.png", title: "Ing. Leonardo Fabián", text: "Desarrollador" },
  { image: "/section4/claudia.png", title: "Ing. Claudia Rizo", text: "Community Manager" },
  { image: "/section4/mary.png", title: "Lic. Mary Isabel", text: "Manager Creativity" },
];

const Section4 = () => {
  return (
    <section id="Equipo" className="relative mt-[100px] md:mt-[200px] mx-4 md:mx-[100px]">
      <h1 className="text-center  text-3xl md:text-[50px] font-bold leading-tight  mb-4 md:mb-12">
      El equipo creativo detrás de la puerta
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-14">
        {teamMembers.map((member, index) => (
          <div key={index} className="w-1/2 md:w-1/3 lg:w-1/6 p-4 text-center">
            <Image className="rounded-full mx-auto" src={member.image} width={100} height={100} alt={member.title} />
            <h2 className="text-xl font-bold mt-4">{member.title}</h2>
            <p>{member.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section4;