import Image from "next/image";

const Section7 = () => {
  const locations = [
    {
      icon: "/section7/location.svg",
      title: "Estamos en",
      description: "Calle O e/ Lindero y Ocujes Casino Deportivo",
    },

    {
      icon: "/section7/telefono.svg",
      title: "Llámenos A",
      description: "+53 5847 73 11",
    },

    {
      icon: "/section7/email.svg",
      title: "Escríbanos A",
      description: "service@noxcreation.dev",
    },
  ];

  return (
    <section id="Contacto" className="relative mt-20 md:mt-0 px-4 md:px-0">
      <div className="flex">
        <div className="flex-1 hidden md:block">
          <Image
            src={"/section7/map.jpg"}
            width={645}
            height={671}
            alt="map"
            className="h-full object-cover"
          />{" "}
        </div>
        <div className="flex-1 md:ms-5 md:me-12 text-center md:text-left">
          <h1 className="text-center  text-3xl md:text-[50px] font-bold leading-tight mb-4">
            Contacto
          </h1>
          <p className="text-center text-md md:text-[18px] mb-5">
            Escriba los siguientes datos con la infromación que nos quiera hacer
            llegar.
          </p>
          <form className="flex flex-col">
            <div className="flex w-full gap-5 mb-2">
              <input
                className="w-full rounded-lg p-4 border-2 border-solid border-gray-300"
                placeholder="Nombre"
              />
              <input
                className="w-full rounded-lg p-4 border-2 border-solid border-gray-300"
                placeholder="Apellidos"
              />
            </div>
            <input
              className="rounded-lg p-4 mb-4 border-2 border-solid border-gray-300"
              placeholder="Correo"
              type="email"
            />
            <input
              className="rounded-lg p-4 mb-4 border-2 border-solid border-gray-300"
              placeholder="Teléfono"
              type="tel"
            />
            <textarea
              className="rounded-lg p-4 mb-6 border-2 border-solid border-gray-300"
              placeholder="escriba un breve texto"
            />
            <button
              type="submit"
              className="w-fit mb-6 text-white ms-auto px-6 py-3 rounded-3xl bg-[#0AC05E]"
            >
              Enviar
            </button>
          </form>
          <div className="flex md:items-center gap-4 flex-col  md:flex-row text-start">
            {locations.map((location) => (
              <div
                key={location.id}
                className="flex flex-1  md:tems-center mb-4"
              >
                <Image
                  src={location.icon}
                  width={24}
                  height={24}
                  alt={location.title}
                />
                <div className="ms-4">
                  <h5 className="text-[#0AC05E] font-semibold">
                    {location.title}
                  </h5>
                  <p className="text-[13px]">{location.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section7;
