import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import uiUx from "@/images/uiux.png";
import webDev from "@/images/web-dev.png";
import responsiveDesign from "@/images/responsive-design.png";

const services = [
  {
    img: webDev,
    title: "Web Development",
    description: "Custom website development using modern technologies.",
  },
  {
    img: responsiveDesign,
    title: "Responsive Design",
    description: "Creating websites that look great on all devices.",
  },
  {
    img: uiUx,
    title: "UI/UX Design",
    description: "Designing intuitive and appealing user interfaces.",
  },
];

const Services = () => {
  return (
    <section className="my-16">
      <h2 className="text-3xl text-white font-bold mb-8 text-center">
        Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Card
            key={index}
            className="flex flex-col h-full rounded-lg !overflow-hidden bg-black bg-opacity-65 border-none"
          >
            <div className="!overflow-hidden">
              <Image
                src={service.img}
                alt={service.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover transition-transform duration-300 ease-in-out hover:scale-110 rounded-lg rounded-b-none"
              />
            </div>
            <CardHeader className="text-white">
              <CardTitle>{service.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-white">{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Services;
