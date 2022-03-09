import type { NextPage } from 'next'

import Image from 'next/image'
import stats from '../images/statistics.webp'
import { PageContainer } from '../templates/misc/PageContainer'
import Link from 'next/link'
import { WarshipReview } from './reviews'


const Home: NextPage = () => {
  return (
    <PageContainer
      title="Home" description='Home page of Disc Golf webpage'>
      <div className='card'>
        <div className='card-text max'>
          <h2>Disc golf</h2>
          <p>
            In disc golf the goal is to get to the basket from the tee in the fewest amount of throws from the tee.
            A fairway is usually 90m to 160m, with some exceptions. Holes typically start at par 3.
          </p>
          <p>
            In disc golf the PDGA Professional Disc Golf Association, regulates what kind of discs can be used in competitions.
            The regulations allow for a good amount of variation.
          </p>
          <p>
            Discs usually land into one of the 4 slots. Putters, midranges, fairway drivers and distance drivers.
            Putters are not built for distance, mostly for putting, but unlike golf, putting discs can still be thrown for distance.
            They usually fly very straight with a gentle drop at the end. Great for tight fairways.
          </p>
          <p>
            Midranges usually go further than putters, midranges are the largest diameter discs which mean that they retain their rotational torque the best during a flight.
            This means the midranges keep their angle during the flight.
          </p>
          <p>
            Fairways or fairway drivers are meant for distance, but with more control than distance drivers.
          </p>
          <p>
            Distance drivers are meant for maximum distance, but usually for the beginners they end up being too overstable and they will get more distance with midranges.
          </p>
          <Link href="/starter">How to get started &rarr;</Link>
        </div>
      </div>
      <div className='card'>
        <div className='card-text smaller'>
          <h2>History of the sport</h2>

          <p>Disc golf is a sport with origins in the early 1900s, but it really started to gain popularity around 2007.</p>

          <p>The amount of disc golf courses is also rapidly growing.</p>

          <p>Chart provided by <Link href="https://udisc.com/">UDisc &rarr;</Link></p>
        </div>
        <div className='card-image-container bigger'>
          <a href="https://udisc.com/disc-golf-growth-report">
            <Image src={stats} alt="Disc golf growth chart" className="image" />
          </a>
        </div>
        <div className='card-text max'>
          <p>
            Disc golf has been growing for a good while, and shows no signs of slowing down.
            In comparison to golf, disc golf is cheap to start and play. Discs cost a lot less than clubs and most courses don&apos;t cost to play.
          </p>
          <p>
            The environmental impact of disc golf might be smaller when compared to regular golf, disc golf is usually played in the woods.
            This means that courses do not convert forests into open grasslands and require less maintenance as wood courses do not fertilizer or constant lawn mowing.
          </p>
        </div>
      </div>
      <WarshipReview header='Latest review: ' />
    </PageContainer>
  )
}

export default Home
