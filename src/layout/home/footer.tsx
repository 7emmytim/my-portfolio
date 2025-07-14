import { Text } from "@mantine/core";
import { Container } from "./container";

export function Footer() {
  return (
    <footer className="bg-[#19191B] py-10">
      <Container>
        <Text size="sm" c="#6a7282" ta="right">
          © {new Date().getFullYear()} Timilehin Omotugba. All rights reserved.
        </Text>
      </Container>
    </footer>
  );
}
