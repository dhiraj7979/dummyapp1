import React from 'react'
import styles from '../styles/navbar.module.css'

import djImage from '../assets/dj.jpg'

import Search from '../assets/search.svg'

const NavBar = () => {
    return (
        <nav className={styles.navbar}>
            <h2 className={styles.logoName} >
                <a className={styles.logoLink} href="/">eventbrite</a>
            </h2>

            <div className={styles.searchBar} >
                <img href="#search" src={Search} alt="" style={{display: "block",}} />
                <input id="search" className={styles.searchInput} type="text" placeholder="Search for events"/>
            </div>
            
            <p className={styles.navbarText}>Browse Events</p>
            <p className={styles.navbarText}>Host an event</p>
            <p className={styles.navbarText}>Help</p>
            <div className={styles.navbarProfile}>
                <img src={djImage} alt="" className={styles.profilePic} />
                <p style={{ marginRight: "30px", fontSize: "14px", justifySelf: "left" }} >djnino609@gmail.com</p>
            </div>
        </nav>
    )
}

export default NavBar
