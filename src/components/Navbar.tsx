"use client";

import { baum, bubbly, genos } from "@/app/page";
import { Box, Button, Flex, Text, Burger, Drawer, Stack, useMantineTheme, Divider, Title, TextInput, Kbd, Avatar, Menu, Card, MenuTarget, MenuDropdown, MenuItem, ThemeIcon } from "@mantine/core";
import { IconCampfire, IconCampfireFilled, IconChevronDown, IconSearch, IconSkull, IconTent, IconX } from "@tabler/icons-react";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
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
    <Box maw={1600} mx={"auto"} p={"md"} pl={0}>
      <Flex gap={"sm"} justify={"space-between"} align={"center"}>
        <Flex m={".1rem"} pl={"sm"} gap={"sm"} w={"100%"}>
          <Burger display={{ base: "block", sm: "none" }} opened={opened} onClick={() => setOpened((o) => !o)} title={title} color={"var(--c5)"} />

          <Link href={"/"} tabIndex={1}>
            <Stack gap={0} align="start">
              <Text lh={0.75} className={genos.className} fz={"h2"} p={0} c="var(--c5)" fw={100} tt={"uppercase"}>
                Tribestar
              </Text>
              <Text className={genos.className} ml={".125rem"} size="lg" lh={1} c={"var(--c4)"}>
                Find your friends
              </Text>
            </Stack>
          </Link>

          <TextInput
            miw={350}
            // maw={350}
            rightSection={
              <Flex ml={"-3rem"}>
                <Kbd>Ctrl</Kbd> + <Kbd>K</Kbd>
              </Flex>
            }
            radius={"md"}
            placeholder="Search for tribes and people.."
            leftSection={<IconSearch size={22} />}
            styles={{ input: {}, section: { color: "var(--c4)" }, root: { zIndex: 10000 } }}
          />
        </Flex>

        <Flex gap={"sm"} w={"100%"} justify={"end"}>
          <Button
            component={Link}
            href="/cliques"
            pl={"xs"}
            pr={"md"}
            py={"0"}
            h={40}
            variant="outline"
            c="var(--c5)"
            color="dark.6"
            radius="md"
            leftSection={
              <ThemeIcon h={38} w={20} variant="transparent">
                <IconTent stroke={1} color={"var(--c5)"} />
              </ThemeIcon>
            }
          >
            Cliques
          </Button>

          <Menu trigger="click-hover" position="bottom-end">
            <MenuTarget>
              <Card pl={0} pr={"xs"} py={"0"} withBorder>
                <Flex gap={"sm"} align={"center"} style={{ cursor: "pointer" }}>
                  <Avatar radius={"md"} bg={"var(--c1)"}>
                    <IconSkull stroke={1} color={"var(--c5)"} />
                  </Avatar>
                  <Text c={"var(--c5)"}>Livbi Kuzkatz</Text>
                  <IconChevronDown size={16} color="var(--c5)" />
                </Flex>
              </Card>
            </MenuTarget>

            <MenuDropdown miw={"10rem"}>
              <MenuItem component={Link} href="/profile">
                Profile
              </MenuItem>
              <MenuItem component={Link} href="/settings">
                Settings
              </MenuItem>
              <MenuItem component={Link} href="/logout" color="red">
                Log Out
              </MenuItem>
            </MenuDropdown>
          </Menu>

          {/* {navLinks.map((link) => (
            <Button fz={"lg"} key={link.label} p={0} color="var(--c5)" variant="transparent" component={Link} href={link.href} fw={100}>
              {link.label}
            </Button>
          ))}
          <Button className={genos.className} fw={900} visibleFrom="md" c={"var(--c6)"} fz={"xl"} color="var(--c5)" radius={0}>
            Register
          </Button>
          <Button className={genos.className} fw={900} c={"var(--c5)"} autoContrast variant={"filled"} fz={"xl"} color="var(--c6)" style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0, borderTopRightRadius: "var(--mantine-radius-xl)", borderBottomRightRadius: "var(--mantine-radius-xl)" }}>
            Log In
          </Button> */}
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
            <Button radius={0} key={link.label} p={0} color="var(--c5)" variant="light" component={Link} href={link.href} fz="xl" fw={100} onClick={() => setOpened(false)}>
              {link.label}
            </Button>
          ))}
          <Divider color="var(--c2)" label="Authentication" styles={{ label: { color: "var(--c4)" } }} />
          <Flex gap={"md"} direction={"column"}>
            <Button className={genos.className} c={"var(--c1)"} fz={"md"} color="var(--c5)">
              Register
            </Button>
            <Button className={genos.className} autoContrast fz={"md"} color="var(--c6)">
              Log In
            </Button>
          </Flex>
        </Stack>
      </Drawer>
    </Box>
  );
}
