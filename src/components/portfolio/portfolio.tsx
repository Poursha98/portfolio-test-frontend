"use client";
import Image from "next/image";
import { StaticImageData } from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Autoplay, Virtual } from "swiper/modules";
import ecommerce1 from "@/images/ecommerce-1.png";
import exchange1 from "@/images/exchange-1.jpg";
import exchange2 from "@/images/exchange-2.png";
import taskApp1 from "@/images/task-app-1.png";
import taskApp2 from "@/images/task-app.jpg";

interface Project {
  title: string;
  description: string;
  images: StaticImageData[];
}

const projects = [
  {
    title: "E-commerce Website",
    description:
      "A fully functional online store built with Next.js and Django DRF.",
    images: [ecommerce1],
  },
  {
    title: "Exchange Website",
    description: "A responsive Exchange website showcasing client work.",
    images: [exchange1, exchange2],
  },
  {
    title: "Task Management App",
    description: "A productivity app built with Next.js and Django.",
    images: [taskApp1, taskApp2],
  },
];

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Card className="flex flex-col w-full overflow-hidden">
      <div className="relative">
        <Swiper
          modules={[Navigation, Autoplay, Virtual]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={{
            nextEl: ".swiper-button-next-new",
            prevEl: ".swiper-button-prev-new",
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop={true}
          virtual
          className="h-48"
        >
          {project.images.map((image, index) => (
            <SwiperSlide key={index} virtualIndex={index}>
              <Image
                src={image}
                alt={`${project.title} - Image ${index + 1}`}
                fill
                style={{ objectFit: "cover" }}
              />
            </SwiperSlide>
          ))}
          <Button
            variant="outline"
            size="icon"
            className="swiper-button-prev-new !w-8 !h-8 !bg-black !bg-opacity-65 rounded-full absolute left-2 top-1/2 -translate-y-1/2 z-10 hover:!bg-opacity-80"
          >
            <ChevronLeft className="h-4 w-4 text-white" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="swiper-button-next-new !w-8 !h-8 !bg-black !bg-opacity-65 rounded-full absolute right-2 top-1/2 -translate-y-1/2 z-10 hover:!bg-opacity-80"
          >
            <ChevronRight className="h-4 w-4 text-white" />
          </Button>
        </Swiper>
      </div>
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p>{project.description}</p>
      </CardContent>
    </Card>
  );
};

const Portfolio = () => {
  return (
    <section className="my-16">
      <h2 className="text-3xl font-bold mb-8 text-center text-white">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex"
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
