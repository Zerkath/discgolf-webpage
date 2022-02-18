
import type { NextComponentType } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

const Panel: NextComponentType = (content) => {
  return (
    <div className={styles.grid}>
      <>Home</>
    </div>
  )
}

export default Panel
