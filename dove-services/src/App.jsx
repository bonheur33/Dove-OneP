import { lazy, Suspense } from "react";

import Hero from "./components/Hero.jsx";
import Stats from "./components/Stats.jsx";
import WhyChoose from "./components/WhyChoose.jsx";
import About from "./components/About.jsx";
import Services from "./components/Services.jsx";
import WorkProcess from "./components/WorkProcess.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

import useReveal from "./hooks/useReveal";

// Lazy loading
const EventOffers = lazy(() => import("./components/EventOffers.jsx"));
const Gallery = lazy(() => import("./components/Gallery.jsx"));

function App() {
  useReveal(); // animations scroll

  return (
    <div>
      {/* HERO + Stats */}
      <Hero />
      <Stats />

      {/* Confiance */}
      <WhyChoose />
      <About />
      <Services />

      {/* Processus */}
      <WorkProcess />

      {/* Offres et galerie */}
      <Suspense fallback={<p style={{ color: "#ffffff" }}>Chargement du contenu…</p>}>
        <EventOffers />
        <Gallery />
      </Suspense>

      {/* Contact + Footer */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
