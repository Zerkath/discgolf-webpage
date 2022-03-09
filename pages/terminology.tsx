import type { NextPage } from 'next'
import { FlightVisualizer } from '../templates/flightVisualization/FligthVisualizer'
import { PageContainer } from '../templates/misc/PageContainer'

const Terminology: NextPage = () => {
    return (
        <PageContainer title='Disc golf terminology' description='Descriptions of disc golf terms'>
            <div className='card'>
                <div className='card-text max'>
                    <h2>Hyzer and Anhyzer</h2>
                    <p>
                        Hyzer and anhyzer describe the discs angle at the beginning of a throw and during it.
                    </p>
                    <p>
                        If a disc is hyzer it means that the outside edge of the disc (outside from the body) is closer to the ground.
                        Anhyzer is the opposite of hyzer, meaning the discs outside edge is leaning towards the sky.
                    </p>
                    <p>
                        A disc released in hyzer, given that its stable enough will end up left for a right handed thrower if they&apos;re throwing backhand.
                    </p>
                </div>
            </div>

            <div className='card'>
                <div className='card-text bigger'>
                    <h2>Understability</h2>
                    <p>
                        Understable discs want to turn over.
                        Turning over meaning that the disc will move from a hyzer angle to anhyzer during the flight.
                    </p>
                    <p>
                        Understability happens with some discs, and usually discs become more understable with wear.
                        All discs are understable if thrown fast enough.
                    </p>
                    <p>
                        Understability is sometimes a desirable quality to a disc, it allows the disc to fly further if thrown correctly if not too extreme.
                        The Innova Archangel is a extreme example of an understable disc.
                    </p>
                </div>
                <FlightVisualizer
                    flightNums={{ speed: 8, glide: 6, stability: -4, fade: 1 }}
                    manufacturer="Innova"
                    discName="Archangel"
                    style='smaller'
                />

            </div>

            <div className='card'>
                <div className='card-text max'>
                    <h2>Backhand BH</h2>
                    <p>
                        Backhand is the go to throw for most players, it allows for the most amount of spin and power on the disc.
                    </p>
                    <p>
                        Backhand throw for right hand will end up on the left if the disc isn&apos;t too understable.
                        Opposite for left-handed players, the disc will go right.
                    </p>
                    <p>
                        RHBH right hand backhand or LHBH left hand backhand.
                    </p>
                </div>
            </div>

            <div className='card'>
                <div className='card-text max'>
                    <h2>Forehand FH</h2>
                    <p>
                        Forehand is a good throw to develop it allows the disc to finish to the right for right handed players and left for left handed players.
                    </p>
                    <p>
                        With the forehand the palm is pointing towards the sky during the throw and the power mostly comes from a flick of a wrist.
                    </p>
                    <p>
                        RHFH Right hand forehand or LHFH left hand forehand
                    </p>
                </div>
            </div>



            <div className='card'>
                <div className='card-text bigger'>
                    <h2>Overstability</h2>
                    <p>
                        Overstable discs have the tendency to hyzer out quicker. Usually not the best for long distance, but provides a reliable flight.
                    </p>
                    <p>
                        Overstable discs are usually utility discs where you want the disc to not go the right during the flight and finish hard to the left.
                    </p>
                    <p>
                        A common utility disc is a 9 speed 3 glide 0 stability and 4 fade disc. These are not meant of long distances but rather controller fairway drives to avoid some obstacles.
                    </p>
                </div>
                <FlightVisualizer
                    flightNums={{ speed: 9, glide: 3, stability: 0, fade: 4 }}
                    manufacturer="Latitude 64"
                    discName="Pioneer"
                    style='smaller'
                />

            </div>
        </PageContainer>
    )
}

export default Terminology
