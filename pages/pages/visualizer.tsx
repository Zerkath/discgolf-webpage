import type { NextPage } from 'next'
import { Footer } from '../../templates/bars'
import { NavigationBar } from '../../templates/bars/NavigationBar'
import { FlightVisualizer } from '../../templates/flightVisualization/FligthVisualizer'
import { FlightNumbers } from '../../templates/flightVisualization/svgGenerator'

let flight: FlightNumbers = {
    speed: 14,
    glide: 7,
    stability: -4,
    fade: 1
}
let flight2: FlightNumbers = {
    speed: 4,
    glide: 3,
    stability: 1,
    fade: 3
}

const Visualizer: NextPage = () => {

    return (
        <div className='container'>
            <NavigationBar />
            <main className='main'>
                <div className='card'>
                    <FlightVisualizer flightNums={flight} discName="Westside Warship" />
                    <FlightVisualizer flightNums={flight2} discName="Bomb" />
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Visualizer
