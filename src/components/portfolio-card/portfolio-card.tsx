"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    title: "E-commerce Website",
    description:
      "A fully functional online store built with Next.js and Django DRF.",
    images: ["/api/placeholder/800/600", "/api/placeholder/800/600"],
  },
  {
    title: "Portfolio Website",
    description: "A responsive portfolio website showcasing client work.",
    images: ["/api/placeholder/800/600", "/api/placeholder/800/600"],
  },
  {
    title: "Task Management App",
    description: "A productivity app built with Next.js and Django.",
    images: ["/api/placeholder/800/600", "/api/placeholder/800/600"],
  },
];

const ProjectCard = ({ project }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % project.images.length);
  }, [project.images.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide(
      (prev) => (prev - 1 + project.images.length) % project.images.length
    );
  }, [project.images.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <Card className="flex flex-col w-full overflow-hidden">
      <div className="relative">
        <div className="relative w-full h-48">
          <Image
            src={project.images[currentSlide]}
            alt={`${project.title} - Image ${currentSlide + 1}`}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <Button
          variant="outline"
          size="icon"
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-50 hover:bg-opacity-75"
          onClick={prevSlide}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-50 hover:bg-opacity-75"
          onClick={nextSlide}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
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
