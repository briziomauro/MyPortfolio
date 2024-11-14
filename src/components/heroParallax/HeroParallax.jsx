"use client";
import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { t } from "i18next";
import { useTranslation } from "react-i18next";

export const HeroParallax = ({ projects }) => {
    const { t } = useTranslation();
    const firstRow = projects.slice(0, 3);

    const ref = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const springConfig = { stiffness: 300, damping: 30, bounce: 100 };
    const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.2], [15, 0]), springConfig);
    const opacity = useSpring(useTransform(scrollYProgress, [0, 0.2], [0.2, 1]), springConfig);
    const rotateZ = useSpring(useTransform(scrollYProgress, [0, 0.2], [15, 0]), springConfig);
    const translateY = useSpring(useTransform(scrollYProgress, [0, 0.2], [-500, 150]), springConfig);
    return (
        (<div
            id="projects"
            ref={ref}
            className="2xl:h-[150vh] bg-black py-40 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]">
            <Header />
            <motion.div
                style={{
                    rotateX,
                    rotateZ,
                    translateY,
                    opacity,
                }}
                className="flex flex-col flex-wrap items-center justify-center">
                <motion.div className="flex flex-col space-y-7 2xl:space-y-0 2xl:flex-row-reverse 2xl:space-x-reverse 2xl:space-x-20 mb-20 ">
                    {firstRow.map((project) => (
                        <ProyectCard project={project} key={project.title} />
                    ))}
                </motion.div>
            </motion.div>
        </div>)
    );
};

export const Header = () => {
    return (
        (<div
            className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full  left-0 top-0">
            <p className="max-w-2xl text-base md:text-3xl mt-8 text-white font-robotoCon">
                {t('featured')}
            </p>
            <h2 className="text-2xl md:text-7xl font-bold font-playfair text-white uppercase">
                {t('projects')}
            </h2>
            <div className="bg-white w-full h-[1px] mt-10" />
        </div>)
    );
};

export const ProyectCard = ({
    project,
    translate
}) => {
    return (
        (<motion.div
            style={{
                x: translate,
            }}
            whileHover={{
                y: -20,
            }}
            key={project.title}
            className="group/product h-[300px] w-[350px] md:h-[400px] md:w-[600px] lg:w-[700px] 2xl:h-96 2xl:w-[30rem] relative flex-shrink-0">
            <a href={project.link} className="block group-hover/product:shadow-2xl " target="_blank">
                <img
                    src={project.thumbnail}
                    className="object-cover absolute h-full w-full inset-0"
                    alt={project.title} />
            </a>
            <div
                className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-60 bg-black pointer-events-none"></div>
            <h2
                className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white font-robotoCon">
                {project.title}
            </h2>
        </motion.div>)
    );
};
