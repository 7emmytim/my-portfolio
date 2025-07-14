import { ActionIcon, Avatar, Box, Drawer, Group, Text } from "@mantine/core";
import Link from "next/link";
import { Container } from "./container";
import { Add, Sun1 } from "iconsax-react";
import { MobileMenu } from "@/icons";
import { useDisclosure } from "@mantine/hooks";
import { useTheme } from "@/hooks";

export function Header() {
  const [opened, { open, close }] = useDisclosure(false);
  const { colorScheme, toggleTheme } = useTheme();

  return (
    <Box c="white" h="100%">
      <Container h="100%">
        <Group h="100%" justify="space-between">
          <Link href="/">
            <Group>
              <Avatar />

              <Text fz={20} fw={700}>
                Timilehin
              </Text>
            </Group>
          </Link>

          <Group>
            <ActionIcon
              variant="transparent"
              // onClick={toggleTheme}
            >
              {colorScheme === "dark" ? (
                <Sun1 color="white" size="100%" />
              ) : (
                <Sun1 color="white" size="100%" />
              )}
            </ActionIcon>

            <ActionIcon
              w={36}
              h={36}
              p={6}
              radius={10}
              variant="outline"
              fz={28}
              onClick={opened ? close : open}
            >
              {opened ? (
                <Add className="rotate-45" color="white" />
              ) : (
                <MobileMenu />
              )}
            </ActionIcon>
          </Group>
        </Group>
      </Container>

      <Drawer
        opened={false}
        onClose={close}
        // bg="#19191B"
      >
        <Box py="md" px={4} bg="#19191B"></Box>
        {/* Drawer content */}
      </Drawer>
    </Box>
  );
}
