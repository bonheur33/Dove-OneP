import { lazy, Suspense } from "react";
import Hero from "./components/Hero.jsx";
import WhyChoose from "./components/WhyChoose.jsx";
import About from "./components/About.jsx";
import Services from "./components/Services.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

// Lazy loading des composants lourds / moins critiques
const EventOffers = lazy(() => import("./components/EventOffers"));
const Gallery = lazy(() => import("./components/Gallery"));

function App() {
  return (
    <div>
      <Hero />
      <WhyChoose />
      <About />
      <Services />

      {/* Lazy loading avec fallback */}
      <Suspense fallback={<p>Chargement des offres…</p>}>
        <EventOffers />
        <Gallery />
      </Suspense>

      <Contact />
      <Footer />
    </div>
  );
}

export default App;
