import { Title, SimpleGrid, Card, Text, Box } from "@mantine/core";
import { Code, ColorSwatch, Mobile } from "iconsax-react";
import { Container } from "./container";

const services = [
  {
    title: "Web Development",
    icon: <Code color="gray" size={32} />,
    description:
      "Responsive and scalable websites using modern frameworks like Next.js and React.",
  },
  {
    title: "UI/UX Design",
    icon: <ColorSwatch color="gray" size={32} />,
    description:
      "Designing clean and functional interfaces with Figma and Tailwind.",
  },
  {
    title: "Mobile-Friendly",
    icon: <Mobile color="gray" size={32} />,
    description:
      "Ensuring all experiences work seamlessly across mobile, tablet, and desktop.",
  },
];

export function Services() {
  return (
    <Box bg="#19191B" py={80} c="white">
      <Container>
        <Title order={2} className="text-3xl" mb={40} ta="center" fw={700}>
          The Services We Provide For You
        </Title>
        <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
          {services.map((service) => (
            <Card key={service.title} shadow="sm" bg="#1f1f21">
              <div className="mb-4">{service.icon}</div>
              <Text inherit c="white" className="text-xl font-semibold " mb={8}>
                {service.title}
              </Text>
              <Text c="#99a1af">{service.description}</Text>
            </Card>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
