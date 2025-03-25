"use client";

import { Avatar, Box, Button, Card, Checkbox, Container, Divider, Flex, Grid, GridCol, Rating, SimpleGrid, Stack, Text, Title } from "@mantine/core";
import { IconBolt, IconBoltFilled, IconBookmark, IconCampfire, IconLocation, IconLockOpen, IconMapPin, IconSkull, IconStar, IconUrgent, IconUserPlus, IconUsers } from "@tabler/icons-react";
import { Atomic_Age, Baumans, Genos } from "next/font/google";

export const bubbly = Atomic_Age({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const baum = Baumans({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const genos = Genos({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  const clique = {
    name: "Coil",
    location: "Baku, Azerbaijan",
    pp: "https://example.com/avatar.jpg",
    members: 42,
    status: "Looking for new members",
    needs: [
      { title: "House", price: 2000, urgency: 4.5 },
      { title: "Car", price: 500, urgency: 1 },
      { title: "Monthly Contribution", price: 100, urgency: 4 },
    ],
    values: ["Honesty", "Loyalty", "Community", "Growth"],
  };

  const viewer = {
    hasHouse: true,
    hasCar: false,
    canContribute: 150,
    values: ["Honesty", "Community", "Growth"],
  };

  return (
    <Container size={1600} w={"100%"} px={"1.5rem"} mt={"xs"}>
      <Grid>
        <GridCol span={4}>
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
                <Flex gap={"xs"} c={"var(--c5)"}>
                  <IconMapPin stroke={1} color="var(--c5)" />
                  <Text size="md" mb={4}>
                    {clique.location}
                  </Text>
                </Flex>
                <Flex gap={"xs"} c={"var(--c5)"}>
                  <IconUsers stroke={1} color="var(--c5)" />
                  <Text size="md" mb={4}>
                    Members: {clique.members}
                  </Text>
                </Flex>
                <Flex gap={"xs"} c={"var(--c5)"}>
                  <IconLockOpen stroke={1} color="var(--mantine-color-cyan-5)" />
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
                This is a vibrant community of {clique.members} members located in {clique.location}. We value {clique.values.join(", ")} and are currently {clique.status.toLowerCase()}. Our members contribute to the community in various ways, from sharing resources to organizing events.
              </Text>
            </Flex>
            <Flex gap="sm" mt="lg">
              <Button fullWidth variant="filled" color="var(--c3)" radius="md" leftSection={<IconUserPlus size={18} />}>
                Join Clique
              </Button>
              <Button variant="outline" color="var(--c3)" radius="md">
                <IconBookmark size={30} />
              </Button>
            </Flex>
          </Card>
        </GridCol>
        <GridCol span={8}>
          <Stack gap={"md"}>
            <Card p={"xs"}>
              <Title fw={100} order={1} lh={0.5} mb="md" c="var(--c5)" className={genos.className}>
                Needs
              </Title>
              {clique.needs.map((need, index) => (
                <Box key={index}>
                  <Flex justify="space-between" align="center">
                    <Text c={"var(--c5)"} fw={500}>
                      {need.title}
                    </Text>
                    {/* <Text c={"var(--c5)"} fw={500}>
                      ${need.price}
                    </Text> */}
                    <Rating
                      value={need.urgency}
                      count={5}
                      fractions={2}
                      readOnly
                      size="sm"
                      color="var(--c5)"
                      fullSymbol={<IconBoltFilled color="var(--c5)" />}
                      emptySymbol={<IconBolt color="var(--c4)" />}
                      // emptyColor="var(--c4)"
                    >
                      <IconSkull />
                    </Rating>
                  </Flex>
                </Box>
              ))}
            </Card>

            <Card p={"xs"}>
              <Title fw={100} order={1} lh={0.5} mb="md" c="var(--c5)" className={genos.className}>
                Values
              </Title>
              <Flex gap={"lg"}>
                {clique.values.map((value, index) => (
                  <Flex key={index} align="center" gap="sm">
                    <Checkbox radius={"sm"} checked={viewer.values.includes(value)} readOnly color="var(--c3)" size="md" />
                    <Text c={"var(--c5)"} fw={500}>
                      {value}
                    </Text>
                  </Flex>
                ))}
              </Flex>
            </Card>
          </Stack>
        </GridCol>
      </Grid>
      {/* <Title
        bg={"var(--c2)"}
        className={genos.className}
        lh={1}
        tt={"uppercase"}
        ta={"center"}
        c={"var(--c5)"}
        style={{
          fontSize: "clamp(3rem, 15vw, 100px)",
          borderRadius: "var(--mantine-radius-lg)",
        }}
      >
        Apes strong together
      </Title> */}
    </Container>
  );
}

// "use client";

// import { Container, Text, NumberFormatter, Box, Image, Flex, Progress } from "@mantine/core";
// import { IconFlame } from "@tabler/icons-react";
// import { useEffect, useState } from "react";

// export default function Home() {
//   const [totalSeconds, setTotalSeconds] = useState(0); // 12 hours in seconds (12 * 3600)

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTotalSeconds((prev) => prev + 100); // Add 100 seconds every second
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   const currentSeconds = totalSeconds % 86400; // Wrap around at 24 hours
//   const progressPercentage = (currentSeconds / 86400) * 100;
//   const hours = Math.floor(currentSeconds / 3600);
//   const minutes = Math.floor((currentSeconds % 3600) / 60);
//   const seconds = currentSeconds % 60;

//   return (
//     <Container p={"sm"} size={"100%"} pos={"relative"}>
//       <Box style={{ flex: 1 }}>
//         <Flex justify={"space-between"} align={"center"}>
//           <Text fw={100} size={"xl"} pb={"xs"} lh={1} mt={"-.25rem"}>
//             Day: <NumberFormatter value={365 * 29} thousandSeparator />
//             <Text span lh={0} ml={".25rem"}>
//               <IconFlame style={{ marginBottom: "-.25rem" }} color="var(--mantine-color-orange-6)" />
//             </Text>
//           </Text>
//           <Text size="sm" mb="xs">
//             {`${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`}
//           </Text>
//         </Flex>
//         <Progress color="gray" value={progressPercentage} size="lg" mb="md" />
//       </Box>

//       <Flex>Money: $5</Flex>

//       <Image pos={"absolute"} top={"0%"} pt={"xs"} right={"0"} w={200} h={300} style={{ transform: "scaleX(-1)" }} src={"https://i.redd.it/snoovatar/avatars/c6f8c0ab-4ef1-49c5-8409-16b328a62ec6.png"} />
//     </Container>
//   );
// }

{
  /* <Text size="xl" fw={100} lh={1}>
          $30
        </Text> */
}
{
  /* <Text>What u want from life?</Text>
        <Flex wrap={"wrap"} gap={".25rem"} maw={"60%"} pb={"xs"}>
          <Badge color="white" c={"dark"}>
            Tranquility
          </Badge>
          <Badge>Chaos</Badge>
          <Badge color="pink">Love</Badge>
        </Flex> */
}

{
  /* <Text>What u want from life?</Text>
        <Flex wrap={"wrap"} gap={".25rem"} maw={"60%"}>
          <Badge color="white" c={"dark"}>
            Tranquility
          </Badge>
          <Badge>Chaos</Badge>
          <Badge color="pink">Love</Badge>
        </Flex> */
}
{
  /* <Text size="xl" pb={"xs"} fw={100} lh={1}>
          Wealth: $0
        </Text>
        <Text size="xl" pb={"xs"} fw={100} lh={1}>
          Allience: 3
        </Text>
        <Text size="xl" pb={"xs"} fw={100} lh={1}>
          Culture: Coil
        </Text>
        <Text size="xl" pb={"xs"} fw={100} lh={1}>
          Title: Engineer
        </Text>
        <Text size="xl" pb={"xs"} fw={100} lh={1}>
          Health: Good
        </Text>
        <Text size="xl" pb={"xs"} fw={100} lh={1}>
          Happiness: Good
        </Text> */
}
{
  /* <Switch mt={"xs"} size="md" checked={is24HourFormat} onChange={(event) => setIs24HourFormat(event.currentTarget.checked)} /> */
}
