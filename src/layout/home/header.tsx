import { Button, Group } from "@mantine/core";
import { Container } from "./container";

export function Header() {
  return (
    <header className="bg-[#19191B] py-6 text-white">
      <Container className="flex justify-between items-center">
        <div className="text-xl font-bold">Timilehin</div>
        <nav>
          <Group gap="xl" className="hidden md:flex">
            <a href="#">Home</a>
            <a href="#">Services</a>
            <a href="#">Our Project</a>
            <a href="#">About Us</a>
          </Group>
        </nav>
        <Button variant="outline" color="white" size="sm">
          Contact us
        </Button>
      </Container>
    </header>
  );
}
