
import type { NextComponentType } from 'next'
import Link from 'next/link'

export const NavigationBar: NextComponentType = () => {
  return (
    <div className='navbar'>
      <NavContent display="Home" link='/'></NavContent>
      <NavContent display="Old-Index" link='/pages/old-index'></NavContent>
      <NavContent display="Home" link='/'></NavContent>
    </ div>
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