import About from "./Components/About";
import Champions from "./Components/Champions";
import Contact from "./Components/Contact";
import Features from "./Components/Features";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import NavBar from "./Components/NavBar";
import Story from "./Components/Story";

function App() {
  return (
    <section>
      <NavBar />
      <Hero />
      <About />
      <Features />
      <Champions />
      <Story />
      <Contact />
      <Footer />
    </section>
  );
}

export default App;
