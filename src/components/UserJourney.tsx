"use client";

import { Container, Title, Grid, Card, Text, rem } from "@mantine/core";
import { motion } from "framer-motion";
import { Search, Map, Sparkles } from "lucide-react";

const steps = [
  {
    title: "Browse categories or get a random suggestion",
    description: "Find exactly what you're looking for or discover something new with our random suggestion feature.",
    icon: <Search size={32} />,
  },
  {
    title: "See details, ratings, and user reviews",
    description: "Get all the information you need to make the right choice, including photos, ratings, and authentic user reviews.",
    icon: <Map size={32} />,
  },
  {
    title: "Go have fun!",
    description: "Visit the place, enjoy your time, and share your experience with others in the community.",
    icon: <Sparkles size={32} />,
  },
];

export default function UserJourney() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="user-journey" id="how-it-works">
      <Container size="xl">
        <Title
          order={2}
          c={"gray.5"}
          style={{
            fontSize: rem(36),
            fontWeight: 700,
            marginBottom: rem(50),
            textAlign: "center",
          }}
        >
          How It Works
        </Title>

        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
          <Grid>
            {steps.map((step, index) => (
              <Grid.Col span={{ base: 12, md: 4 }} key={index}>
                <motion.div variants={item}>
                  <Card
                    padding="xl"
                    radius="md"
                    withBorder
                    mih={340}
                    bg={"transparent"}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      textAlign: "center",
                      // boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
                    }}
                  >
                    <div
                      style={{
                        width: 70,
                        height: 70,
                        borderRadius: "50%",
                        backgroundColor: "var(--accent-color)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: rem(20),
                        color: "var(--text-color)",
                      }}
                    >
                      {step.icon}
                    </div>

                    <Text fw={600} size="xl" style={{ marginBottom: rem(12) }}>
                      Step {index + 1}: {step.title}
                    </Text>

                    <Text size="md" c="dimmed">
                      {step.description}
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
