import {
  ActionIcon,
  Avatar,
  Box,
  Drawer,
  Group,
  ScrollArea,
  Text,
} from "@mantine/core";
import Link from "next/link";
import { Container } from "./container";
import { Add, PauseCircle, PlayCircle, Sun1 } from "iconsax-react";
import { MobileMenu } from "@/icons";
import { useDisclosure } from "@mantine/hooks";
import { useTheme } from "@/hooks";
import { useRouter } from "next/router";
import { PdfRenderer } from "./pdf-renderer";

export function Header() {
  const [opened, { open, close }] = useDisclosure(false);
  const { colorScheme, toggleTheme } = useTheme();

  const { pathname, query } = useRouter();
  const action = (query.action ?? "play") as "play" | "pause";

  return (
    <Box c="white" h="100%">
      <Container h="100%">
        <Group h="100%" justify="space-between">
          <Link href="/">
            <Group gap={3}>
              <ActionIcon variant="white">
                <Avatar src="/favicon.png" />
              </ActionIcon>

              <Text fz={20} fw={700}>
                imilehin
              </Text>
            </Group>
          </Link>

          <Group>
            <ActionIcon
              radius="xl"
              visibleFrom="md"
              component={Link}
              href={{
                pathname,
                query:
                  action === "pause"
                    ? {}
                    : {
                        action: "pause",
                      },
              }}
            >
              {action === "pause" ? (
                <PlayCircle variant="Bulk" className="fill-current" size={48} />
              ) : (
                <PauseCircle
                  variant="Bulk"
                  className="fill-current"
                  size={48}
                />
              )}
            </ActionIcon>
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
        opened={opened}
        onClose={close}
        size={600}
        scrollAreaComponent={ScrollArea.Autosize}
      >
        <PdfRenderer />
      </Drawer>
    </Box>
  );
}
