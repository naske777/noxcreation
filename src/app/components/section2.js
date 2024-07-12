import Image from "next/image";

const services = [
  {
    image: "section2/gestion.svg",
    title: "Gestión",
    text: "Desarrollo de software de gestión de la información de tu negocio"
  },
  {
    image: "section2/landingPage.svg",
    title: "Landing Page",
    text: "Desarrollo de tu página principal de tu negocio de cara a internet "
  },
  {
    image: "section2/moviles.svg",
    title: "Móviles",
    text: "Desarrollo de aplicaciones móviles Android modernas y rápidas"
  },
  {
    image: "section2/desentralizacion.svg",
    title: "Descentralización",
    text: "Desarrollamos aplicaciones descentralizadas de cara a la Blockchain con web3"
  },
  {
    image: "section2/ilustracion.svg",
    title: "Ilustración",
    text: "Ilustramos todas tus ideas, realizamos carteles, personajes 2D y mucho más"
  },
  {
    image: "section2/carteles.svg",
    title: "Carteles",
    text: "Desarrollamos todo tipo de carteles en PVC como tablas de menú entre otros"
  },
  // Agrega más objetos según sea necesario
];

const Section2 = () => {
  return (
    <section id="Servicios" className="relative mt-[400px] md:mt-[300px]">
      <h1 className="text-center  text-3xl md:text-[50px] font-bold leading-tight mb-4">
      Servicios a la medida
      </h1>
      <p className="text-center text-[18px] mb-10">Te adelantamos algunos de nuestros servicios que podemos ofrecerte</p>
      <div className="flex flex-wrap justify-center">
        {services.map((service, index) => (
          <div key={index} className="max-w-sm w-full mx-auto text-center p-4">
            <Image className="mx-auto" src={service.image} width={34} height={32} alt={service.title} />
            <h2 className="text-xl font-bold my-4">{service.title}</h2>
            <p>{service.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section2;