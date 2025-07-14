import { useMantineColorScheme } from "@mantine/core";
import { useColorScheme } from "@mantine/hooks";

export function useTheme() {
  const systemColorScheme = useColorScheme()
  const { colorScheme, setColorScheme, ...props } = useMantineColorScheme();

  function toggleTheme() {
    setColorScheme(colorScheme === "dark" ? "light" : "dark");
  }

  return {
    props,
    colorScheme: colorScheme === "auto" ? systemColorScheme : colorScheme,
    toggleTheme
  }
}
