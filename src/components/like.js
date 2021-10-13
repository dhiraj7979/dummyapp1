import React from 'react'
import styles from '../styles/likelist.module.css'

import Card from './card'

// event images
import Event1 from '../assets/event1.jpg'
import Event2 from '../assets/event2.jpg'
import Event3 from '../assets/event3.jpg'


const like = () => {
    return (
        <section className={styles.likeSection} >
            <h2 style={{ fontSize: "2.5rem", marginBottom: "30px" }}>Likes</h2>

            <Card eventImage={Event1}  eventName="Dummy event 1" eventTime="Mon, Feb 15,2021 2:30 AM IST" eventPrice="Starts at £27.55" isLiked={true} />

            <Card eventImage={Event2}  eventName="Dummy event 2" eventTime="Mon, Feb 15,2021 2:30 AM IST" eventPrice="Starts at £27.55" isLiked={true} />

            <Card eventImage={Event3}  eventName="Dummy event 3" eventTime="Mon, Feb 15,2021 2:30 AM IST" eventPrice="Starts at £27.55" isLiked={true} />
            

        </section>
    )
}

export default like
