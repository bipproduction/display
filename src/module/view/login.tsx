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
import toast from "react-simple-toasts";
import funLogin from "../fun/fun_login";

export default function ViewLogin() {
  const focusTrapRef = useFocusTrap();
  const router = useRouter();

  const [isUsername, setUsername] = useState("");
  const [isPassword, setPassword] = useState("");

  async function onLogin() {
    if (isUsername == "" || isPassword == "")
      return toast("Please fill in completely", { theme: "dark" });

    const cek = await funLogin({ username: isUsername, password: isPassword });
    if (!cek) return toast("Wrong username or password!", { theme: "dark" });

    router.push("/display-1");
  }

  return (
    <>
      <BackgroundImage
        src=""
        style={{ backgroundColor: "#030637" }}
        h={"100vh"}
        pos={"fixed"}
      >
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
                    Username
                  </Text>
                }
                onChange={(val) => {
                  setUsername(val.target.value);
                }}
              />
              <PasswordInput
                label={
                  <Text fz={14} c={"white"}>
                    Password
                  </Text>
                }
                onChange={(val) => {
                  setPassword(val.target.value);
                }}
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
                  onLogin();
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
