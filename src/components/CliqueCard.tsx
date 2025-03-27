import { genos } from "@/app/page";
import { Avatar, Button, Card, Divider, Flex, Stack, Text, ThemeIcon, Title } from "@mantine/core";
import { IconBookmark, IconCampfire, IconLockOpen, IconMapPin, IconUsers, IconUsersPlus } from "@tabler/icons-react";
interface CliqueProps {
  name: string;
  location: string;
  pp: string;
  members: number;
  status: string;
  needs: { title: string; price: number; urgency: number }[];
  values: { value: string; required: boolean }[];
}

function CliqueCard({ clique }: { clique: CliqueProps }) {
  return (
    <Card>
      <Flex gap="lg">
        <Avatar
          // src={clique.pp}
          alt="Clique"
          size={120}
          radius="lg"
          bg={"var(--c1)"}
          style={{
            filter: "none",
            border: "1px solid var(--c4)",
          }}
        >
          <IconCampfire size={50} stroke={1} color="var(--c4)" />
        </Avatar>
        <Stack gap={0} mt={"-.5rem"}>
          <Title fw={900} size={"h1"} tt={"uppercase"} c="var(--c5)" className={genos.className}>
            {clique.name}
          </Title>
          <Flex gap={"xs"} c={"var(--c5)"} align={"center"}>
            <IconMapPin stroke={1} size={20} color="var(--c5)" />
            <Text size="md" mb={4}>
              {clique.location}
            </Text>
          </Flex>
          <Flex gap={"xs"} c={"var(--c5)"} align={"center"}>
            <IconUsers stroke={1} size={20} color="var(--c5)" />
            <Text size="md" mb={4}>
              Members: {clique.members}
            </Text>
          </Flex>
          <Flex gap={"xs"} c={"var(--c5)"} align={"center"}>
            <IconLockOpen stroke={1} size={20} color="var(--mantine-color-cyan-5)" />
            <Text c={"var(--mantine-color-cyan-5)"} size="md">
              {clique.status}
            </Text>
          </Flex>
        </Stack>
      </Flex>
      <Divider mt={"lg"} />
      <Flex direction="column" gap="sm" mt="lg">
        <Title lh={0.5} order={3} fw={600} c="var(--c5)" className={genos.className}>
          About
        </Title>
        <Text c="var(--c5)" size="sm">
          This is a vibrant community of {clique.members} members located in {clique.location}. We value {clique.values.map((v) => v.value).join(", ")} and are currently {clique.status.toLowerCase()}. Our members contribute to the community in various ways, from sharing resources to organizing events.
        </Text>
      </Flex>
      <Flex gap="sm" mt="lg">
        <Button fullWidth variant="filled" c="var(--c5)" color="var(--c3)" radius="md" leftSection={<IconUsersPlus size={18} />}>
          Join Clique
        </Button>
        <Button variant="outline" color="var(--c4)" radius="md">
          <IconBookmark size={30} />
        </Button>
      </Flex>
    </Card>
  );
}
export default CliqueCard;
