import type { NextPage } from 'next'
import Footer from '../../templates/Footer'
import { NavigationBar } from '../../templates/NavigationBar'

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
