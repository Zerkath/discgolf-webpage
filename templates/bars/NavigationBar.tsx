import Link from 'next/link'

export const NavigationBar = () => {
    return (
        <div className='navbar'>
            <NavContent display="Home" link='/' />
            <NavContent display="History" link='/pages/history' />
            <NavContent display="Terminology" link='/pages/terminology' />
            <NavContent display="Disc Reviews" link='/pages/reviews' />
            <NavContent display="How to get started" link='/pages/how-to-start' />
            <NavContent display="Flight number visualizer" link='/pages/visualizer' />
        </ div >
    )
}

const NavContent = (props: PropsContent) => {
    const { display, link } = props
    return (
        <Link href={link} >
            <a>{display}</a>
        </Link >

    )
}

type PropsContent = {
    display: string,
    link: string
}