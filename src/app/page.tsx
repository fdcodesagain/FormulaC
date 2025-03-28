"use client";

import CliqueCard from "@/components/CliqueCard";
import { Avatar, Badge, Box, Button, Card, Checkbox, Container, Divider, Flex, Grid, GridCol, Rating, SimpleGrid, Stack, Text, Title } from "@mantine/core";
import { IconAsterisk, IconBolt, IconBoltFilled, IconBookmark, IconCampfire, IconLocation, IconLock, IconLockOpen, IconMapPin, IconSkull, IconStar, IconUrgent, IconUserPlus, IconUsers } from "@tabler/icons-react";
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

export const cliques = [
  {
    id: 1,
    name: "Coil",
    location: "Baku, Azerbaijan",
    pp: "https://example.com/avatar.jpg",
    members: 4,
    status: "Looking for new members",
    needs: [
      { title: "House", price: 2000, urgency: 4.5 },
      { title: "Car", price: 500, urgency: 1 },
      { title: "Monthly Contribution $50", price: 100, urgency: 4 },
    ],
    values: [
      { value: "Anti-natalism", required: true },
      { value: "Very progressive", required: true },
      { value: "Non-romantic", required: true },
      { value: "Communist", required: false },
      { value: "Artist", required: false },
      { value: "Gamer", required: false },
    ],
  },
  {
    id: 2,
    name: "The Nomads",
    location: "Marrakech, Morocco",
    pp: "https://example.com/nomads.jpg",
    members: 8,
    status: "Open to travelers",
    needs: [
      { title: "Tents", price: 300, urgency: 3 },
      { title: "Solar Panels", price: 800, urgency: 4 },
      { title: "Water Filters", price: 150, urgency: 5 },
    ],
    values: [
      { value: "Minimalism", required: true },
      { value: "Sustainability", required: true },
      { value: "Adventure", required: false },
      { value: "Yoga", required: false },
      { value: "Meditation", required: false },
    ],
  },
  {
    id: 3,
    name: "Tech Haven",
    location: "San Francisco, USA",
    pp: "https://example.com/techhaven.jpg",
    members: 12,
    status: "Invite only",
    needs: [
      { title: "Office Space", price: 5000, urgency: 4 },
      { title: "High-end PCs", price: 2000, urgency: 3 },
      { title: "Monthly Contribution $200", price: 200, urgency: 5 },
    ],
    values: [
      { value: "Innovation", required: true },
      { value: "Open Source", required: true },
      { value: "AI Ethics", required: false },
      { value: "Blockchain", required: false },
      { value: "Startup Culture", required: false },
    ],
  },
];

export default function Home() {
  const clique = cliques[0];

  const viewer = {
    hasHouse: true,
    hasCar: false,
    canContribute: 150,
    values: ["Anti-natalism", "Very progressive", "Non-romantic", "Artist"],
  };

  return (
    <Container size={1600} px={"md"} py={"md"}>
      <Flex gap={"md"}>
        <Flex w={"33%"}>
          <CliqueCard clique={clique} />
        </Flex>

        <Flex w={"66%"}>
          <Stack gap={"md"} w={"100%"}>
            <Card p={"xs"}>
              <Stack gap="md">
                {/* Required Values Section */}
                <Title fw={100} order={1} lh={0.5} c="var(--c5)" className={genos.className}>
                  Values
                </Title>
                <Box mt={"xs"}>
                  <Flex align={"center"} justify={"space-between"}>
                    <Title fw={100} order={4} lh={0.5} c="var(--c5)">
                      Required
                    </Title>
                    <Title order={4} lh={0.5} c={clique.values.filter((value) => value.required).every((value) => viewer.values.includes(value.value)) ? "var(--c6)" : "var(--c5)"}>
                      {clique.values.filter((value) => value.required).filter((value) => viewer.values.includes(value.value)).length}/{clique.values.filter((value) => value.required).length}
                    </Title>
                  </Flex>
                  <Flex gap={"md"} mt="sm">
                    {clique.values
                      .filter((value) => value.required)
                      .map((value, index) => (
                        <Badge
                          radius={"md"}
                          fw={400}
                          fz={"md"}
                          c={viewer.values.includes(value.value) ? "var(--c1)" : "var(--c5)"}
                          size="xl"
                          key={index}
                          color={viewer.values.includes(value.value) ? "var(--c6)" : "var(--c3)"}
                          style={{
                            border: "1px solid var(--c5)",
                          }}
                        >
                          {value.value}
                        </Badge>
                      ))}
                  </Flex>
                </Box>

                {/* Good to Have Values Section */}
                <Box>
                  <Flex align={"center"} justify={"space-between"}>
                    <Title fw={100} order={4} lh={0.5} c="var(--c5)">
                      Good to Have
                    </Title>
                    <Title order={4} lh={0.5} c="var(--c5)">
                      {clique.values.filter((value) => !value.required).filter((value) => viewer.values.includes(value.value)).length}/{clique.values.filter((value) => !value.required).length}
                    </Title>
                  </Flex>
                  <Flex gap={"md"} mt="sm">
                    {clique.values
                      .filter((value) => !value.required)
                      .map((value, index) => (
                        <Badge
                          radius={"md"}
                          fw={400}
                          fz={"md"}
                          c={viewer.values.includes(value.value) ? "var(--c1)" : "var(--c5)"}
                          size="xl"
                          key={index}
                          color={viewer.values.includes(value.value) ? "var(--c6)" : "var(--c3)"}
                          style={{
                            border: "1px solid var(--c2)",
                          }}
                        >
                          {value.value}
                        </Badge>
                      ))}
                  </Flex>
                </Box>
              </Stack>
            </Card>

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
          </Stack>
        </Flex>
      </Flex>
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
