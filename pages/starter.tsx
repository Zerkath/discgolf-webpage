import type { NextPage } from 'next'
import { PageContainer } from '../templates/misc/PageContainer'

const Starter: NextPage = () => {
    return (
        <PageContainer title='How to start disc golf' description='Provides beginners some tips on starting disc golf'>
            <div className='card'>
                <div className='card-text max'>
                    <h2>
                        What do you need to get started
                    </h2>
                    <p>
                        At the very least you should get a putter, midrange and a fairway driver.
                    </p>
                    <p>
                        Everyone should have the power to throw a putter well so a putter mostly comes to personal preference,
                        and it is recommendable to hold a couple of putters and pick something that feels comfortable.
                    </p>
                    <p>
                        For a midrange I would recommend something more on the stable side for a straight flight and that doesn&#39t require perfect technique.
                        Innova Mako3 is one of the goto discs for midranges and it will be useful in the future aswell.
                        Alternatives to the Mako3 could be MVP Axis, Discraft Buzz SS. You cannot go wrong with a Westside Warship either.
                    </p>
                    <p>
                        For a fairway picking something slightly understable isn&#39t a bad option.
                        Example discs would be the Innova Leopard3 with flight nubmers of 7/5/-2/1 or something from the Latitude 64 beginner discs.
                        Latitude 64 Diamond 8/6/-3/1. Latitude beginner discs are usually lower weight also which makes it easier to get them up to speed.
                    </p>
                    <p>
                        Here is some beginner tips by Nate Sexton
                    </p>
                    <div className='embed-container'>
                        <iframe
                            src='https://www.youtube-nocookie.com/embed/T7Buk1Hn8jM'
                            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            frameBorder={0}
                            allowFullScreen
                        />
                    </div>

                </div>
            </div>
        </PageContainer >
    )
}

export default Starter
