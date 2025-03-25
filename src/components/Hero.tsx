"use client";

import { useState, useRef } from "react";
import { Title, Text, Button, Group, Container, BackgroundImage, Flex } from "@mantine/core";
import { motion } from "framer-motion";
import { Coffee, GamepadIcon, Utensils, GlassWater } from "lucide-react";
import ListBusinessModal from "./ListBusinessModal";

// const floatingIcons = [
//   { icon: <Coffee size={24} />, size: 60, initialX: "10%", initialY: "20%" },
//   { icon: <GamepadIcon size={24} />, size: 50, initialX: "80%", initialY: "15%" },
//   { icon: <Utensils size={24} />, size: 55, initialX: "25%", initialY: "70%" },
//   { icon: <GlassWater size={24} />, size: 45, initialX: "70%", initialY: "60%" },
//   { icon: <Coffee size={24} />, size: 40, initialX: "40%", initialY: "30%" },
//   { icon: <Utensils size={24} />, size: 50, initialX: "60%", initialY: "80%" },
// ];

export default function Hero() {
  const [modalOpened, setModalOpened] = useState(false);
  const featuredPlacesRef = useRef<HTMLDivElement>(null);

  const scrollToFeaturedPlaces = () => {
    featuredPlacesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="hero-section" id="home">
        <BackgroundImage w={{ base: "95%", md: "97.5%", lg: "100%" }} my={{ base: "xl", md: "0" }} mx={"auto"} radius={"xl"} src="https://images.unsplash.com/photo-1608315172253-d6d45356d03a?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
          <Container size="xl" py={"10rem"} px={0}>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <Title lh={{ base: 1, md: 1.5 }} size={"3.5rem"} c={"gray.0"} order={1} fw={900} mb={{ base: "2rem", md: "1rem" }} ta={"center"} style={{ textShadow: "2px 2px 1px var(--mantine-color-red-9)" }}>
                Getməyə yer tapmırsız?
              </Title>

              <Text
                size="1.33rem"
                c={"gray.0"}
                mx={"auto"}
                mb={{ base: "2rem", md: "1rem" }}
                maw={{ base: "320px", md: "800px" }}
                ta={"center"}
                style={{
                  textShadow: "1px 1px 1px var(--mantine-color-red-9)",
                }}
              >
                Bakının ən yaxşı yerlərini kəşf edin. Təsadüfi tövsiyələr, ən yaxşı seçimlər və yeni gizli incilər!
              </Text>

              <Flex direction={{ base: "column", md: "row" }} align={"center"} justify="center" gap="md">
                <motion.div whileHover={{ scale: 1.025 }} whileTap={{ scale: 0.95 }}>
                  <Button w={{ base: "200px", md: "160px" }} size="lg" onClick={scrollToFeaturedPlaces} fw={800} bg={"red.8"}>
                    Hara var?
                  </Button>
                </motion.div>

                <motion.div whileHover={{ scale: 1.025 }} whileTap={{ scale: 0.95 }}>
                  <Button c={"dark.9"} fw={800} w={{ base: "200px", md: "248px" }} size="lg" variant="white" onClick={() => setModalOpened(true)}>
                    Mənə yaxın məkanlar
                  </Button>
                </motion.div>
              </Flex>
            </motion.div>
          </Container>
        </BackgroundImage>
      </div>

      <div ref={featuredPlacesRef} />
      <ListBusinessModal opened={modalOpened} onClose={() => setModalOpened(false)} />
      {/* {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            className="floating-icon"
            style={{
              width: item.size,
              height: item.size,
              left: item.initialX,
              top: item.initialY,
            }}
            animate={{
              y: [0, 20, 0],
              x: [0, 10, 0],
              rotate: [0, 5, 0, -5, 0],
            }}
            transition={{
              duration: 10 + index,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          >
            {item.icon}
          </motion.div>
        ))} */}
    </>
  );
}
