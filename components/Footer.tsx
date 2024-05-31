import React from 'react';
import { AiOutlineX, AiOutlineFacebook, AiOutlineLinkedin, AiOutlineInstagram } from 'react-icons/ai';
import Image from 'next/image';
import styles from '../styles/components/footer.module.scss';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.contact}>
          <h4>Get in touch</h4>
          <form className={styles.form}>
            <input type="email" placeholder="Your email" required />
            <button type="submit">Sign Up</button>
          </form>
          <div className={styles["contact-links"]}>
            <a href="tel:02920390150">
              <i className="fa-light fa-phone" aria-hidden="true"></i> 029 2039 0150
            </a>
            <a href="mailto:enquiries@new-directions.co.uk">
              <i className="fa-light fa-envelope" aria-hidden="true"></i> enquiries@new-directions.co.uk
            </a>
          </div>
        </div>
        <div className={styles.rightSection}>
          <div className={styles.social}>
            <a href="https://twitter.com/NDGroup_" target="_blank" rel="noopener"><AiOutlineX size={40} /></a>
            <a href="https://www.facebook.com/NewDirectionsGroup1/" target="_blank" rel="noopener"><AiOutlineFacebook size={40} /></a>
            <a href="https://www.linkedin.com/company/newdirectionsgroup" target="_blank" rel="noopener"><AiOutlineLinkedin size={40} /></a>
            <a href="https://www.instagram.com/NewDirections_Group/" target="_blank" rel="noopener"><AiOutlineInstagram size={40} /></a>
          </div>
          <div className={styles.images}>
            <Image src="/images/footer/cyber-essentials-plus.png" alt="Cyber Essentials Plus" width={50} height={100} />
            <Image src="/images/footer/WAG.png" alt="Llywodraeth Cymru - Welsh Government" width={50} height={100} />
            <Image src="/images/footer/rec-white.png" alt="REC - Institute of Recruitment Professionals" width={100} height={100} />
          </div>
          <div className={styles.links}>
            <nav>
              <ul>
                <li><a href="https://www.new-directions.co.uk/wordpress/wp-content/uploads/Modern-Slavery-Statement-2023-24.pdf" target="_blank" rel="noopener">Modern Slavery Policy</a></li>
                <li><a href="https://www.new-directions.co.uk/privacy-policy/" rel="privacy-policy">Privacy Policy</a></li>
                <li><a href="/privacy-policy/#cookies">Cookie Policy</a></li>
                <li><a href="https://www.new-directions.co.uk/accessibility-statement/">Accessibility Statement</a></li>
              </ul>
            </nav>
            <p>Copyright © New Directions Holdings Ltd. Part of the <a href="https://www.new-directions.co.uk/" target="_blank" rel="noopener">New Directions Group of Companies</a>.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
