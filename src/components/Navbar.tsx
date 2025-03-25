"use client";

import { baum, bubbly, genos } from "@/app/page";
import { Box, Button, Flex, Text, Burger, Drawer, Stack, useMantineTheme, Divider, Title } from "@mantine/core";
import { IconX } from "@tabler/icons-react";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Apes Strong", href: "/", uppercase: true },
  { label: "Rules", href: "/rules" },
  { label: "Challenges", href: "/" },
  { label: "Intelligence", href: "/" },
  { label: "Find monkey", href: "/" },
  { label: "Clique", href: "/" },
];

export default function Navbar() {
  const [opened, setOpened] = useState(false);
  const title = opened ? "Close navigation" : "Open navigation";

  return (
    <Box maw={1600} mx={"auto"} bg={"var(--c1)"} p={"xs"}>
      <Flex
        gap={"sm"}
        justify={"space-between"}
        align={"center"}
        style={
          {
            // background: "linear-gradient(to right, var(--c6), transparent 75%)",
            // borderRadius: "var(--mantine-radius-xs)",
          }
        }
      >
        <Flex
          m={".1rem"}
          pl={"sm"}
          gap={"sm"}
          w={"100%"}
          style={{
            background: "var(--c1)",
            borderRadius: "var(--mantine-radius-xl)",
          }}
        >
          <Burger display={{ base: "block", sm: "none" }} opened={opened} onClick={() => setOpened((o) => !o)} title={title} color={"var(--c5)"} />

          <Flex display={{ base: "none", sm: "flex" }} gap="sm">
            {navLinks.map((link) => (
              <Button key={link.label} p={0} color="var(--c5)" variant="transparent" component={Link} href={link.href} fz="lg" fw={100} tt={link.uppercase ? "uppercase" : undefined}>
                {link.label}
              </Button>
            ))}
          </Flex>
        </Flex>

        <Flex gap={"sm"}>
          <Button fw={900} visibleFrom="md" c={"var(--c6)"} fz={"md"} color="var(--c5)" radius={0}>
            Register
          </Button>
          <Button fw={900} c={"var(--c5)"} autoContrast variant={"filled"} fz={"md"} color="var(--c6)" style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0, borderTopRightRadius: "var(--mantine-radius-xl)", borderBottomRightRadius: "var(--mantine-radius-xl)" }}>
            Log In
          </Button>
        </Flex>
      </Flex>

      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        withCloseButton={false}
        zIndex={1000000}
        styles={{
          content: {
            background: "#000",
          },
        }}
      >
        <Stack p="0" bg="var(--c1)" h="100%">
          <Flex align={"center"} justify={"space-between"}>
            <Title lh={0} c={"var(--c4)"} className={genos.className}>
              Menu
            </Title>
            <Button mb={"-.33rem"} p={0} radius={"0"} variant="subtle" color="var(--c4)" onClick={() => setOpened(false)}>
              <IconX size={30} stroke={6} />
            </Button>
          </Flex>
          <Divider color="var(--c2)" label="Navigation" styles={{ label: { color: "var(--c4)" } }} />
          {navLinks.map((link) => (
            <Button radius={0} key={link.label} p={0} color="var(--c5)" variant="light" component={Link} href={link.href} fz="xl" fw={100} tt={link.uppercase ? "uppercase" : undefined} onClick={() => setOpened(false)}>
              {link.label}
            </Button>
          ))}
          <Divider color="var(--c2)" label="Authentication" styles={{ label: { color: "var(--c4)" } }} />
          <Flex gap={"md"} direction={"column"}>
            <Button c={"var(--c1)"} fz={"md"} color="var(--c5)">
              Register
            </Button>
            <Button autoContrast fz={"md"} color="var(--c6)">
              Log In
            </Button>
          </Flex>
        </Stack>
      </Drawer>
    </Box>
  );
}
