import { Title, Text, Image, Stack, Box } from "@mantine/core";
import { Play } from "iconsax-react";
import { Container } from "./container";

export function Why() {
  return (
    <Box bg="#19191B" py={80} className="text-white">
      <Container>
        <Stack mb={40} gap={8}>
          <Title order={2} fw={700} className="text-3xl">
            Why I am The Best Choice?
          </Title>
          <Text className="text-gray-400">
            Watch this one minute video so you understand why you should use our
            services!
          </Text>
        </Stack>

        <div className="relative group w-full max-w-4xl mx-auto">
          <Image src="/images/team-video.jpg" alt="Video" radius="md" />
          <div className="absolute inset-0 flex justify-center items-center">
            <button className="bg-indigo-500 p-4 rounded-full text-white shadow-lg hover:bg-indigo-600">
              <Play size={18} color="purple" />
            </button>
          </div>
        </div>
      </Container>
    </Box>
  );
}
