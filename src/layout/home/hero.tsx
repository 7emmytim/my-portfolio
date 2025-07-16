import { Title, Text, Stack, Box, Group } from "@mantine/core";

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
