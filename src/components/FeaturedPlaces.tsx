"use client";

import { Container, Title, Grid, Card, Text, Badge, Image } from "@mantine/core";
import { motion } from "framer-motion";
import { places } from "@/lib/data";

export default function FeaturedPlaces() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="featured-places" id="featured-places">
      <Container size="xl">
        <Title fw={700} ta={"center"} mb={"xl"} size={"h1"} order={2}>
          Featured Places in Baku
        </Title>

        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }}>
          <Grid>
            {places.map((place) => (
              <Grid.Col span={{ base: 12, sm: 6, md: 4 }} key={place.id}>
                <motion.div variants={item} whileHover={{ scale: 1.03 }} transition={{ duration: 0.2 }}>
                  <Card bg={"gray.1"} withBorder padding="lg">
                    <Card.Section>
                      <Image src={place.image} height={200} alt={place.name} />
                    </Card.Section>

                    <Badge color={place.category === "Café" ? "pink.7" : place.category === "Restaurant" ? "blue.7" : place.category === "Bar" ? "violet.7" : "green.7"} variant="light" style={{ marginTop: "1rem" }}>
                      {place.category}
                    </Badge>

                    <Text fw={700} size="lg" mt="md">
                      {place.name}
                    </Text>

                    <Text mih={50} size="sm" c="dimmed" mt="xs">
                      {place.description}
                    </Text>
                  </Card>
                </motion.div>
              </Grid.Col>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </div>
  );
}
