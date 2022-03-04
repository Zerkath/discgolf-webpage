import type { NextPage } from 'next'

import Image from 'next/image'
import disc from '../images/disc.webp'
import { PageContainer } from '../templates/misc/PageContainer'

const Home: NextPage = () => {
  return (
    <PageContainer
      title="Home" description='Home page of Disc Golf webpage'>
      <div className='grid'>
        <div className='card'>
          <div className='card-text max'>
            <h2>What is discgolf</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
        <div className='card'>
          <div className='card-text'>
            <h2>History of the sport &rarr;</h2>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div className='card-image-container'>
            <Image src={disc} alt="Placeholder alt" className="image" />
          </div>
        </div>
      </div>
    </PageContainer>
  )
}

export default Home
