import { useMemo } from "react";
import { Box, Group, Paper, Stack, Text, Title } from "@mantine/core";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import data from "@/data/projects.json";
import Link from "next/link";
import { useRouter } from "next/router";
import { TransmitRight } from "@/icons";

export function Projects() {
  const { query } = useRouter();
  const action = query.action ?? "play";

  const play = useMemo(() => {
    return action === "play";
  }, [action]);

  return (
    <>
      <Stack
        gap={20}
        h="100%"
        pt={{ base: 0, xl: 300 }}
        className="overflow-hidden"
        visibleFrom="md"
      >
        <Marquee
          pauseOnHover
          play={play}
          direction="down"
          autoFill
          gradient
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
                  sizes="100%"
                  {...(image === "africa-exchange" ? { priority: true } : {})}
                />
              </Box>
            );
          })}
        </Marquee>
      </Stack>

      <Stack hiddenFrom="md" mt={60} gap={20}>
        <Title order={2} c="white" fz={24}>
          Recent Projects
        </Title>

        <Marquee pauseOnHover play={play} autoFill>
          {data.map(({ image, url, name }, index) => {
            return (
              <Paper
                key={index}
                component={Link}
                href={url}
                target="_blank"
                mr={50}
                bg="transparent"
                className="cursor-pointer"
              >
                <Image
                  height={200}
                  width={300}
                  src={`/images/${image}.png`}
                  alt={name}
                  className="object-contain rounded-lg shadow-2xl"
                  sizes="100%"
                  {...(image === "africa-exchange" ? { priority: true } : {})}
                />

                <Group align="center" mt={10} gap={3}>
                  <Text fz={14} fw={500} c="white">
                    {name}
                  </Text>
                  <TransmitRight className="text-white" />
                </Group>
              </Paper>
            );
          })}
        </Marquee>
      </Stack>
    </>
  );
}
