import React from 'react'
import styles from './Header.module.css'

export default function Body() {
    const colors=["#FF0000","#0000FF","#00BFFF","#FF7F50","#FFD700"]
  return (
    <div className={styles.container}>
    <p className={styles.heading}>Resume Builder</p>
    <div className={styles.toolbar}>
        <div className={styles.colors}
        
        {...colors.map((value)=>(

            <span key={value}
            style={{backgroundColor: value}}
            className={styles.colors}/>
  ))}
        
        ></div>
    </div>
    
    </div>
  )
}
