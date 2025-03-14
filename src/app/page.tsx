"use client";

import { Container, Title } from "@mantine/core";
import { AutocompleteInput } from "@/components/AutocompleteInput";

export default function Home() {
  return (
    <Container maw={530}>
      <Title size={"xl"} fw={100} mt={"xl"} mb={"xs"}>
        Formula calculator
      </Title>
      <AutocompleteInput />
    </Container>
  );
}
