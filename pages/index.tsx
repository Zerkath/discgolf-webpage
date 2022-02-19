import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../templates/Footer'
import { NavigationBar } from '../templates/NavigationBar'

const Home: NextPage = () => {
  return (
    <div className='container'>
      <Head>
        <title>Discgolf-Webpage</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavigationBar>test</NavigationBar>

      <main className='main'>
        <div className='grid'>
          <a className='card'>
            <h2>What is discgolf</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a className='card'>
            <h2>History of the sport &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className='card'
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className='card'
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Home
