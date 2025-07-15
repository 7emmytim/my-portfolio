import {
  ActionIcon,
  Avatar,
  Badge,
  Flex,
  Group,
  Stack,
  Text,
  Timeline,
} from "@mantine/core";
import { Cd } from "iconsax-react";
import { TransmitRight } from "@/icons";
import data from "@/data/experiences.json";
import { useViewportSize } from "@mantine/hooks";

export function Experience() {
  const { width } = useViewportSize();

  return (
    <Timeline
      active={1}
      bulletSize={40}
      lineWidth={2}
      styles={{
        root: {
          paddingInlineStart: width > 992 ? "var(--offset)" : 0,
        },
        item: {
          paddingInlineStart: width > 992 ? "var(--offset)" : 0,
        },
        itemBody: {
          paddingInlineStart: width > 992 ? "var(--offset)" : 0,
          marginTop: width > 992 ? "auto" : 10,
        },
        itemBullet: {
          position: width > 992 ? "absolute" : "relative",
          left:
            width > 992
              ? "calc((var(--tl-bullet-size) / 2 + var(--tl-line-width) / 2) * -1)"
              : 0,
        },
      }}
    >
      {data.map(
        (
          { company, title, type, duration, logo, description, skills },
          index
        ) => {
          return (
            <Timeline.Item
              key={index}
              bullet={
                <ActionIcon color="white" radius="100%" size="100%" p={3}>
                  <Avatar src={logo} size="100%" alt={company} />
                </ActionIcon>
              }
              className="relative transition-all duration-300 group cursor-pointer"
              title={
                <Stack gap={2}>
                  <Text>{title}</Text>
                  <Flex gap={10} align="center">
                    <Text fz={14} c="brand.1">
                      {company}
                    </Text>
                    <Cd size={4} color="white" variant="Bold" />
                    <Text fz={12} inherit>
                      {type}
                    </Text>
                  </Flex>
                  <Text c="dimmed" fz={12}>
                    {duration}
                  </Text>
                </Stack>
              }
              classNames={{
                itemTitle: "text-white",
                item: "before:!border-none",
              }}
            >
              <Stack>
                <Text c="white" size="sm" ta="justify">
                  {description}
                </Text>
                <Group gap={5}>
                  {skills.map((item) => {
                    return (
                      <Badge
                        size="lg"
                        variant="outline"
                        c="white"
                        tt="capitalize"
                        fw={400}
                        key={item}
                      >
                        {item}
                      </Badge>
                    );
                  })}
                </Group>
              </Stack>
              <TransmitRight className="absolute transition duration-300 opacity-0 text-white group-hover:opacity-100 right-6 top-10" />
            </Timeline.Item>
          );
        }
      )}
    </Timeline>
  );
}
