import type { NextPage } from 'next'

import Image from 'next/image'
import stats from '../images/statistics.webp'
import { PageContainer } from '../templates/misc/PageContainer'
import Link from 'next/link'


const Home: NextPage = () => {
  return (
    <PageContainer
      title="Home" description='Home page of Disc Golf webpage'>
      <div className='card'>
        <div className='card-text max'>
          <h2>What is disc golf</h2>
          <p>
            Disc golf is a sport similar to golf.
            The aim is to get to the hole in as little shots as possible.
            Usually played in wooded courses, but occasionally can be seen played on courses similar to regular golf courses or even sharing facilities.
          </p>
          <p>
            Like in golf there are discs built for different situations. Mainly split into four categories. Putters, Midranges, Fairway Drivers and Distance drivers.
            Discs are regulated to be inside certain parameters to be allowed into competitive play.
            Even with the regulations discs vary a lot in their flight path.
            Discs are usually sold with 4 numbers
            Speed, Glide, Stability and Fade.
            These numbers are non standard and vary slightly between manufacturers,
            but give an overall idea how a disc is going to fly.
          </p>
          <p>
            Disc golf can be a affordable hobby, discs aren't too expensive and most courses are free to use.
            Check out more information at
          </p>
          <Link href="/starter">How to get started &rarr;</Link>
        </div>
      </div>
      <div className='card'>
        <div className='card-text smaller'>
          <h2>History of the sport </h2>

          <p>Disc golf is a sport with origins in the early 1900s, but it really started to gain popularity around 2007.</p>

          <p>The amount of disc golf courses is also rapidly growing.</p>

          <p>Chart provided by <Link href="https://udisc.com/disc-golf-growth-report">UDisc &rarr;</Link></p>
        </div>
        <div className='card-image-container bigger'>
          <Image src={stats} alt="Placeholder alt" className="image" />
        </div>
        <div className='card-text max'>
          <p>
            Finland is one of the front runners in the sports growth with about 7700 people per one course.
            While the United States has roughly one course for every 43000 people.
          </p>
        </div>
      </div>
    </PageContainer>
  )
}

export default Home
