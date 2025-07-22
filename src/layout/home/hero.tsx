import { Title, Text, Stack, Box, Group, Button } from "@mantine/core";
import { Arrow, ArrowRight } from "iconsax-react";
import Link from "next/link";

export function Hero() {
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
