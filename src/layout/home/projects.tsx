import {
  Card,
  Image,
  Text,
  Badge,
  Group,
  SimpleGrid,
  Button,
  Box,
  Title,
} from "@mantine/core";
import { HuobiToken, Link } from "iconsax-react";
import { Container } from "./container";

const projects = [
  {
    title: "Portfolio Website",
    image: "/images/project1.png",
    description:
      "My personal portfolio built with Next.js, Tailwind, and Mantine.",
    tech: ["Next.js", "Tailwind CSS", "Mantine"],
    github: "https://github.com/yourusername/portfolio",
    live: "https://yourportfolio.com",
  },
  {
    title: "Blog Platform",
    image: "/images/project2.png",
    description:
      "A markdown blog platform with categories, tags, and dark mode.",
    tech: ["Next.js", "TypeScript", "MDX"],
    github: "https://github.com/yourusername/blog-platform",
    live: "https://yourblog.com",
  },
];

export function Projects() {
  return (
    <Box bg="#19191B" py={80} c="white">
      <Container>
        <Title fw={700} order={2} ta="center" mb={40} fz={30}>
          Projects
        </Title>

        <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
          {projects.map((project) => (
            <Card
              key={project.title}
              shadow="sm"
              padding="lg"
              className="bg-[#1f1f21]"
            >
              <Card.Section>
                <Image src={project.image} height={160} alt={project.title} />
              </Card.Section>

              <Text mt={16} fw={600} fz={20} c="white">
                {project.title}
              </Text>
              <Text size="sm" mt={8} c="#99a1af">
                {project.description}
              </Text>

              <Group gap="xs" wrap="wrap" mt={16}>
                {project.tech.map((tech) => (
                  <Badge key={tech} color="blue" variant="light">
                    {tech}
                  </Badge>
                ))}
              </Group>

              <Group gap="xs" mt={24}>
                <Button
                  component="a"
                  href={project.live}
                  target="_blank"
                  size="xs"
                  leftSection={<Link size={16} />}
                >
                  Live
                </Button>
                <Button
                  component="a"
                  href={project.github}
                  target="_blank"
                  size="xs"
                  variant="outline"
                  leftSection={<HuobiToken size={16} />}
                >
                  GitHub
                </Button>
              </Group>
            </Card>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
