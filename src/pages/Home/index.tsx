import { Footer } from "@/components/reusable/Footer";
import Header from "@/components/reusable/Header";
import Hero from "./hero";
import ProblemsBenefits from "./problems-benefits";
import About from "./about";
import FeaturedPlayers from "./featured-players";
import Testimonials from "./testimonials";
import Faq from "./faq";
import Cta from "./cta";

export default function HomePage() {
  return (
    <main role="main" className="w-full">
      <Header />
      <Hero />
      <ProblemsBenefits />
      <About />
      <FeaturedPlayers />
      <Testimonials />
      <Faq />
      <Cta />
      <Footer />
    </main>
  );
}
