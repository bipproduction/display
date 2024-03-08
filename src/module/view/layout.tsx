"use client";
import { BackgroundImage, Box, Button, Flex, Group, Text } from "@mantine/core";
import { useShallowEffect } from "@mantine/hooks";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export default function LayoutView({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [active, setActive] = useState("");
  useShallowEffect(() => {
    setActive(pathname);
  });
  const router = useRouter();

  function OnLink() {
    if (active == "/ninox") {
      router.push("/raven");
    } else {
      router.push("/ninox");
    }
  }

  return (
    <>
      <Flex direction={"row"}>
        <BackgroundImage w={"75%"} src="/loading.png">
          <Flex h={"100vh"} direction={"column"}>
            <Group
              justify="flex-end"
              p={10}
              style={{
                position: "absolute",
                justifyItems: "flex-end",
                justifyContent: "flex-end",
                alignContent: "flex-end",
                alignItems: "flex-end",
              }}
            >
              <Box>
                <Button onClick={OnLink}>SWITCH</Button>
              </Box>
            </Group>
            {children}
          </Flex>
        </BackgroundImage>
        <Box w={"25%"} h={"100vh"}>
            <BackgroundImage h={"50vh"} src="/loading.png" >
            <iframe
                src="https://noc.wibudev.com/noc/n1"
                width={"100%"}
                height={"100%"}
              />
            </BackgroundImage>
            <BackgroundImage h={"50vh"} src="/loading.png" >
            <iframe
                src="https://vladmandic.github.io/human/demo/"
                width={"100%"}
                height={"100%"}
              />
            </BackgroundImage>
        </Box>
      </Flex>
    </>
  );
}
