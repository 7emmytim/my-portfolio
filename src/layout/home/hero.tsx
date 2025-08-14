import { Title, Text, Stack, Box, Group, Button } from "@mantine/core";
import { ArrowRight } from "iconsax-react";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";

export function Hero() {
  return (
    <Box py={{ base: 60, md: 80 }} c="white">
      <Stack gap={24}>
        <Title order={1} fz={{ base: 30, md: 36, lg: 48 }} fw={700}>
          <Typewriter
            words={["Build Your Awesome Platform", "Create Something Nice"]}
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
