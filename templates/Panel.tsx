
import type { NextComponentType } from 'next'
import styles from '../styles/Home.module.scss'

const Panel: NextComponentType = (content) => {
  return (
    <div className={styles.grid}>
      <>Home</>
    </div>
  )
}

export default Panel
