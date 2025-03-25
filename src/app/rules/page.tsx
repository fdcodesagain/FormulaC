import { Rules } from "@/components/List";
import { Box, Container, Text } from "@mantine/core";

function page() {
  return (
    <Container size={1600}>
      <Box py={"4rem"}>
        <Text ta={"center"} size="3rem" fw={700} c="white" mb="sm">
          The Rules of the Game
        </Text>
        <Text ta={"center"} size="xl" c="white" maw={800} mx="auto">
          A comprehensive guide to navigating life, relationships, and personal growth. These principles shape our community and guide our decisions.
        </Text>
      </Box>
      <Text size="xl">Rules</Text>
      <Rules />
    </Container>
  );
}
export default page;
