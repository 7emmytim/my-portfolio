import { AppShell, SimpleGrid, Stack } from "@mantine/core";
import { Footer } from "./footer";
import { Header } from "./header";
import { Hero } from "./hero";
import { Experience } from "./experience";
import { Projects } from "./projects";
import { Container } from "./container";

export function Home() {
  return (
    <AppShell header={{ height: 80 }} bg="#19191B">
      <AppShell.Header bg="#19191B" style={{ border: "none" }}>
        <Header />
      </AppShell.Header>

      <AppShell.Main>
        <Container>
          <SimpleGrid cols={{ base: 1, md: 2 }} spacing={{ base: 0, md: 50 }}>
            <Stack h="100%" className="[996px]:!gap-20">
              <Hero />
              <Experience />
            </Stack>

            <Projects />
          </SimpleGrid>
        </Container>
      </AppShell.Main>

      <AppShell.Footer pos="relative" className="!border-none">
        <Footer />
      </AppShell.Footer>
    </AppShell>
  );
}
