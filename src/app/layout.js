import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer";
import Header from "./components/header";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nox Creation",
  description: "Dessarrollo de software personalizado para tu negocio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
