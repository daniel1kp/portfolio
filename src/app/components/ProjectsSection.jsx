"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Diamond Price Predictor",
    description: "User-friendly web application that simplifies the analysis and prediction of diamond prices. It also provides various visualizations to better understand the data.",
    image: "/images/projects/1.png",
    tag:  ["All","ML","Web"],
    gitUrl: "https://github.com/daniel1kp/diamond-price-predictor",
    previewUrl: "https://diamond-price-prediction-application.streamlit.app",
  },
  {
    id: 2,
    title: "Face Mask Detection Application",
    description: "An interactive web application that allows users to determine whether a person is wearing a mask.",
    image: "/images/projects/2.png",
    tag: ["All","ML","Google Colab","Web"],
    gitUrl: "https://github.com/daniel1kp/facemask-detection-application",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "OpenRTB Programmatic Advertising Dashboard",
    description: "Demo project which was designed to illustrate using Rill to analyze programmatic bid logs using the canonical open RTB framework.",
    image: "/images/projects/3.png",
    tag: ["All","BI","Web"],
    gitUrl: "https://github.com/daniel1kp/openrtb-dashboard",
    previewUrl: "https://ui.rilldata.com/daniel1kp/openrtb-dashboard",
  },
  {
    id: 4,
    title: "Shortest Path Calculator",
    description: "This project allows users to explore the shortest distance between nodes in a graph using Python and Dijkstra's algorithm.",
    image: "/images/projects/4.png",
    tag: ["All","Google Colab","Web"],
    gitUrl: "https://github.com/daniel1kp/shortest-path",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "You're looking right at it!",
    image: "/images/projects/5.png",
    tag: ["All","React","Web"],
    gitUrl: "https://github.com/daniel1kp/portfolio",
    previewUrl: "",
  },
  {
    id: 6,
    title: "Coming Soon!",
    description: "Secret as of now c:",
    image: "/",
    tag: ["All"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="ML"
          isSelected={tag === "ML"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Google Colab"
          isSelected={tag === "Google Colab"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="React"
          isSelected={tag === "React"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
