import type { NextPage } from 'next'
import { PageContainer } from '../templates/misc/PageContainer'

const Home: NextPage = () => {
    return (
        <PageContainer title='Visualization Tool' description='Provides the visualization tool to the end user'>
            <div className='card'>
            </div>
        </PageContainer>
    )
}

export default Home
