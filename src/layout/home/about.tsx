import { Title, Text, Box } from "@mantine/core";
import { Container } from "./container";

export function About() {
  return (
    <Box bg="#19191B" py={80} c="white">
      <Container>
        <Title order={2} className="text-3xl" fw={700} mb={16}>
          About Me
        </Title>
        <Text className="text-gray-400 leading-relaxed max-w-2xl">
          I’m Timilehin, a frontend developer based in Nigeria. I specialize in
          building modern and performant web applications using technologies
          like React, Next.js, and Tailwind CSS. I enjoy creating elegant user
          interfaces that solve real-world problems.
        </Text>
      </Container>
    </Box>
  );
}
