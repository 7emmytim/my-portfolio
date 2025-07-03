import { ContainerProps, Container as MantineContainer } from "@mantine/core";

export function Container({ children, ...props }: ContainerProps) {
  return (
    <MantineContainer size={1440} px={{ base: 20, xl: "auto" }} {...props}>
      {children}
    </MantineContainer>
  );
}
