import { useDisclosure } from "@mantine/hooks";
import { AppShell, Stack } from "@mantine/core";
import { About } from "./about";
import { Footer } from "./footer";
import { Header } from "./header";
import { Navbar } from "./navbar";
import { Hero } from "./hero";
import { Why } from "./why";
import { Services } from "./services";
import { Projects } from "./projects";

export function Home() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 80 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { desktop: true, mobile: !opened },
      }}
      bg="#19191B"
    >
      <AppShell.Header style={{ border: "none" }}>
        <Header opened={opened} toggle={toggle} />
      </AppShell.Header>

      <AppShell.Navbar py="md" px={4}>
        <Navbar />
      </AppShell.Navbar>

      <AppShell.Main>
        <Stack gap={0}>
          <Hero />
          <Why />
          <About />
          <Services />
          {/* <Projects /> */}
        </Stack>
      </AppShell.Main>

      <AppShell.Footer pos="relative" className="!border-none">
        <Footer />
      </AppShell.Footer>
    </AppShell>
  );
}
