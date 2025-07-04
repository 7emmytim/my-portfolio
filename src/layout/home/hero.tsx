import { Button, Title, Text, SimpleGrid, Stack, Box } from "@mantine/core";
import { Container } from "./container";
import Image from "next/image";
import profileImage from "@/public/images/profile.png";

export function Hero() {
  return (
    <Box py={80} c="white">
      <Container>
        <SimpleGrid cols={{ base: 1, md: 2 }} className="items-center">
          <Stack gap={24}>
            <Title order={1} fz={{ base: 36, md: 48 }} fw={700}>
              Build Your Awesome Platform
            </Title>
            <Text c="#99a1af">
              I’m Timilehin, a frontend developer based in Nigeria. I specialize
              in building modern and performant web applications using
              technologies like React, Next.js, and Tailwind CSS. I enjoy
              creating elegant user interfaces that solve real-world problems.
            </Text>
            <Button radius="md" w="fit-content">
              My Services →
            </Button>
          </Stack>

          <Box className="flex justify-center">
            <Box
              pos="relative"
              className="w-full max-w-xs"
              h={profileImage.height}
            >
              <Image
                src={profileImage.src}
                alt="Timilehin"
                fill
                className="rounded-lg"
              />
            </Box>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
