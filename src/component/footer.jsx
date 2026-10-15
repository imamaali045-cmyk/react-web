import React from 'react'
import styles from './footer.module.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Footer = () => {
  return (
    <footer>
      <div className='container pt-5'>
        <div className='d-flex flex-column align-items-center justify-content-center'>
          <h2 className='fw-bold text-light'>Softland</h2>
          <p className='text-light fs-6'>Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi fuga maxime saepe commodi placeat.</p>
          
          <div className='d-flex align-items-center gap-3 pt-3 justify-content-center'>
            <div className={`${styles.icon} d-flex align-items-center justify-content-center`}>
              <i className="fa-brands fa-x-twitter"></i>
            </div>
            <div className={`${styles.icon} d-flex align-items-center justify-content-center`}>
              <i className="fa-brands fa-facebook-f"></i>
            </div>
            <div className={`${styles.icon} d-flex align-items-center justify-content-center`}>
              <i className="fa-brands fa-instagram"></i>
            </div>
            <div className={`${styles.icon} d-flex align-items-center justify-content-center`}>
              <i className="fa-brands fa-skype"></i>
            </div>
            <div className={`${styles.icon} d-flex align-items-center justify-content-center`}>
              <i className="fa-brands fa-linkedin"></i>
            </div>
          </div>

          <div className={styles.copyright}>
            <p className="m-0 text-light" style={{fontSize: '14px'}}>
              Copyright <strong className="text-white">SoftLand</strong>. All Rights Reserved
            </p>
            <p className="m-0 mt-2 text-light" style={{fontSize: '14px'}}>
              Designed by <a href="https://bootstrapmade.com/" className={styles.credit}>Imama Ali</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;