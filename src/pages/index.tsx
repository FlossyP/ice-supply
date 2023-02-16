import Head from 'next/head'
import React from "react";
import { useState } from 'react';
import { Button, Link, Card, Badge, Avatar, Input, Spacer, Radio, useTheme, Container, Row, Col, Grid, Text} from "@nextui-org/react";
import { SimpleGrid, Center, TimelineItem, Title,  } from '@mantine/core';
import CardContent from '@mui/material/CardContent'
import { borderColor } from '@mui/system';

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
    <Container md >
    <Spacer></Spacer>
    <Grid.Container justify='center'>
    <Grid xs={4} md={4}>
    <a href='https://decentral.games/'>
    <Button size={'sm'}>Homepage</Button>
    </a>
    </Grid>
    <Grid xs={4} md={4}>

    </Grid>
    <Grid xs={4} md={4}>
    </Grid>
    </Grid.Container>
    </Container>
    <Container justify='center'>
    <Center>
    <Text h1>
            Decentral Games
     </Text>
     </Center>
    <Center>
     <Text h4>ICE Supply Statistics</Text>
     </Center>
    </Container>
    <Center>
    <Container md justify='center'>
     <Spacer></Spacer>
     <Grid.Container gap={2} justify="center">
     <Grid xs={12} md={6}>
      <Card style={statCard} isHoverable>
              <CardContent>
                <Center>
                <iframe src='https://dune.com/embeds/2006249/3319918'  width="100%" height="200"style={{borderRadius: '20px', background: '#FFFFFF', borderColor: 'transparent'}}></iframe>
                </Center>
              </CardContent>
        </Card>
        <Spacer></Spacer>
        </Grid>
        <Grid xs={12} md={6}>
        <Card style={statCard} isHoverable >
              <CardContent>
                <Center>
                <iframe src='https://dune.com/embeds/2006249/3326219'  width="100%" height="200"style={{borderRadius: '20px', background: '#FFFFFF', borderColor: 'transparent'}}></iframe>
                </Center>
              </CardContent>
        </Card>
        </Grid>
      <Grid xs={12} md={12}>
      <Card style={statCard} isHoverable >
              <CardContent>
                <Center>
                <iframe src='https://dune.com/embeds/2006249/3319814'width="100%" height="460" style={{borderRadius: '20px', background: '#FFFFFF', borderColor: 'transparent'}}></iframe>
                </Center>
              </CardContent>
        </Card>
      </Grid>
    </Grid.Container>
    <Spacer></Spacer>
    <Spacer></Spacer>
    </Container>
    </Center>
    </>
  )
}
