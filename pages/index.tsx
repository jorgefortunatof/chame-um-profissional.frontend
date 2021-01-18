import Head from 'next/head'

import { Body } from '../styles/home';

const Home: React.FC = () => {
  return (
    <Body>
      <Head>
        <title>Chame um Profissional</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      Body
    </Body>
  )
}

export default Home;
