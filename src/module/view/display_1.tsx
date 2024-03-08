"use client";
import {
  Box,
  Button,
  Flex,
  Grid,
  GridCol,
  Group,
  SimpleGrid,
  Stack,
  Text,
} from "@mantine/core";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function Display1() {
  const [isLink, setLink] = useState("http://localhost/3000");
  const router = useRouter();

  function OnLink() {
    if (isLink == "http://localhost/3000") {
      setLink("http://localhost/3011");
    } else {
      setLink("http://localhost/3000");
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
          {isLink == "http://localhost/3000" && (
            <iframe
              src={"http://localhost/3000"}
              width={"100%"}
              height={"100%"}
            />
          )}

          {isLink == "http://localhost/3011" && (
            <iframe
              src={"http://localhost/3011"}
              width={"100%"}
              height={"100%"}
            />
          )}
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
