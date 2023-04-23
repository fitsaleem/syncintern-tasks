import React from 'react'
import styles from"./WeatherApp.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStreetView } from '@fortawesome/free-solid-svg-icons'


export default function WeatherApp() {

    function handleChange(e){
        console.log({[e.target.value] : e.target.name})

    }


  return (
    
    <>
    <div className={styles.card}>
      <div className={styles.searchbox}>
        <input type="search" placeholder='enter city name' name="searchbox" id="searchbox" onChange={handleChange}/>
      </div>
      <div className={styles.info}>
        <h2 className={styles.location}>
        <FontAwesomeIcon icon={faStreetView} className={`${styles.icon} fa-10x fa-flip`} style={{color: "#1f5120"} } />karachi</h2>
       
      </div>
    </div>
    </>
  )
}
