"use client";
import { Box, Button, Flex, Group, Text } from "@mantine/core";
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
        <Flex w={"70%"} bg={"red"} h={"100vh"} direction={"column"}>
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
        <Box w={"30%"} bg={"green"} h={"100vh"}>
          <Box>
            <Box h={"50vh"} bg={"blue"}>
              <iframe
                src="https://noc.wibudev.com/noc/n1"
                width={"100%"}
                height={"100%"}
              />
            </Box>
            <Box h={"50vh"} bg={"pink"}>
              <iframe
                src="https://vladmandic.github.io/human/demo/"
                width={"100%"}
                height={"100%"}
              />
            </Box>
          </Box>
        </Box>
      </Flex>
    </>
  );
}
