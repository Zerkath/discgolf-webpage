import type { NextPage } from 'next'
import { FlightVisualizer, FlightNumbers } from '../templates/flightVisualization/FligthVisualizer'
import { PageContainer } from '../templates/misc/PageContainer'

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
    speed: 3,
    glide: 1,
    stability: 0,
    fade: 3
}


const Visualizer: NextPage = () => {

    return (
        <PageContainer title='Visualization Tool' description='Provides the visualization tool to the end user'>
            <div className='card'>
                <FlightVisualizer flightNums={flight} manufacturer='Westside' discName="Warship" />
                <FlightVisualizer flightNums={flight2} manufacturer='Westside' discName="Hatchet" />
                <FlightVisualizer flightNums={flight3} manufacturer="Latitude 64" discName="Ballista Pro" />
                <FlightVisualizer flightNums={flight4} manufacturer="Innova" discName="Pig" />
            </div>
        </PageContainer>
    )
}

export default Visualizer
