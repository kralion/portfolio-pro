"use client";
import { Paragraph } from "@/components/Paragraph";
import Image from "next/image";

import { motion } from "framer-motion";

export default function About() {
  const images = [
    "https://images.unsplash.com/photo-1692544350322-ac70cfd63614?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1692374227159-2d3592f274c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1692005561659-cdba32d1e4a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1692445381633-7999ebc03730?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  ];
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 my-10">
        {images.map((image, index) => (
          <motion.div
            key={image}
            initial={{
              opacity: 0,
              y: -50,
              rotate: 0,
            }}
            animate={{
              opacity: 1,
              y: 0,
              rotate: index % 2 === 0 ? 3 : -3,
            }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
          >
            <Image
              src={image}
              width={200}
              height={400}
              alt="about"
              className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
            />
          </motion.div>
        ))}
        {/*
        // <Image
        //   src="https://images.unsplash.com/photo-1692544350322-ac70cfd63614?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60"
        //   width={200}
        //   height={400}
        //   alt="about"
        //   className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
        // />
        // <Image
        //   src="https://images.unsplash.com/photo-1692374227159-2d3592f274c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60"
        //   width={200}
        //   height={400}
        //   alt="about"
        //   className="rounded-md object-cover transform -rotate-3 shadow-xl block w-full h-40 md:h-60  hover:rotate-0 transition duration-200"
        // />
        // <Image
        //   src="https://images.unsplash.com/photo-1692005561659-cdba32d1e4a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
        //   width={200}
        //   height={400}
        //   alt="about"
        //   className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60  hover:rotate-0 transition duration-200"
        // />
        // <Image
        //   src="https://images.unsplash.com/photo-1692445381633-7999ebc03730?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
        //   width={200}
        //   height={400}
        //   alt="about"
        //   className="rounded-md object-cover transform -rotate-3 shadow-xl block w-full h-40 md:h-60  hover:rotate-0 transition duration-200"
        // /> */}
      </div>

      <div className="max-w-4xl">
        <Paragraph className=" mt-4">
          Hey there, I&apos;m Brayan, a dynamic Software and AI Engineer from
          South America, committed to forging innovative solutions for
          real-world challenges. My drive for tackling complex projects is
          matched by a keen ability to adapt to new technologies and a passion
          for continuous improvement through CI/CD practices. I focus on
          crafting elegant & robust applications that align with overarching
          business objectives and user demands.
        </Paragraph>

        <Paragraph className=" mt-4">
          Since the early days of my journey, I&apos;ve been captivated by the
          art of crafting exceptional digital experiences. As a developer, I
          thrive on turning lines of code into functional and elegant solutions.
          My goal is to not just create software, but to build digital marvels
          that seamlessly merge form and function. My expertise spans across
          full-stack web development, machine learning, and data analytics,
          allowing me to craft comprehensive solutions that are both technically
          sound and user-friendly. I have a strong background in React, Next.js,
          and Tailwind CSS, ensuring that the applications I build are modern,
          scalable, and maintainable. Beyond my technical skills, I pride myself
          on my ability to communicate effectively, lead teams, and resolve
          conflicts, making me a versatile professional capable of navigating
          the complexities of any project.
        </Paragraph>
        <Paragraph className=" mt-4">
          I am constantly learning and adapting, always seeking to enhance my
          skills and knowledge in both technology and business domains.
          Let&apos;s innovate and turn real-world problems into impactful,
          progressive, and driving solutions together..
        </Paragraph>

        <Paragraph className=" mt-4">
          Thank you for being here, and I can&apos;t wait to embark on this
          adventure with you.
        </Paragraph>
      </div>
    </div>
  );
}
