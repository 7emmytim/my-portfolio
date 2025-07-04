import { Title, SimpleGrid, Card, Text, Box, Stack } from "@mantine/core";
import {
  Camera,
  Code,
  ColorSwatch,
  Figma,
  Layer,
  Mobile,
  Video,
} from "iconsax-react";
import { Container } from "./container";

const services = [
  {
    title: "Development",
    description: "Create a platform with the best and coolest quality from us.",
    icon: <Code size={24} />,
    bg: "bg-indigo-600/20 text-indigo-400",
  },
  {
    title: "UI/UX Designer",
    description:
      "We provide UI/UX Design services, and of course with the best quality",
    icon: <Layer size={24} />,
    bg: "bg-red-600/20 text-red-400",
  },
  {
    title: "Graphik Designer",
    description: "We provide Graphic Design services, with the best designers",
    icon: <ColorSwatch size={24} />,
    bg: "bg-yellow-600/20 text-yellow-400",
  },
  {
    title: "Motion Graphik",
    description: "Create a platform with the best and coolest quality from us.",
    icon: <Figma size={24} />,
    bg: "bg-yellow-600/20 text-yellow-400",
  },
  {
    title: "Photography",
    description:
      "We provide Photography services, and of course with the best quality",
    icon: <Camera size={24} />,
    bg: "bg-indigo-600/20 text-indigo-400",
  },
  {
    title: "Videography",
    description: "Create a platform with the best and coolest quality from us.",
    icon: <Video size={24} />,
    bg: "bg-red-600/20 text-red-400",
  },
];

export function Services() {
  return (
    <Box
      py={80}
      c="white"
      // className="relative overflow-hidden bg-gradient-to-br from-[#1E1E2A] via-[#19191B] to-black"
    >
      {/* Decorative Background Elements */}
      {/* <div className="absolute top-8 left-8 w-6 h-6 border-l-2 border-b-2 rotate-45 border-white opacity-10" />
      <div className="absolute bottom-10 left-10 w-4 h-4 border-2 border-white rotate-45 opacity-10" />
      <div className="absolute top-6 right-12 text-white text-2xl opacity-10">
        ✕
      </div>
      <div className="absolute bottom-6 right-6 text-white text-2xl opacity-10">
        ✕
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-purple-800 opacity-10 blur-3xl pointer-events-none" /> */}

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">My Services</h2>

        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-full mb-4 ${service.bg}`}
              >
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400 max-w-xs mx-auto">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Box>
  );
}
