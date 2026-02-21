import { Header } from "../../components/sections/Header/Header";
import { Hero } from "../../components/sections/Hero/Hero";
import Projects from "../../components/sections/Projects/Projects";
import About from "../../components/sections/About/About";
import Footer from "../../components/sections/Footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Projects />
      <About />
      <Footer />
    </>
  );
}
