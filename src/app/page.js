import Section1 from "./components/section1";
import Section2 from "./components/section2";
import Section3 from "./components/section3";
import Section4 from "./components/section4";
import Section5 from "./components/section5";
import Section6 from "./components/section6";
import Section7 from "./components/section7";

export default function Home() {
  return (
      <main className="">
        <Section1 /> {/* bienvenida */}
        <Section2 /> {/* Servicios ofrecidos*/}
        <Section3 /> {/* ¿Cómo trabajamos?*/}
        <Section4 /> {/* Equipo creativo*/}
        <Section5 /> {/* Selección de trabajos*/}
        <Section6 /> {/* Comentarios*/}
        <Section7 /> {/* Contacto e información de ubicación*/}
      </main>
  );
}
