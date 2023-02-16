import Head from 'next/head'
import Navbar from '@/Components/navbar';
import { Spacer, Center, Heading, Card, Flex, Container } from '@chakra-ui/react';
import { Text, SimpleGrid, Space } from '@mantine/core';

export default function Home() {
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
    <Navbar/>
    <Container maxW='2xl' centerContent>
      <Spacer margin={50}></Spacer>
        <Center>
          <Text
          variant="gradient"
          gradient={{ from: 'indigo', to: 'white', deg: 45 }}
          sx={{ fontFamily: 'Open Sans, sans-serif' }}
          ta="center"
          fz="50px"
          fw={700}
          >
          Decentral Games
          </Text>
        </Center>
        <Center>
          <Text size={15} sx={{ fontFamily: 'Open Sans, sans-serif' }}>$ICE Supply Statistics</Text>
        </Center>
      <SimpleGrid
          cols={2}
          spacing={20}
          breakpoints={[{ maxWidth: 700, cols: 1, spacing: 20 }]}
          style={{ marginTop: 30 }}
          >
      <div>
        <Card padding={2} borderRadius={30} >
        <Center>
          <iframe src='https://dune.com/embeds/2006249/3319814'width="100%" height="427" style={{borderRadius: '20px', background: '#FFFFFF'}}></iframe>
        </Center>
        </Card>
      </div>
      <div>
        <Card padding={2} borderRadius={30}>
        <Center>
        <iframe src='https://dune.com/embeds/2006249/3319918'  width="100%" height="200"style={{borderRadius: '20px', background: '#FFFFFF'}}></iframe>
        </Center>
        </Card>
        <Space h="xs" />
        <Card padding={2} borderRadius={30}>
        <Center>
        <iframe src='https://dune.com/embeds/2006249/3326219'  width="100%" height="200"style={{borderRadius: '20px', background: '#FFFFFF'}}></iframe>
        </Center>
        </Card>
      </div>
      </SimpleGrid>
      <Space h={50}/>
    </Container>
    </>
  )
}
