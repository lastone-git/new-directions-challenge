import React from 'react';
import { AiOutlineX, AiOutlineFacebook, AiOutlineLinkedin, AiOutlineInstagram } from 'react-icons/ai';
import Image from 'next/image';
import Link from 'next/link';
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
            <Link href="tel:02920390150">
              
                <i className="fa-light fa-phone" aria-hidden="true"></i> 029 2039 0150
              
            </Link>
            <Link href="mailto:enquiries@new-directions.co.uk">
              
                <i className="fa-light fa-envelope" aria-hidden="true"></i> enquiries@new-directions.co.uk
              
            </Link>
          </div>
        </div>
        <div className={styles.rightSection}>
          <div className={styles.social}>
            <Link target="_blank" href="https://twitter.com/NDGroup_" passHref>
              <AiOutlineX size={40} />
            </Link>
            <Link target="_blank"href="https://www.facebook.com/NewDirectionsGroup1/" passHref>
              <AiOutlineFacebook size={40} />
            </Link>
            <Link target="_blank"href="https://www.linkedin.com/company/newdirectionsgroup" passHref>
              <AiOutlineLinkedin size={40} />
            </Link>
            <Link target="_blank"href="https://www.instagram.com/NewDirections_Group/" passHref>
              <AiOutlineInstagram size={40} />
            </Link>
          </div>
          <div className={styles.images}>
            <Image src="/images/footer/cyber-essentials-plus.png" alt="Cyber Essentials Plus" width={50} height={100} />
            <Image src="/images/footer/WAG.png" alt="Llywodraeth Cymru - Welsh Government" width={50} height={100} />
            <Image src="/images/footer/rec-white.png" alt="REC - Institute of Recruitment Professionals" width={100} height={100} />
          </div>
          <div className={styles.links}>
            <nav>
              <ul>
                <li>
                  <Link target="_blank" href="https://www.new-directions.co.uk/wordpress/wp-content/uploads/Modern-Slavery-Statement-2023-24.pdf" passHref>
                    Modern Slavery Policy
                  </Link>
                </li>
                <li>
                  <Link href="https://www.new-directions.co.uk/privacy-policy/" passHref>
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy/#cookies" passHref>
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link href="https://www.new-directions.co.uk/accessibility-statement/" passHref>
                    Accessibility Statement
                  </Link>
                </li>
              </ul>
            </nav>
            <p>
              Copyright © New Directions Holdings Ltd. Part of the 
              <Link target="_blank" href="https://www.new-directions.co.uk/" passHref>
                New Directions Group of Companies
              </Link>.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
