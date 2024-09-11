import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Web Development",
    description: "Custom website development using modern technologies.",
  },
  {
    title: "Responsive Design",
    description: "Creating websites that look great on all devices.",
  },
  {
    title: "UI/UX Design",
    description: "Designing intuitive and appealing user interfaces.",
  },
];

const Services = () => {
  return (
    <section className="my-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Services;
