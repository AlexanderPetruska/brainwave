"use client";

import { useState } from "react";
import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import Image from "next/image";

const Benefits = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Chat Smarter, Not Harder with Brainwave"
        />

        <div className="mb-10 flex flex-wrap items-center justify-center gap-10">
          {benefits.map((item, index) => (
            <div
              className="relative mx-auto my-auto block max-w-[24rem] cursor-pointer p-0.5"
              key={item.id}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Image
                src={item.backgroundUrl}
                width={1000}
                height={1000}
                alt="Image"
                className="pointer-events-none absolute bottom-0 left-0 right-0 top-0 z-10 h-full w-full translate-x-[-1px]"
              />
              <div className="pointer-events-none relative z-2 flex h-[25rem] flex-col p-[2.4rem]">
                <h5 className="h5 mb-5">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.text}</p>
                <div className="mt-auto flex items-center">
                  <Image
                    src={item.iconUrl}
                    width={48}
                    height={48}
                    alt={item.title}
                  />
                  <p
                    className={`ml-auto font-code text-xs font-bold uppercase tracking-wider text-n-1 ${hoveredIndex === index ? "underline" : ""}`}
                  >
                    Explore more
                  </p>
                  <Arrow />
                </div>
              </div>

              {item.light && <GradientLight />}

              <div
                className="absolute inset-0.5 bg-n-8 max-[430px]:h-[350px] max-[430px]:translate-y-6"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0.5 opacity-0 transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <Image
                      src={item.imageUrl}
                      width={370}
                      height={362}
                      alt={item.title}
                      className="pointer-events-none absolute bottom-0 left-0 right-0 top-0 z-10 h-full w-full object-cover"
                    />
                  )}
                </div>
              </div>

              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
