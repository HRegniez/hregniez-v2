"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import { CardBody, CardContainer, CardItem } from "./3d-card"; 

// HeroParallax component to display a parallax effect with simple cards
export const HeroParallax = () => {
  // Create an array of 15 simple cards
  const cards = Array.from({ length: 15 }, (_, i) => ({
    title: `Card ${i + 1}`,
  }));

  // Split cards into three rows
  const firstRow = cards.slice(0, 5);
  const secondRow = cards.slice(5, 10);
  const thirdRow = cards.slice(10, 15);

  // Reference for the scroll container
  const ref = React.useRef(null);

  // Get scroll progress for the parallax effect
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Spring configuration for smooth animations
  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  // Define various animations based on scroll progress
  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );

  return (
    <div
      ref={ref}
      className="h-[300vh] py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        {/* First row of 3D cards */}
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((card) => (
            <CardContain
              key={card.title}
              translate={translateX}
            >
              <CardContainer className="bg-white">
                  <CardBody>
                      <CardItem className="text-red" translateZ={50}>{card.title}</CardItem>
                      <CardItem className="text-red" translateZ={100}>{card.title}</CardItem>
                      <CardItem className="text-red" translateZ={150}>{card.title}</CardItem>
                      <CardItem className="text-red" translateZ={200}>{card.title}</CardItem>
                  </CardBody>
              </CardContainer>
            </CardContain>
          ))}
        </motion.div>
        {/* Second row of 3D cards */}
        <motion.div className="flex flex-row mb-20 space-x-20">
          {secondRow.map((card) => (
            <CardContain
              key={card.title}
              translate={translateXReverse}
            >
              <CardContainer className="bg-white">
                  <CardBody>
                      <CardItem className="text-red" translateZ={50}>{card.title}</CardItem>
                      <CardItem className="text-red" translateZ={100}>{card.title}</CardItem>
                      <CardItem className="text-red" translateZ={150}>{card.title}</CardItem>
                      <CardItem className="text-red" translateZ={200}>{card.title}</CardItem>
                  </CardBody>
              </CardContainer>
            </CardContain>
          ))}
        </motion.div>
        {/* Third row of 3D cards */}
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((card) => (
            <CardContain
              key={card.title}
              translate={translateX}
            >
              <CardContainer className="bg-white">
                  <CardBody>
                      <CardItem className="text-red" translateZ={50}>{card.title}</CardItem>
                      <CardItem className="text-red" translateZ={100}>{card.title}</CardItem>
                      <CardItem className="text-red" translateZ={150}>{card.title}</CardItem>
                      <CardItem className="text-red" translateZ={200}>{card.title}</CardItem>
                  </CardBody>
              </CardContainer>
            </CardContain>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

// Header component for the hero section
export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0">
      <h1 className="text-2xl md:text-7xl font-bold dark:text-white">
        The Ultimate <br /> development studio
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
        We build beautiful products with the latest technologies and frameworks.
        We are a team of passionate developers and designers that love to build
        amazing products.
      </p>
    </div>
  );
};

export const CardContain = ({
  children,
  translate,
}: {
  children: React.ReactNode;
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      className="group/product h-96 w-[30rem] relative flex-shrink-0"
    >
      {children}
    </motion.div>
  );
};
