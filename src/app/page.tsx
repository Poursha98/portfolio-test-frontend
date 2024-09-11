import About from "@/components/about/about";
import Services from "@/components/services/services";
import Portfolio from "@/components/portfolio/portfolio";
import ContactUs from "@/components/contact-us/contact-us";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto px-4 py-8">
        <About />
        <Services />
        <Portfolio />
        <ContactUs />
      </main>
    </div>
  );
}
