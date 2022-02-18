
import type { NextComponentType } from 'next'
import Link from 'next/link'
import { prependOnceListener } from 'process'
import styles from '../styles/NavigationBar.module.scss'

export const NavigationBar: NextComponentType = () => {
  return (
    <div className={styles.navGrid}>
      <NavContent display="Home" link='/'></NavContent>
      <NavContent display="Home" link='/'></NavContent>
      <NavContent display="Home" link='/'></NavContent>
    </ div>
  )
}

const NavContent = (props: PropsContent) => {
  return (
    <Link href="/">
      <a className={styles.navLink}>{props.display}</a>
    </Link>

  )
}

type PropsContent = {
  display: String,
  link: String
}