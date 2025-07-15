import { useMemo } from "react";
import { Box, Stack } from "@mantine/core";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import data from "@/data/projects.json";
import Link from "next/link";
import { useRouter } from "next/router";
import { useViewportSize } from "@mantine/hooks";

export function Projects() {
  const { width } = useViewportSize();
  const { query } = useRouter();
  const action = query.action ?? "play";

  const play = useMemo(() => {
    return action === "play";
  }, [action]);

  return (
    <Stack
      gap={20}
      h="100%"
      pt={{ base: 0, xl: 300 }}
      className="overflow-hidden"
    >
      <Marquee
        pauseOnClick
        pauseOnHover
        play={play}
        direction={width > 992 ? "down" : "left"}
        autoFill
        gradient={width > 992}
        gradientWidth={100}
        gradientColor="#19191B"
        className="overflow-hidden"
      >
        {data.map(({ image, url, name }, index) => {
          return (
            <Box
              key={index}
              h={400}
              w={{ base: 300, lg: 400 }}
              component={Link}
              href={url}
              target="_blank"
              pos="relative"
              className="overflow-hidden cursor-pointer block"
              mr={50}
            >
              <Image
                fill
                src={`/images/${image}.png`}
                alt={name}
                className="object-contain transition-transform duration-500 hover:scale-110"
              />
            </Box>
          );
        })}
      </Marquee>
    </Stack>
  );
}
