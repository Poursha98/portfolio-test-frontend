"use client";
import { useState, useEffect } from "react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import portfolioImage from "@/images/portfolio-image.jpg";
import BoxReveal from "@/components/magicui/box-reveal";

const About = () => {
  const [minWidth, setMinWidth] = useState("300px");
  const [minHeight, setMinHeight] = useState("300px");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setMinWidth("");
        setMinHeight("");
      } else {
        setMinWidth("300px");
        setMinHeight("300px");
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="my-16 ">
      <h2 className="text-3xl text-white font-bold mb-8 text-center">
        About Me
      </h2>
      <Card className="bg-black bg-opacity-65 border-none">
        <CardHeader className="!flex gap-12 md:!flex-row flex-col w-full md:!justify-start md:!items-start justify-center items-center ">
          <BoxReveal
            boxColor={"#fff"}
            duration={0.5}
            width="100%"
            maxWidth="300px"
            minHeight={minHeight}
            minWidth={minWidth}
          >
            <Image
              src={portfolioImage}
              alt="portfolio image"
              width={300}
              className="h-auto max-w-[300px] w-full rounded-lg"
            />
          </BoxReveal>
          <div className="h-full min-h-[300px] flex flex-col pb-8 md:items-start items-center">
            <BoxReveal boxColor={"#000"} duration={0.7}>
              <CardTitle className="text-3xl font-bold text-white">
                Poursha Karimi
              </CardTitle>
            </BoxReveal>
            <BoxReveal boxColor={"#000"} duration={0.9}>
              <p className="text-lg font-bold text-white md:pt-10 pt-8 md:text-left text-center">
                I&apos;m a passionate web developer with expertise in modern
                frontend technologies. With about one year and a half of
                experience in creating responsive and user-friendly websites, I
                strive to deliver high-quality solutions that meet client needs
                and exceed expectations.
              </p>
            </BoxReveal>
          </div>
        </CardHeader>
      </Card>
    </section>
  );
};

export default About;
