import { Group, Text } from "@mantine/core";
import { Container } from "./container";

export function Footer() {
  return (
    <footer className="bg-[#19191B] py-10">
      <Container>
        {/* <Group> */}
        {/* <Group>

          </Group> */}

        <Text size="sm" c="dimmed" ta="right">
          © {new Date().getFullYear()} Timilehin Omotugba. All rights reserved.
        </Text>
        {/* </Group> */}
      </Container>
    </footer>
  );
}
