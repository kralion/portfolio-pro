import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { Heading } from "./Heading";

export const TechStack = () => {
  const stack = [
    {
      title: "TypeScript",
      src: "https://www.svgrepo.com/show/349540/typescript.svg",
      className: "h-10 w-10",
    },
    {
      title: "Next.js",
      src: "https://www.svgrepo.com/show/378440/nextjs-fill.svg",
      className: "h-10 w-10",
    },
    {
      title: "Remix",
      src: "./images/logos/remix.svg",
      className: "h-8 w-8 mt-1",
    },
    {
      title: "Node",
      src: "https://www.svgrepo.com/show/303266/nodejs-icon-logo.svg",
      className: "h-10 w-10",
    },
    {
      title: "Mysql",
      src: "https://www.svgrepo.com/show/373848/mysql.svg",
      className: "h-10 w-10",
    },
    {
      title: "Postgresql",
      src: "https://www.svgrepo.com/show/354200/postgresql.svg",
      className: "h-10 w-10",
    },
    {
      title: "Python",
      src: "https://www.svgrepo.com/show/452091/python.svg",
      className: "h-10 w-10",
    },

    {
      title: "Prisma",
      src: "https://www.svgrepo.com/show/373776/light-prisma.svg",
      className: "h-10 w-10",
    },
    {
      title: "Tailwind",
      src: "https://www.svgrepo.com/show/354431/tailwindcss-icon.svg",
      className: "h-10 w-10",
    },
    {
      title: "Jest",
      src: "https://www.svgrepo.com/show/373701/jest-snapshot.svg",
      className: "h-10 w-10",
    },
    {
      title: "Cypress",
      src: "https://www.svgrepo.com/show/330247/cypress.svg",
      className: "h-10 w-10",
    },

    {
      title: "Docker",
      src: "https://www.svgrepo.com/show/448221/docker.svg",
      className: "h-10 w-10",
    },
    {
      title: "Figma",
      src: "https://www.svgrepo.com/show/452202/figma.svg",
      className: "h-10 w-10",
    },
  ];

  return (
    <div>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        Tech Stack
      </Heading>
      <div className="flex flex-wrap">
        {stack.map((item) => (
          <Image
            src={item.src}
            key={item.src}
            width={`200`}
            height={`200`}
            alt={item.title}
            className={twMerge("object-contain mr-4 mb-4", item.className)}
          />
        ))}
      </div>
    </div>
  );
};
