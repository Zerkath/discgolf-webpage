import type { NextPage } from 'next'
import { Footer } from '../../templates/bars'
import { NavigationBar } from '../../templates/bars/NavigationBar'
import { FlightVisualizer, FlightNumbers } from '../../templates/flightVisualization/FligthVisualizer'

let flight: FlightNumbers = {
    speed: 6,
    glide: 5,
    stability: 0,
    fade: 1
}
let flight2: FlightNumbers = {
    speed: 8,
    glide: 6,
    stability: -2,
    fade: 1
}

let flight3: FlightNumbers = {
    speed: 14,
    glide: 4,
    stability: 0,
    fade: 3
}

let flight4: FlightNumbers = {
    speed: 2,
    glide: 3,
    stability: -4,
    fade: 2
}


const Visualizer: NextPage = () => {

    return (
        <div className='container'>
            <NavigationBar />
            <main className='main'>
                <div className='card'>
                    <FlightVisualizer flightNums={flight} discName="Westside Warship" />
                    <FlightVisualizer flightNums={flight2} discName="Bomb" />
                    <FlightVisualizer flightNums={flight3} discName="Driver" />
                    <FlightVisualizer flightNums={flight4} discName="Driver" />
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Visualizer
