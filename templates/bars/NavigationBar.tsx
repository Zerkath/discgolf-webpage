import Link from 'next/link'

export const NavigationBar = () => {
    return (
        <div className='navbar'>
            <NavContent display="Home" link='/' />
            <NavContent display="History" link='/history' />
            <NavContent display="Terminology" link='/terminology' />
            <NavContent display="Disc Reviews" link='/reviews' />
            <NavContent display="How to get started" link='/how-to-start' />
            <NavContent display="Flight number visualizer" link='/visualizer' />
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