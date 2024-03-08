"use client";
import { Box, Flex, Grid, GridCol, SimpleGrid, Text } from "@mantine/core";
import React from "react";

export default function Display1() {
  return (
    <>
      {/* <Flex direction={'row'} >
      <Flex w={"70%"} bg={"red"} h={"100vh"}>
sdsds
      </Flex>
      <Flex w={"30%"} bg={"blue"} h={"100vh"}>
        <Flex direction={"column"} bg={"green"} h={"50%"} w={"100%"}>
        </Flex>
        <Flex direction={"column"} bg={"green"} h={"50%"} w={"100%"}>
        </Flex>
      </Flex>
    </Flex> */}
      <Grid>
        <Grid.Col span={{ base: 12, md: 8, lg: 8 }}>
          <Box h={"100vh"} bg={"blue"}></Box>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
          <SimpleGrid
            cols={{ base: 1, sm: 1, lg: 1 }}
          >
            <Box bg={"red"} h={"50vh"}>

            </Box>
            <Box bg={"red"} h={"49vh"}>

            </Box>

          </SimpleGrid>
        </Grid.Col>
      </Grid>
    </>
  );
}
