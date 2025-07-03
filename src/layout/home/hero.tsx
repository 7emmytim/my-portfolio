import { Button, Title, Text, Grid, Image } from "@mantine/core";
import { Container } from "./container";

export function Hero() {
  return (
    <section className="bg-[#19191B] text-white py-20">
      <Container>
        <Grid align="center">
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Title order={1} className="text-4xl md:text-5xl font-bold" mb={24}>
              Build Your Awesome Platform
            </Title>
            <Text className="text-gray-400" mb={24}>
              I have a digital studio that offers several services such as UI/UX
              Design to development. We will provide the best service for those
              who use our services.
            </Text>
            <Button color="indigo" radius="md">
              Our Services →
            </Button>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6 }} className="flex justify-center">
            <Image
              src="/images/person-hero.png"
              alt="Hero"
              className="w-full max-w-xs"
              radius="md"
            />
          </Grid.Col>
        </Grid>
      </Container>
    </section>
  );
}
