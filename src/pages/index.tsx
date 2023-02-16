import Head from 'next/head'
import React from "react";

import { Button, Link, Card, Badge, Avatar, Input, Spacer, Radio, useTheme, Container, Row, Col, Grid } from "@nextui-org/react";
import { SimpleGrid, Center, TimelineItem, Title, Text } from '@mantine/core';
import CardContent from '@mui/material/CardContent'
import Navbar from '../Components/navbar'

export default function Home() {

  const theme = {
    global: {
      font: {
        family: 'Roboto',
        size: '18px',
        height: '20px',
      },
    },
  };

  const statCard = {
    backgroundColor: 'white'
  };


  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Audiowide"
          rel="stylesheet"
        />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Orbitron&display=swap" rel="stylesheet"></link>
      </Head>
    <Container>
    <Spacer></Spacer>
      <Center>
        <Title order={3} size="h1">
            Decentral Games
        </Title>
        </Center>
        <Center>
        <Title size="h4">ICE Supply Statistics</Title>
        </Center>
    </Container>
    <Container md>
     <Spacer></Spacer>
     <SimpleGrid
          cols={2}
          spacing={20}
          breakpoints={[{ maxWidth: 550, cols: 1, spacing: 20 }]}
          style={{ marginTop: 30 }}
          >
      <div>
        <Card style={statCard} isHoverable >
              <CardContent>
                <Center>
                <iframe src='https://dune.com/embeds/2006249/3319814'width="100%" height="460" style={{borderRadius: '20px', background: '#FFFFFF'}}></iframe>
                </Center>
              </CardContent>
        </Card>
      </div>
      <div>
      <Card style={statCard} isHoverable >
              <CardContent>
                <Center>
                <iframe src='https://dune.com/embeds/2006249/3319918'  width="100%" height="200"style={{borderRadius: '20px', background: '#FFFFFF'}}></iframe>
                </Center>
              </CardContent>
        </Card>
        <Spacer></Spacer>
        <Card style={statCard} isHoverable >
              <CardContent>
                <Center>
                <iframe src='https://dune.com/embeds/2006249/3326219'  width="100%" height="200"style={{borderRadius: '20px', background: '#FFFFFF'}}></iframe>
                </Center>
              </CardContent>
        </Card>
      </div>
    </SimpleGrid>
    <Spacer></Spacer>
    <Spacer></Spacer>
    </Container>
    </>
  )
}
