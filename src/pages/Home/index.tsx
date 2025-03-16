import { Footer } from "@/components/reusable/Footer";
import Header from "@/components/reusable/Header";
import Hero from "./hero";
import ProblemsBenefits from "./problems-benefits";

export default function HomePage() {
  return (
    <main role="main" className="w-full">
      <Header />
      <Hero />
      <ProblemsBenefits />
      <Footer />
    </main>
  );
}
