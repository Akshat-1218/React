import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
      <h1>Akshat Pandey</h1>
      <button className={styles.btn}>Apply Now</button>
    </div>
  )
}

export default Header
