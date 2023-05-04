import React from 'react'
import styles from './Header.module.css';
import resumeSvg from '../assets/resumeSvg.svg';


export default function Header() {
  return (
    
    <>
    <div className={styles.container}>
    <img src={resumeSvg} alt="Resume Icon" className={styles.icon} />
        <p className={styles.heading}>
        Land Your Dream Job with a <span>Beautiful,</span> Custom Resume    
        </p>
        <p className={styles.heading}>
            Maker your Own <span>Resume</span> Start Building Now!   
        </p>
    </div>
    </>
  )
}
