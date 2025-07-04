import { Button, Stack } from "@mantine/core";
import { navs } from "./header";
import Link from "next/link";

export function Navbar() {
  return (
    <Stack gap={20}>
      {navs.map(({ label, href }) => {
        return (
          <Button
            key={label}
            variant="transparent"
            w="fit-content"
            mx="auto"
            fz={16}
            c="#7676e6"
            className="hover:!text-white"
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
        w="fit-content"
        variant="outline"
        mx="auto"
        color="#7676e6"
      >
        Contact me
      </Button>
    </Stack>
  );
}
