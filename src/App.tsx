import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Programs } from "./components/Programs";
import { Research } from "./components/Research";
import { News } from "./components/News";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Programs />
        <Research />
        <News />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}