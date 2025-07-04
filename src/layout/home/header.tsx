import { Box, Burger, Button, Group, Text } from "@mantine/core";
import Link from "next/link";
import { Container } from "./container";

export const navs = [
  { label: "About", href: "/" },
  { label: "Services", href: "/" },
  { label: "Projects", href: "/" },
];

export function Header({
  opened,
  toggle,
}: {
  opened: boolean;
  toggle: () => void;
}) {
  return (
    <Box c="white" h="100%">
      <Container h="100%">
        <Group h="100%">
          <Group justify="space-between" style={{ flex: 1 }}>
            <Link href="/">
              <Text fz={20} fw={700}>
                Timilehin
              </Text>
              {/* <Sydfunds /> */}
            </Link>
            <Group gap={0} visibleFrom="sm">
              {navs.map(({ label, href }) => {
                return (
                  <Button
                    key={label}
                    variant="transparent"
                    color="white"
                    fz={16}
                    fw={400}
                    component={Link}
                    href={href}
                  >
                    {label}
                  </Button>
                );
              })}
            </Group>

            <Button
              radius={6}
              size="sm"
              visibleFrom="sm"
              component={Link}
              href="/"
              variant="outline"
              color="white"
            >
              Contact me
            </Button>
          </Group>

          <Burger
            opened={opened}
            onClick={toggle}
            hiddenFrom="sm"
            size="sm"
            color="white"
          />
        </Group>
      </Container>
    </Box>
  );
}
