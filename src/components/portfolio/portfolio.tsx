import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

const projects = [
  {
    title: "E-commerce Website",
    description:
      "A fully functional online store built with Next.js and Django DRF.",
  },
  {
    title: "Portfolio Website",
    description: "A responsive portfolio website showcasing client work.",
  },
  {
    title: "Task Management App",
    description: "A productivity app built with Next.js and Django.",
  },
];

const Portfolio = () => {
  return (
    <section className="my-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Portfolio</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{project.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
