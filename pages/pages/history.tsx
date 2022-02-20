import type { NextPage } from 'next'
import { Footer } from '../../templates/bars'
import { NavigationBar } from '../../templates/bars/NavigationBar'

const Home: NextPage = () => {
    return (
        <div>
            <NavigationBar />
            <main className='main'>

            </main>
            <Footer />
        </div>
    )
}

export default Home
