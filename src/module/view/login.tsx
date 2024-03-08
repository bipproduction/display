"use client";
import {
  BackgroundImage,
  Box,
  Button,
  Flex,
  Group,
  PasswordInput,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import React, { useState } from "react";
import { LuShieldCheck } from "react-icons/lu";
import { useFocusTrap } from "@mantine/hooks";
import { useRouter } from "next/navigation";

export default function ViewLogin() {
  const focusTrapRef = useFocusTrap();
  const router = useRouter()
  return (
    <>
      <BackgroundImage src="" style={{backgroundColor: "#030637"}} h={"100vh"} pos={"fixed"}>
        <Flex
          justify={"center"}
          align={"center"}
          style={{
            height: "100vh",
          }}
        >
          <Box
            style={{
              backgroundColor: "#3C0753",
              border: `2px solid ${"#3C0753"}`,
              padding: 30,
              borderRadius: 10,
            }}
            w={{ base: 300, sm: 400 }}
            ref={focusTrapRef}
          >
            <Box>
              <Text fw={"bold"} fz={30} c={"white"}>
                EXISTING MEMBER
              </Text>
              <Text fz={20} c={"white"}>
                Welcome Back!
              </Text>
            </Box>
            <Stack pt={25}>
              <TextInput
                label={
                  <Text fz={14} c={"white"}>
                    Email
                  </Text>
                }
              />
              <PasswordInput
                label={
                  <Text fz={14} c={"white"}>
                    Password
                  </Text>
                }
              />
              <Group pt={10} justify="space-between">
                <Group>
                  <LuShieldCheck size={20} color={"white"} />
                  <Text c={"white"}>Secure Access</Text>
                </Group>
                <Group>
                  <LuShieldCheck size={20} color={"white"} />
                  <Text c={"white"}>Secure Access</Text>
                </Group>
              </Group>
              <Button
                mt={10}
                mb={10}
                fullWidth
                bg={"white"}
                c={"#005B41"}
                onClick={() => {
                  router.push("/display-1")
                }}
              >
                Login
              </Button>
            </Stack>
          </Box>
        </Flex>
      </BackgroundImage>
    </>
  );
}
