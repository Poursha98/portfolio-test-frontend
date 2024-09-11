"use client";
import Image from "next/image";
import { StaticImageData } from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import { useRef } from "react";
import ecommerce1 from "@/images/ecommerce-1.png";
import ecommerce2 from "@/images/ecommerce-2.png";
import exchange1 from "@/images/exchange-1.jpg";
import exchange2 from "@/images/exchange-2.png";
import taskApp1 from "@/images/task-app-1.png";
import taskApp2 from "@/images/task-app.jpg";

interface Project {
  id: string;
  title: string;
  description: string;
  images: StaticImageData[];
}

const projects: Project[] = [
  {
    id: "ecommerce-website",
    title: "E-commerce Website",
    description:
      "A fully functional online store built with Next.js and Django DRF.",
    images: [ecommerce1, ecommerce2],
  },
  {
    id: "exchange-website",
    title: "Exchange Website",
    description: "A responsive Exchange website showcasing client work.",
    images: [exchange1, exchange2],
  },
  {
    id: "task-management-app",
    title: "Task Management App",
    description: "A productivity app built with Next.js and Django.",
    images: [taskApp1, taskApp2],
  },
];

const Portfolio = () => {
  const ProjectCard = ({ project }: { project: Project }) => {
    const swiperRef = useRef<SwiperType | null>(null);

    return (
      <Card className="flex flex-col w-full overflow-hidden">
        <div className="relative">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            className="h-48"
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
          >
            {project.images.map((image, index) => (
              <SwiperSlide key={`${project.id}-image-${index}`}>
                <Image
                  src={image}
                  alt={`${project.title} - Image ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          {project.images.length > 1 && (
            <>
              <Button
                variant="outline"
                size="icon"
                className="!w-8 !h-8 !bg-black !bg-opacity-65 rounded-full absolute left-2 top-1/2 -translate-y-1/2 z-10 hover:!bg-opacity-80"
                onClick={() => swiperRef.current?.slidePrev()}
              >
                <ChevronLeft className="h-4 w-4 text-white" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="!w-8 !h-8 !bg-black !bg-opacity-65 rounded-full absolute right-2 top-1/2 -translate-y-1/2 z-10 hover:!bg-opacity-80"
                onClick={() => swiperRef.current?.slideNext()}
              >
                <ChevronRight className="h-4 w-4 text-white" />
              </Button>
            </>
          )}
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

  return (
    <section className="my-16">
      <h2 className="text-3xl font-bold mb-8 text-center text-white">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
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
