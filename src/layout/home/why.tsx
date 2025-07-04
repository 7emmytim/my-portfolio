import { Title, Text, Image, Stack, Box } from "@mantine/core";
import { Play } from "iconsax-react";
import { Container } from "./container";

export function Why() {
  return (
    <Box py={80} className="text-white">
      <Container>
        <Stack mb={40} gap={8}>
          <Title order={2} fw={700} className="text-3xl">
            Why I am The Best Choice?
          </Title>
          <Text className="text-gray-400">
            Watch this one minute intro video so you understand why you should
            work with me!
          </Text>
        </Stack>

        <div className="relative group w-full mx-auto">
          <Image
            src="https://images.unsplash.com/photo-1571624436279-b272aff752b5?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Let's have a meeting"
            // radius="md"
          />
          {/* <div className="absolute inset-0 flex justify-center items-center">
            <button className="bg-indigo-500 p-4 rounded-full text-white shadow-lg hover:bg-indigo-600">
              <Play size={18} color="purple" />
            </button>
          </div> */}
        </div>
      </Container>
    </Box>
  );
}
