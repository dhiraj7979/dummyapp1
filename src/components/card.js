import React from 'react'
import styles from '../styles/card.module.css'

// liked, not-liked heart images
import Liked from '../assets/liked.svg'
import NotLiked from '../assets/notLiked.svg'

import Upload from '../assets/upload.svg'


const card = (props) => {
    return (
        <div className={styles.card} >

            <img style={{
                width: "auto",
                height: "100px",
            }} src={props.eventImage} alt="" />

            <div>
                <h3 style={{ fontSize: "16px" }} >{props.eventName}</h3>
                <p style={{ fontSize: "13px" }} >{props.eventTime}</p>
                <p style={{ fontSize: "13px" }} >{props.eventPrice}</p>
            </div>

            <div className={styles.uploadNLike}>
                <img src={Upload} alt="" style={{width: "20px", height: "auto", display: "block", justifySelf: "right", marginRight: "15px", alignSelf: "end"}} />
                <img className={styles.redColor} src={ props.isLiked && Liked || !props.isLiked && NotLiked } alt="" style={{width: "20px", height: "auto", display: "block", alignSelf: "end"}} />
            </div>

        </div>
    )
}

export default card
