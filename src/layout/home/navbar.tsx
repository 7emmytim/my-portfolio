import { ActionIcon, Button, Stack } from "@mantine/core";

export function Navbar() {
  return (
    <Stack gap={20}>
      {/* {navs.map(({ label, href }) => {
        return (
          <Button
            key={label}
            variant="transparent"
            w="fit-content"
            mx="auto"
            fz={16}
            c="#364153"
            className="hover:!text-green-600"
            py={8}
            px={12}
            fw={600}
            component={Link}
            href={href}
          >
            {label}
          </Button>
        );
      })}

      <Button
        radius={6}
        component={Link}
        href="https://wa.link/w25qe0"
        target="_blank"
        size="md"
        leftSection={
          <ActionIcon variant="transparent" component="div">
            <Whatsapp />
          </ActionIcon>
        }
        w="fit-content"
        mx="auto"
      >
        Whatsapp
      </Button> */}
    </Stack>
  );
}
