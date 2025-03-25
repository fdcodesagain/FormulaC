import { Box, Button, Divider, Flex } from "@mantine/core";
import { useColorScheme, useViewportSize } from "@mantine/hooks";
import { IconBell, IconHome, IconPlus, IconSearch, IconUser } from "@tabler/icons-react";

function Island() {
  const { width } = useViewportSize();
  const isMobile = width < 768;
  const colorx = useColorScheme();
  console.log(colorx);

  return (
    <Box
      pos={"absolute"}
      bottom={"0"}
      style={{
        bottom: 0,
        left: 0,
        right: 0,
      }}
    >
      <Divider hiddenFrom="md" color={colorx === "dark" ? "gray.8" : "gray.5"} />
      <Flex
        justify={"space-between"}
        w={{ md: 400 }}
        mx={"auto"}
        mb={{ md: "xs" }}
        style={{
          borderRadius: "var(--mantine-radius-lg)",
          borderWidth: !isMobile ? "1px" : "0",
          borderStyle: !isMobile ? "solid" : "none",
          borderColor: colorx === "dark" ? "var(--mantine-color-gray-8)" : "var(--mantine-color-gray-5)",
        }}
      >
        <Button w={"100%"} size="md" fz={"sm"} variant={"transparent"}>
          <IconHome />
        </Button>
        <Button w={"100%"} size="md" fz={"sm"} variant={"transparent"}>
          <IconSearch />
        </Button>
        <Button radius={"md"} mt={".2rem"} w={250} size="sm" variant={"filled"} c={"gray.0"} bg={colorx === "dark" ? "gray.8" : "gray.5"}>
          <IconPlus size={20} />
        </Button>
        <Button w={"100%"} size="md" fz={"sm"} variant={"transparent"}>
          <IconBell />
        </Button>
        <Button w={"100%"} size="md" fz={"sm"} variant={"transparent"}>
          <IconUser />
        </Button>
      </Flex>
    </Box>
  );
}
export default Island;
