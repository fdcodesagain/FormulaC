import { Container, Group, Text, Anchor } from "@mantine/core";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      id="contact"
      style={{
        backgroundColor: "#000",
        color: "white",
        padding: "2rem 0",
        marginTop: "2rem",
      }}
    >
      <Container size="xl">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "column",
            gap: "1rem",
            textAlign: "center",
          }}
        >
          <Link href={"/"}>
            <Text fw={900} size="1.5rem" c={"red.8"}>
              haravar
            </Text>
          </Link>

          <Group>
            <Anchor href="#" c="white" underline="hover">
              Haqqımızda
            </Anchor>
            <Anchor href="#" c="white" underline="hover">
              Əlaqə
            </Anchor>
            <Anchor href="#" c="white" underline="hover">
              Gizlilik Siyasəti
            </Anchor>
            <Anchor href="#" c="white" underline="hover">
              Qaydalar və Şərtlər
            </Anchor>
          </Group>

          <Text size="sm" c="gray.4">
            © {new Date().getFullYear()} haravar. All rights reserved.
          </Text>
        </div>
      </Container>
    </footer>
  );
}
