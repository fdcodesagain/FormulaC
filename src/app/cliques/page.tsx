"use client";

import { Card, SimpleGrid, Text, Title, Container, Flex } from "@mantine/core";
import { cliques, genos } from "../page";
import { IconTent } from "@tabler/icons-react";
import Link from "next/link";

function page() {
  return (
    <Container size={1600} py="md">
      <Title mb="h2" c="var(--c5)" className={genos.className}>
        All Cliques
      </Title>
      <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="md">
        {cliques.map((clique) => (
          <Link href={`/cliques/${clique.id}`} key={clique.name}>
            <Card pt={".25rem"} key={clique.name} withBorder>
              <Flex align={"center"} justify={"space-between"}>
                <Title order={1} c="var(--c5)" className={genos.className}>
                  {clique.name}
                </Title>
                <IconTent color="var(--c5)" stroke={1} />
              </Flex>
              <Text c="var(--c4)" mt="sm">
                {clique.location}
              </Text>
              <Text c="var(--c4)" mt="xs">
                Members: {clique.members}
              </Text>
              <Text c="var(--c4)" mt="xs">
                Status: {clique.status}
              </Text>
            </Card>
          </Link>
        ))}
      </SimpleGrid>
    </Container>
  );
}
export default page;
