import type { NextPage } from 'next'
import { FlightVisualizer } from '../templates/flightVisualization/FligthVisualizer'
import { PageContainer } from '../templates/misc/PageContainer'
import Image from 'next/image'
import image_hatchet from '../images/fairway_hatchet.webp'
import image_warship from '../images/midrange_warship.webp'
import image_mercy from '../images/putter_mercy.webp'
import image_p2 from '../images/putter_p2_old.webp'
import image_wraith from '../images/driver_wraith.webp'

const Reviews: NextPage = () => {
    return (
        <PageContainer title='Disc reviews' description='Reviews and pictures of discs'>
            <div className='card'>
                <div className='card-text bigger'>
                    <h2>Westside Hatchet</h2>
                    <p>
                        Westside Hatchet is a understable fairway driver, flight numbers are 9/6/-2/1 according to Westside. The disc has amazing glide, but the understability makes it a very situational disc.
                    </p>
                    <p>
                        For a beginner the disc provides a straight flight and good distance due to the glide, also the fade means the disc won&apos;t move too much at the end of the flight.
                    </p>
                    <p>
                        An intermediate player can utilize the disc for hyzerflips and anhyzer angles. Hatchet is a great disc for learning how to throw an understable disc.
                    </p>
                    <p>
                        For an advanced player the understability might be too much for typical throws and it might have a roller only role in the bag.
                    </p>
                    <p>
                        My own estimate of the flight numbers is 8/6/-3/1 the disc is slightly more understable than the original numbers and the disc doesn&apos;t feel as fast as 9,
                        it has some difficulty cutting through air, and isn&apos;t going to reach similar distances as other 9 speeds.
                    </p>
                </div>
                <div className='card-images smaller'>
                    <FlightVisualizer
                        flightNums={{ speed: 9, glide: 6, stability: -2, fade: 1 }}
                        manufacturer="Westside"
                        discName="Hatchet"
                    />
                    <div className='card-image-container'>
                        <Image className='image' priority alt="Westside Hatchet" src={image_hatchet}></Image>
                    </div>
                </div>
            </div>
            <WarshipReview />
            <div className='card'>
                <div className='card-text bigger'>
                    <h2>Latitude 64 Mercy</h2>
                    <p>
                        The mercy is a deep rim putter with a very neutral flight. Slightly less deep than a Latitude Dagger.
                    </p>
                    <p>
                        I would recommend the putter for people who prefer a putter without a bead. Very comparable to the Dagger slightly less overstable and less glide.
                    </p>
                    <p>
                        During puts when compared to other putters I feel that this disc floats a bit more. Which means it tends to catch the wind.
                    </p>
                    <p>
                        For approaches and distance, I think the putter is good, although the deep rim might cause some issues with grip causing some wobble and grip locks.
                    </p>
                    <p>
                        Overall, I think the flight numbers are accurate, I have only tried the disc with zero hard plastic, and the durability seems to be good.
                    </p>
                </div>
                <div className='card-images smaller'>
                    <FlightVisualizer
                        flightNums={{ speed: 2, glide: 4, stability: 0, fade: 1 }}
                        manufacturer="Latitude 64"
                        discName="Warship"
                    />
                    <div className='card-image-container'>
                        <Image className='image' alt="Latitude Mercy" src={image_mercy}></Image>
                    </div>
                </div>
            </div>

            <div className='card'>
                <div className='card-text bigger'>
                    <h2>Dismania P2</h2>
                    <p>
                        Discmania P2 is a moderately deep putter with a boxy shape. It&apos;s a very straight flying putter for approaches.
                    </p>
                    <p>
                        The shape is a bit unusual it has some changes of direction and doesn&apos;t feel as smooth as some other putters. I think it suits larger hands better than its sibling the Discmania Sensei.
                    </p>
                    <p>
                        Very neutral putting flight doesn&apos;t overly catch the wind. If you like the feel, it will suit you well.
                    </p>
                    <p>
                        Good disc, has had some supply issues in the past, currently released model is in flex 2 plastic and supply issues seem to have been mostly solved.
                    </p>
                </div>
                <div className='card-images smaller'>
                    <FlightVisualizer
                        flightNums={{ speed: 2, glide: 4, stability: 0, fade: 1 }}
                        manufacturer="Discmania"
                        discName="P2"
                    />
                    <div className='card-image-container'>
                        <Image className='image' alt="Discmania Mercy" src={image_p2}></Image>
                    </div>
                </div>
            </div>

            <div className='card'>
                <div className='card-text bigger'>
                    <h2>Innova Wraith</h2>
                    <p>
                        The Innova Wraith is a very popular 11 speed distance driver. It has a good blend of understability and provides some good distance for intermediates and professionals.
                    </p>
                    <p>
                        The shape is smooth, the rim isn&apos;t overly large and can be handled by most hand sizes. Comes in most Innova plastics. Star and champion plastics going for about 15 euros, dx variants for 12.
                    </p>
                    <p>
                        For beginners the speed might be too much to get the full flight out of it. But it&apos;s a good disc to grow into and will at least be useful for beginners in headwinds and throws where stability is required.
                    </p>
                    <p>
                        For intermediates and professionals, it can provide a very straight shot with a hyzer flip or maximum distance with a S line curve.
                    </p>
                    <p>
                        Probably one of the best distance drivers out there for most players, requires some experience to get the most out of it.
                    </p>
                </div>
                <div className='card-images smaller'>
                    <FlightVisualizer
                        flightNums={{ speed: 11, glide: 5, stability: -1, fade: 3 }}
                        manufacturer="Innova"
                        discName="Wraith"
                    />
                    <div className='card-image-container'>
                        <Image className='image' alt="Innova Wraith" src={image_wraith}></Image>
                    </div>
                </div>
            </div>
        </PageContainer>
    )
}

export default Reviews

interface ReviewProps {
    header?: string
}

export function WarshipReview(props: ReviewProps) {
    return (
        <div className='card'>
            <div className='card-text bigger'>
                <h2>{props.header || ""}Westside Warship</h2>
                <p>
                    The Westside Warship is a higher speed midrange driver. Previously listed as a 6 speed, readjusted number changed to 5.
                </p>
                <p>
                    I think this midrange is very suitable for every level of player.
                </p>
                <p>
                    For beginners it might be a more overstable midrange that has a reliable fade.
                    Intermediates will get good distance from the Warship with a very straight flight.
                </p>
                <p>
                    It&apos;s almost a low-speed fairway driver with minimal fade, included benefit is the wider rim when compared to a fairway driver meaning the flight is very predictable.
                </p>
                <p>
                    I think the old 6/5/0/1 flight numbers were perfectly accurate. It&apos;s a disc I would recommend to anyone, the shape and size is very comfortable to use.
                </p>
            </div>
            <div className='card-images smaller'>
                <FlightVisualizer
                    flightNums={{ speed: 5, glide: 6, stability: 0, fade: 1 }}
                    manufacturer="Westside"
                    discName="Warship"
                />
                <div className='card-image-container'>
                    <Image className='image' alt="Westside Warpship" src={image_warship}></Image>
                </div>
            </div>
        </div>
    )
}
