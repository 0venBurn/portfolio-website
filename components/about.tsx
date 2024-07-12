"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Psychology</span>, and seeing the
        introductions of computational methods to the field, I decided to pursue
        a masters in the area of Computer Science. I enrolled in UCD and
        completed a variety of courses so far.{" "}
        <span className="font-medium">
          Operating Systems, Software Engineering, Data Analytics, Networking
          and Computer Archritecture
        </span>
        , to name a few. My <span className="italic">favorite </span>part of
        Computer Science is creating solutions to interesting problems. I really
        love the process of building new things and the experience of learning
        different things along the way. I'm most familiar with{" "}
        <span className="font-medium">
          React, PostgreSQL, MySQL, Go, and Python
        </span>
        . I am also comfortable with Tailwind CSS and Java. I am always looking
        to learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        engineer.
      </p>

      <p>
        When I'm not coding, I enjoy playing video games, watching movies, and
        chilling with my cat. I also enjoy{" "}
        <span className="font-medium">reading and learning new things</span>. I
        am currently reading <span className="font-medium">Blood Meridian</span>
        . I'm also relearning how to play the guitar. (I wasn't good before, nor
        currently on the relearn)
      </p>
    </motion.section>
  );
}
