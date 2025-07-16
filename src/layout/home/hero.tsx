import { Title, Text, Stack, Box, ActionIcon, Group } from "@mantine/core";
import { PauseCircle, PlayCircle } from "iconsax-react";
import Link from "next/link";
import { useRouter } from "next/router";

export function Hero() {
  const { pathname, query } = useRouter();
  const action = (query.action ?? "play") as "play" | "pause";

  return (
    <Box py={{ base: 60, md: 80 }} c="white">
      <Stack gap={24}>
        <Title order={1} fz={{ base: 30, md: 36, lg: 48 }} fw={700}>
          Build Your Awesome Platform
        </Title>
        <Text c="#99a1af">
          I’m Timilehin, a frontend developer based in Nigeria. I specialize in
          building modern and performant web applications using technologies
          like React, Next.js, and Tailwind CSS. I enjoy creating elegant user
          interfaces that solve real-world problems.
        </Text>

        <Group>
          <ActionIcon
            variant="transparent"
            top="50vh"
            left={{ base: "53%", lg: "55%" }}
            pos="fixed"
            radius="xl"
            size="xl"
            visibleFrom="md"
            component={Link}
            href={{
              pathname,
              query:
                action === "pause"
                  ? {}
                  : {
                      action: "pause",
                    },
            }}
          >
            {action === "pause" ? (
              <PlayCircle variant="Bold" className="fill-current" size={48} />
            ) : (
              <PauseCircle variant="Bulk" className="fill-current" size={48} />
            )}
          </ActionIcon>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-0 text-sm m-0 p-0"
          >
            Download Resume
          </a>
        </Group>
      </Stack>
    </Box>
  );
}
