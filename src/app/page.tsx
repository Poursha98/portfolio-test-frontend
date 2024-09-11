import About from "@/components/about/about";
import Services from "@/components/services/services";
import Portfolio from "@/components/portfolio/portfolio";
import ContactUs from "@/components/contact-us/contact-us";
import { cn } from "@/lib/utils";
import DotPattern from "@/components/magicui/dot-pattern";

export default function Home() {
  return (
    <div className="min-h-screen bg-blue-900 relative">
      <DotPattern
        className={cn(
          "absolute inset-0 z-0",
          "[mask-image:radial-gradient(circle_at_center,yellow)]"
        )}
      />
      <main className="container mx-auto px-4 py-8 relative z-10">
        <About />
        <Services />
        <Portfolio />
        <ContactUs />
      </main>
    </div>
  );
}
