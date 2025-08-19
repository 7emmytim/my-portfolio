import { Github, LinkedIn } from "@/icons";
import {
  Title,
  Text,
  Stack,
  Box,
  Group,
  Button,
  ActionIcon,
} from "@mantine/core";
import { ArrowRight, Call, Messages1 } from "iconsax-react";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";

export function Hero() {
  return (
    <Box py={{ base: 60, md: 80 }} c="white">
      <Stack gap={24}>
        <Title order={1} fz={{ base: 30, md: 36, lg: 48 }} fw={700}>
          <Typewriter
            words={[
              "Build a Great Product",
              "Create Something Nice",
              "Build From Scratch",
            ]}
            cursor
            cursorBlinking
            loop
          />
        </Title>
        <Text c="#99a1af">
          I am a Frontend Developer with hands-on experience in building
          responsive and performant applications using React, Next.js,
          JavaScript/TypeScript, and Tailwind CSS. I thrive in fast-paced
          environments, delivering scalable solutions while ensuring great user
          experiences.
        </Text>

        <Group>
          {[
            {
              icon: LinkedIn,
              label: "LinkedIn",
              url: "https://www.linkedin.com/in/timilehin-omotugba/",
            },
            {
              icon: Github,
              label: "Github",
              url: "https://github.com/7emmytim",
            },
            {
              icon: Call,
              label: "Phone",
              url: "tel:+2349164062040",
            },
            {
              icon: Messages1,
              label: "Email",
              url: "mailto:omotugbatimilehin7@gmail.com",
            },
          ].map(({ label, url, ...props }, index) => {
            return (
              <ActionIcon
                key={index}
                variant="transparent"
                color="gray"
                size={24}
                component={Link}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <props.icon variant="Outline" color="currentColor" />
              </ActionIcon>
            );
          })}
        </Group>

        <Group>
          <Button
            color="white"
            variant="subtle"
            p={0}
            component={Link}
            rightSection={
              <ArrowRight className="-rotate-45" size={18} color="white" />
            }
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Resume
          </Button>
        </Group>
      </Stack>
    </Box>
  );
}
