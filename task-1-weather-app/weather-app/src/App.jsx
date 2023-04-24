import React from 'react'
import WeatherApp from './Components/WeatherApp'
import  styles from "./App.module.css"


function App() {
 

  return (
    <>
   <div className={styles.page}>
   <WeatherApp></WeatherApp>
   </div>
   <div className={styles.fotter}>
        <a target="_blank"  href="https://github.com/fitsaleem/syncintern-tasks/tree/main/task-1-weather-app/weather-app">
          Download Source Code
        </a>{" "}
        | Developed by{" "}
        <a target="_blank" href="https://www.youtube.com/c/fitcodding">
          fitcodding
        </a>{" "}
      </div>
   

   </>
)
}

export default App
