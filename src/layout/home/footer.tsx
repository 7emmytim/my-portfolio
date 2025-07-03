import { Text } from "@mantine/core";
import { Container } from "./container";

export function Footer() {
  return (
    <footer className="bg-[#19191B] text-white py-10 text-center">
      <Container>
        <Text size="sm" c="#6a7282">
          © {new Date().getFullYear()} Timilehin Omotugba. All rights reserved.
        </Text>
      </Container>
    </footer>
  );
}
